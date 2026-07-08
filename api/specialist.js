import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      fullName,
      email,
      phone,
      city,
      woundType,
      woundDuration,
      painLevel,
      symptoms,
      treatment,
      insurance,
      notes
    } = req.body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "Woundwisepractice@gmail.com",
      subject: "New Specialist Consultation Request",
      html: `
        <h2>New Specialist Consultation Request</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City / ZIP:</strong> ${city}</p>

        <p><strong>Wound Type:</strong> ${woundType}</p>
        <p><strong>Wound Duration:</strong> ${woundDuration}</p>
        <p><strong>Pain Level:</strong> ${painLevel}</p>
        <p><strong>Symptoms:</strong> ${symptoms}</p>
        <p><strong>Currently Receiving Treatment:</strong> ${treatment}</p>
        <p><strong>Insurance:</strong> ${insurance}</p>

        <p><strong>Additional Notes:</strong></p>
        <p>${notes}</p>
      `
    });

    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
