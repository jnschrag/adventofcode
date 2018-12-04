const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input-test.txt", "utf8");
const input = text.split("\n");
const dateLength = 16;

let currentID;

// Get array of guard IDs
// { id: { logs: [], 00: 0, 01: 0, 02: 0} <-- Assign 00 - 59 & push all events to logs
// Loop through events, increment asleep minutes by 1. Log current status to retroactively account for minutes asleep/awake.

let guards = {};

input.forEach(line => {
  let datestamp = line.substr(1, dateLength);
  let minutes = datestamp.slice(-2);
  let id = line.match(/(#(\d)+)/);
  if (line.match(/(#(\d)+)/)) {
    currentID = id[0];
  }

  if (!guards[currentID]) {
    guards[currentID] = { logs: [] };
    for (let i = 0; i <= 59; i++) {
      let key = i;
      if (i < 10) {
        key = "0" + i;
      }
      guards[currentID][key] = {};
    }
  }

  guards[currentID].logs.push(line);
});

console.log(input);
console.log(guards);
