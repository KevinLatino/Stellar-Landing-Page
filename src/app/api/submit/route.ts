import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Remitente
      to: 'destinatario@example.com', // Correo electrónico de destino
      subject: 'Nuevo mensaje desde el formulario de contacto',
      text: message, // Texto plano del mensaje
      html: `<p>Tienes un nuevo mensaje de <b>${name}</b> (<a href="mailto:${email}">${email}</a>):</p>
             <p>${message}</p>`, // Contenido en HTML
    });

    return NextResponse.json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
  }
}
