console.log("Script Started");
const fetch = require("node-fetch");
const fs = require("fs");
function type(auth, channel) {
  try {
    fetch(`https://discord.com/api/v9/channels/${channel}/typing`, {
      headers: {
        "accept-language": "en-US",
        authorization: auth,
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-debug-options": "bugReporterEnabled",
        "x-discord-locale": "en-US",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "POST",
      mode: "cors",
    })
    //copied directly from discord console, stripped cookie / other identifying headers
    .then((data) => {
      data.status == 204 || (console.log(`HTTP error code ${data.status}. Make sure that your token and channel ID are valid`));
    });
  } catch (err) {
    console.log(`Error:\n${err}\nPress Ctrl+C to terminate`);
    process.stdin.resume();
    //keeps executable window open
  }
}
if (!fs.existsSync("./config.json")) {
  console.log("ERR: Ensure that config.json is present");
  //^ensures config is present
  process.stdin.resume();
  //keeps executable window open
} else {
  let rawdata = fs.readFileSync("./config.json");
  let config = JSON.parse(rawdata);
  setInterval(() => {type(config.accToken, config.channelId);}, 5000);
  console.log("Typing... \nPress Ctrl+C to terminate");
  process.stdin.resume();
  //keeps executable window open
}