import formData from 'form-data'
import Mailgun from 'mailgun.js'
import {supportEmail} from "@/constants/Constants";
import {NextRequest, NextResponse} from "next/server";

const API_KEY = process.env.MAILGUN_API_KEY || ''
const DOMAIN = process.env.MAILGUN_DOMAIN || ''

const RATE_LIMIT_WINDOW_MS = 10_000;
const RATE_LIMIT_MAX_REQUESTS = 1;

const HOURLY_LIMIT_WINDOW_MS = 60 * 60_000;
const HOURLY_MAX_REQUESTS = 5;

const ipStore = new Map<string, number[]>();

function rateLimit(ip: string): boolean {
  const now = Date.now();

  if (!ipStore.has(ip)) ipStore.set(ip, []);
  const timestamps = ipStore.get(ip)!;
  const recent = timestamps.filter((t) => now - t < HOURLY_LIMIT_WINDOW_MS);

  ipStore.set(ip, recent);
  const last10sec = recent.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (last10sec.length >= RATE_LIMIT_MAX_REQUESTS) return false;
  if (recent.length >= HOURLY_MAX_REQUESTS) return false;

  recent.push(now);
  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({username: 'api', key: API_KEY, url: 'https://api.eu.mailgun.net'});

  const body = await req.json()
  let {name, email, message, website} = body

   // ignore spam (silently)
  if (
    (website && website.trim() !== "") || 
    (!message.includes(" ")) || 
    (name.length > 15 && !name.includes(" "))
  ) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }
  
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!validEmail) {
    return NextResponse.json({ success: false, message: "Invalid email address" }, { status: 400});
  }

  const sName = name.replace(/[^a-zæøåA-ZÆØÅ0-9\s'-]/g, '')
  const sMessage = message.replace(/[^a-zA-Z0-9\s.,!?'"@#$%&*()-]/g, '')

  try {
    await mg.messages.create(DOMAIN, {
      from: 'Contact Form <contact@mg.bysaether.com>',
      to: [supportEmail],
      subject: 'New Contact Form Submission on BySaether.com',
      text: `
        You have a new form entry: 
        
        Name: ${sName}
        Email: ${email}
        
        Message:
        ${sMessage}
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true, message: 'Thank you! We will reach out to you soon.' }, { status: 200 })
  } catch (err) {
    console.error('Mailgun error:', err)
    return NextResponse.json(
      { success: false, message: 'An error occurred while sending the email. Please try again later.' },
      { status: 500 }
    );
  }
}

