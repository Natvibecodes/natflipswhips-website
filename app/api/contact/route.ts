import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    const { error } = await resend.emails.send({
      from: "NatFlipsWhips <onboarding@resend.dev>",
      to: ["nataly.ghiotto99@icloud.com"],
      subject: `New NatFlipsWhips Inquiry - ${service}`,
      replyTo: email,
      html: `
        <h2>New Website Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Service:</strong> ${service}</p>

        <hr />

        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}