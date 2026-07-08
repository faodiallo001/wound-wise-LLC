import { Resend } from "resend";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false
  }
};

const resend = new Resend(process.env.RESEND_API_KEY);

function parseForm(req) {

  const form = formidable({
    multiples: true
  });

  return new Promise((resolve, reject) => {

    form.parse(req, (err, fields, files) => {

      if(err){
        reject(err);
      }

      resolve({
        fields,
        files
      });

    });

  });

}

export default async function handler(req, res){

  if(req.method !== "POST"){

    return res.status(405).json({
      error: "Method not allowed"
    });

  }

  try{

    const { fields } = await parseForm(req);

    const data = await resend.emails.send({

      from: "onboarding@resend.dev",

      to: "faodiallo001@gmail.com",

      subject: "New Patient Referral",

      html: `

      <h2>New Patient Referral</h2>

      <p><strong>Organization:</strong> ${fields.organization}</p>

      <p><strong>Provider:</strong> ${fields.providerName}</p>

      <p><strong>Phone:</strong> ${fields.phone}</p>

      <p><strong>Email:</strong> ${fields.email}</p>

      <p><strong>Patient:</strong> ${fields.patientName}</p>

      <p><strong>DOB:</strong> ${fields.patientDOB}</p>

      <p><strong>Wound Type:</strong> ${fields.woundType}</p>

      <p><strong>Urgency:</strong> ${fields.urgency}</p>

      <p><strong>Clinical Notes:</strong></p>

      <p>${fields.clinicalNotes}</p>

      `
    });

    return res.status(200).json(data);

  }catch(error){

    return res.status(500).json({
      error: error.message
    });

  }

}
