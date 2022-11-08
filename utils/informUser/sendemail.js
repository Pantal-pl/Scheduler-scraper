const sgMail = require("@sendgrid/mail");
const mailTemplate = require("../../helpers/mailTemplate");

async function sendMail(link, group) {
  console.log("start sendMail.js");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  const emailsList = process.env.TO_EMAIL_LIST.split(", ");
  const htmlEl = await mailTemplate(link);

  const msg = {
    to: emailsList,
    from: process.env.FROM_EMAIL,
    subject: "Dostępny jest nowy plan dla grupy " + group,
    text: link,
    html: (await htmlEl).toString(),
  };
  try {
    const mail = await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
}

module.exports = sendMail;
