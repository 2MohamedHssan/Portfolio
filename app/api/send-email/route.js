import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
      <div style="font-family: 'Segoe UI', sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <ul style="font-size: 16px; color: #555;">
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Message:</strong><br />${message}</li>
          </ul>
          <hr style="margin: 20px 0;" />
          <p style="font-size: 14px; color: #888; text-align: center;">Mohamed Hassan<br />Frontend Developer & IT Specialist</p>
        </div>
      </div>
    `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting me!",
      html: `
      <div style="background-color: #f4f4f4; padding: 30px 0; font-family: 'Segoe UI', sans-serif;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <div style="background-color: #01f3f4; color: #fff; padding: 20px 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
          </div>
          <div style="padding: 30px; color: #333;">
            <p style="font-size: 16px; line-height: 1.6;">
              I appreciate you getting in touch! I’ve received your message and will respond as soon as possible.
            </p>
    
            <p style="font-size: 16px; margin-top: 20px;">🔎 <strong>Your Message Summary:</strong></p>
            <div style="background-color: #f9fafb; padding: 15px 20px; border-left: 4px solid #01f3f4; border-radius: 6px;">
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong>Message:</strong> ${message}</p>
            </div>
    
            <p style="font-size: 14px; color: #666; margin-top: 40px;">
              Best regards,<br/>
              <strong>Mohamed Hassan</strong><br/>
              Full Stack Developer & IT Specialist<br/>
              <a href="https://portfolio-v418.vercel.app/" style="color: #01f3f4; text-decoration: none;">portfolio-v418.vercel</a>
            </p>
          </div>
          <div style="background-color: #f0f0f0; text-align: center; font-size: 12px; color: #888; padding: 20px;">
            This is an automated message from Mohamed Hassan’s portfolio site.
          </div>
        </div>
      </div>
    `,

    });

    return new Response(JSON.stringify({ message: "Emails sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ message: "Error sending email", error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
