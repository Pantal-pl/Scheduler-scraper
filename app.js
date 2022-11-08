const cheerio = require("./node_modules/cheerio");
const dotenv = require("dotenv");
const originalFetch = require("./node_modules/node-fetch");
var fetch = require("fetch-retry")(originalFetch, {
  retries: 5,
  retryDelay: 800,
});
dotenv.config();

async function getSchedule(pageURL) {
  console.log("start app.js");
  try {
    console.log("start fetch");
    const response = await fetch(pageURL);
    console.log("stop fetch");

    const body = await response.text();
    const $ = cheerio.load(body);

    const B1ScheduleButton = $(process.env.HTML_BUTTON_SELECTOR_B1);
    const A1ScheduleButton = $(process.env.HTML_BUTTON_SELECTOR_A1);
    const A2ScheduleButton = $(process.env.HTML_BUTTON_SELECTOR_A2);

    const B1ScheduleLink = B1ScheduleButton.attr("data-downloadurl");
    const A1ScheduleLink = A1ScheduleButton.attr("data-downloadurl");
    const A2ScheduleLink = A2ScheduleButton.attr("data-downloadurl");

    const obj = {
      linkB1: B1ScheduleLink,
      linkA1: A1ScheduleLink,
      linkA2: A2ScheduleLink,
    };
    console.log("stop app.js");
    return obj;
  } catch (error) {
    console.error(error);
  }
}

module.exports = getSchedule;
