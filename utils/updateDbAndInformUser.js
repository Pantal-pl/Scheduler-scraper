const updateDb = require("./updateDb");
const sendSMS = require("./informUser/sendSMS");
const sendMail = require("./informUser/sendemail");

async function updateDbAndInformUser(link, hash, group) {
  await updateDb(link, hash);
  await sendMail(link, group);
  await sendSMS(link, group);
}

module.exports = updateDbAndInformUser;
