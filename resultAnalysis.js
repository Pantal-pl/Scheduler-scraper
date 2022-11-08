const mongoose = require("mongoose");

const Links = require("./models/link");
const link = require("./models/link");
const dotenv = require("dotenv");

const calculateHash = require("./utils/calculateHash");
const updateDbAndInformUser = require("./utils/updateDbAndInformUser");

dotenv.config();

async function compareAndSaveResults(linkObject) {
  console.log("start resultAnalysis.js");
  try {
    console.log("start mongo");
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    });
    console.log("\u001b[" + 32 + "m" + "Mongodb connected!" + "\u001b[0m");
    try {
      const linksStoreInDatabase = await Links.find().exec();

      const B1Link = linksStoreInDatabase[0].link;
      const A1Link = linksStoreInDatabase[1].link;
      const A2Link = linksStoreInDatabase[2].link;

      const B1NewLink = linkObject.linkB1.slice(0, -32);
      const A1NewLink = linkObject.linkA1.slice(0, -32);
      const A2NewLink = linkObject.linkA2.slice(0, -32);

      const B1Obj = await calculateHash(B1NewLink, B1Link);
      const A1Obj = await calculateHash(A1NewLink, A1Link);
      const A2Obj = await calculateHash(A2NewLink, A2Link);

      if (B1Obj.changes) {
        await updateDbAndInformUser(B1Obj.correctLink, B1Obj.correctHash, "B1");
      } else if (A1Obj.changes) {
        await updateDbAndInformUser(A1Obj.correctLink, A1Obj.correctHash, "A1");
      } else if (A2Obj.changes) {
        await updateDbAndInformUser(A2Obj.correctLink, A2Obj.correctHash, "A2");
      } else {
        console.log("\u001b[" + 31 + "m" + "No changes!" + "\u001b[0m");
      }
    } catch (err) {
      console.log(err);
    }
    console.log("end mongo");
  } catch (error) {
    console.log(error);
  }
  console.log("stop resultAnalysis.js");
};

module.exports = compareAndSaveResults;
