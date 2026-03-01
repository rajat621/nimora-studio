// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   const formData = await req.formData();

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to: "your-email@gmail.com",
//     subject: "New Contact Form Submission",
//     html: `
//       <h3>New Submission</h3>
//       <p><b>Name:</b> ${formData.get("name")}</p>
//       <p><b>Email:</b> ${formData.get("email")}</p>
//       <p><b>Phone:</b> ${formData.get("phone")}</p>
//       <p><b>Company:</b> ${formData.get("company")}</p>
//       <p><b>Message:</b> ${formData.get("message")}</p>
//     `,
//   });

//   return Response.json({ success: true });
// }