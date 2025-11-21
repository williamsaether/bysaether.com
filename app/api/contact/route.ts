import formData from 'form-data'
import Mailgun from 'mailgun.js'
import {supportEmail} from "@/constants/Constants";
import {NextRequest, NextResponse} from "next/server";

const API_KEY = process.env.MAILGUN_API_KEY || ''
const DOMAIN = process.env.MAILGUN_DOMAIN || ''

export async function POST(req: NextRequest) {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({username: 'api', key: API_KEY, url: 'https://api.eu.mailgun.net'});

  const body = await req.json()
  let {name, email, message, website} = body

  if (website && website.trim() !== "") {
    return NextResponse.json({ success: true }); // ignore spam (silently)
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

