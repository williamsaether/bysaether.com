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
const BLOCKED_EMAIL_DOMAINS = [
  "jmailservice.com", // known spam domain using my contact form
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "temp-mail.org",
  "tempmail.com",
  "yopmail.com",
  "trashmail.com",
  "sharklasers.com",
  "getnada.com",
  "dispostable.com",
  "maildrop.cc",
  "fakeinbox.com",
  "throwawaymail.com",
  "mintemail.com",
  "emailondeck.com",
];

const ipStore = new Map<string, number[]>();

function getEmailDomain(email: string): string {
  const at = email.lastIndexOf("@");
  if (at < 0) return "";
  return email.slice(at + 1).toLowerCase();
}

function isBlockedEmailDomain(email: string): boolean {
  const domain = getEmailDomain(email);
  if (!domain) return false;

  return BLOCKED_EMAIL_DOMAINS.some(
    (blocked) => domain === blocked || domain.endsWith(`.${blocked}`)
  );
}

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
  const forwardedFor = req.headers.get("x-forwarded-for") || "unknown";
  const ip = forwardedFor.split(",")[0]?.trim() || "unknown";

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
  name = typeof name === "string" ? name.trim() : "";
  email = typeof email === "string" ? email.trim().toLowerCase() : "";
  message = typeof message === "string" ? message.trim() : "";
  website = typeof website === "string" ? website.trim() : "";

   // ignore spam (silently)
  if (
    website !== "" ||
    isBlockedEmailDomain(email) ||
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
