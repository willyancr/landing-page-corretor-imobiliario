import { NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

type ContactForm = {
  email: string;
  name: string;
  message: string;
};

const transporter: Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "willyancr@gmail.com",
    pass: "rdntmyrwgqonuuar",
  },
});

export async function POST(req: Request) {
  const body: ContactForm = await req.json();

  const { email, name, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Preencha todos os campos" },
      { status: 400 },
    );
  }

  const mailOptions: nodemailer.SendMailOptions = {
    from: "arturfilh@gmail.com",
    to: "arturfilh@gmail.com",
    subject: `Novo contato de ${name}`,
    text: message,
    replyTo: email,
  };
  try {
    await transporter.sendMail(mailOptions);
    NextResponse.json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    NextResponse.json({ error: "Erro ao enviar o email" }, { status: 500 });
  }
  return NextResponse.json(
    { message: "Email enviado com sucesso!" },
    { status: 200 },
  );
}
