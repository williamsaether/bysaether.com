import formData from 'form-data'
import Mailgun from 'mailgun.js'
import {supportEmail} from "@/constants/Constants";
import {NextResponse} from "next/server";

const API_KEY = process.env.MAILGUN_API_KEY || ''
const DOMAIN = process.env.MAILGUN_DOMAIN || ''

export async function POST(req: Request) {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({username: 'api', key: API_KEY, url: 'https://api.eu.mailgun.net'});

  const body = await req.json()
  let {name, email, message} = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  const sName = name.replace(/[^a-zæøåA-ZÆØÅ0-9\s'-]/g, '')
  const sEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : ''
  const sMessage = message.replace(/[^a-zA-Z0-9\s.,!?'"@#$%&*()-]/g, '')

  if (!email) throw new Error('Invalid email address')

  try {
    mg.messages.create(DOMAIN, {
      from: 'Contact Form <contact@mg.bysaether.com>',
      to: [supportEmail],
      subject: 'New Contact Form Submission on BySaether.com',
      text: `
        Hello,
        
        You have a new form entry: 
        
        Name: ${sName}
        Email: ${sEmail}
        
        Message:
        ${sMessage}
      `,
      replyTo: [sEmail],
    })
    .then(msg => console.log(msg))

    return NextResponse.json({ message: 'Thank you! We will reach out to you soon.' }, { status: 200 })
  } catch (err) {
    console.error('Error sending email', err)
    return NextResponse.json(
      { message: 'An error occurred while sending the email. Please try again later.' },
      { status: 500 }
    );
  }
}

