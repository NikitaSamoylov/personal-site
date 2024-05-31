import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request: any) {
  try {
    const { name, email, msg, company } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'nsam7655@gmail.com',
        pass: process.env.GMAIL_PASSWORD
      }
    })

    const mailOption = {
      from: email,
      to: 'nsam7655@gmail.com',
      subject: "email с личного сайта",
      html: `
        <h3>Привет, Никита</h3>
        <li> Письмо от: ${ name }, ${ email }, ${ company }</li> 
        <li> Суть: ${ msg }</li> 
        `
    }

    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}