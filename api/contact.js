import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req,res){

if(req.method !== 'POST'){

return res.status(405).end();

}

try{

const { name,email,phone,message } = req.body;

await resend.emails.send({

from:'info@woundwisellc.com',

to:'Woundwisepractice@gmail.com',

subject:'New Contact Request',

html:`
<h2>New Contact Request</h2>

<p><strong>Name:</strong> ${name}</p>

<p><strong>Email:</strong> ${email}</p>

<p><strong>Phone:</strong> ${phone}</p>

<p><strong>Message:</strong></p>

<p>${message}</p>
`

});

return res.status(200).json({success:true});

}catch(error){

return res.status(500).json({error:error.message});

}

}
