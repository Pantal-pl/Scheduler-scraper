const getSchedule = require("./app");
const compareAndSaveResults = require("./resultAnalysis");
const fetch = require("./node_modules/node-fetch");

const dotenv = require("dotenv");

dotenv.config();

// exports.handler = async function () {
//   const result = await getSchedule(process.env.SCRAPED_LINK);
//   try {
//     await compareAndSaveResults(result);
//   } catch (error) {
//     console.err(error);
//   }
// };

async function start(event, context) {
  const result = await getSchedule(process.env.SCRAPED_LINK);
  try {
    await compareAndSaveResults(result);
  } catch (error) {
    console.err(error);
  }
}
start();
