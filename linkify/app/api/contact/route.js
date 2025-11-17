import nodemailer from "nodemailer";
export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Create transporter

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email Content

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_PASSWORD,

      subject: `New Contact Form Submission from ${name}`,
      text: `
      Name: ${name}
      Email: ${email}
      Message : ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.log("Email Error:", error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
    });
  }
}
