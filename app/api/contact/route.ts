import formData from 'form-data'
import Mailgun from 'mailgun.js'
import {supportEmail} from "@/constants/Constants";
import type { NextApiRequest, NextApiResponse } from 'next'

const API_KEY = process.env.MAILGUN_API_KEY || ''
const DOMAIN = process.env.MAILGUN_DOMAIN || ''

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({username: 'api', key: API_KEY});

  const {name, email, message} = req.body

  try {
    const emailRes = mg.messages.create(DOMAIN, {
      from: 'Contact Form <contact@bysaether.com>',
      to: [supportEmail],
      subject: 'BySaether.com Contact Form Response',
      text: `
      Hello,
      
      You have a new form entry from: ${name} - ${email}.
      
      ${message}
    `,
    })
      .then(msg => console.log(msg)) // logs response data
      .catch(err => console.log(err));

    console.log(emailRes)
  } catch (err) {
    console.error('Error sending email', err)
  }

  res.status(200).json({ submitted: true })
}

