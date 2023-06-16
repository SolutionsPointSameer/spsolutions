// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// require('dotenv').config();


import nodemailer from "nodemailer";

const index = (req, res) => {

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'spsolutionspointcareers@gmail.com',
      pass: 'sgdotktcaqwqanyu',
    },
    secure: true,
  });

  // console.log(req.body);

  const data = req.body;

  // console.log(data);
  // console.log(req.body.name);

  const mailData = {
    from: 'spsolutionspointcareers@gmail.com',
    to: 'hr@solutionspoint.net',
    subject: `SP Solutions Point Careers Form Filled`,
    // text: "",
    html: `<div style="background-color: #f5f5f5; padding: 20px;">
      <div style="background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #333333; font-size: 24px; margin-bottom: 20px;">New Careers Form Filled With The Following Information</h1>
        
        <div style="margin-bottom: 10px;">
          <strong>Name:</strong> ${data.name}
        </div>
        <div style="margin-bottom: 10px;">
          <strong>Email:</strong> ${data.email}
        </div>
        <div style="margin-bottom: 10px;">
          <strong>Contact:</strong> ${data.contact}
        </div>
        <div style="margin-bottom: 10px;">
          <strong>Address:</strong> ${data.address}
        </div>
        <div style="margin-bottom: 10px;">
          <strong>City:</strong> ${data.city}
        </div>
        <div style="margin-bottom: 10px;">
          <strong>State:</strong> ${data.state}
        </div>
        <div style="margin-bottom: 10px;">
          <strong>Postal Code:</strong> ${data.postalCode}
        </div>
        <div style="margin-bottom: 10px;">
          <strong>Country:</strong> ${data.country}
        </div>
        <div style="margin-bottom: 10px;">
          <strong>Position:</strong> ${data.position}
        </div>
        <div style="margin-bottom: 10px;">
          <strong>When could you start?:</strong> ${data.date}
        </div>
        <div style="margin-bottom: 10px;">
          <strong>Current Employment:</strong> ${data.currentEmployment}
        </div>
        <div style="margin-bottom: 10px;">
          <strong>Resume:</strong> ${data.resume}
        </div>
      </div>
    </div>`
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err)
      res.status(404);
    }
    else {
      console.log(info)
      res.status(200);
    }
  });

  // console.log(req.body);

}

export default index;