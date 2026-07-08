import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  try {

    const data = await resend.emails.send({

      from: "onboarding@resend.dev",

      to: "faodiallo001@gmail.com",

      subject: "WoundWise Test Email",

      html: `
        <h2>Resend is working 🎉</h2>
        <p>This is a test email from WoundWise LLC.</p>
      `

    });

    return res.status(200).json(data);

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }

}
