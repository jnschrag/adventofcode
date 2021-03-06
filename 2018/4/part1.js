const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
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
  if (id) {
    currentID = id[0].substring(1);
  }

  if (!guards[currentID]) {
    guards[currentID] = { logs: [], total: 0, minutes: {} };
    for (let i = 0; i <= 59; i++) {
      guards[currentID].minutes[i] = 0;
    }
  }

  guards[currentID].logs.push(line);
});

let currentState
let currentMinute
for (let id in guards) {
  guards[id].logs.forEach(log => {
    let datestamp = log.substr(1, dateLength);
    let minutes = +datestamp.slice(-2);

    if (log.includes('asleep')) {
      currentState = 'asleep'
      guards[id].minutes[minutes] += 1
      guards[id].total += 1
    } else {
      if (currentState == 'asleep') {
        for (let m = (currentMinute + 1); m < minutes; m++) {
          guards[id].minutes[m] += 1
          guards[id].total += 1
        }
      }
      currentState = 'awake'
    }
    currentMinute = minutes
  })
}

let resultID = Object.keys(guards).reduce((a, b) => guards[a].total > guards[b].total ? a : b);
let resultMinute = Object.keys(guards[resultID].minutes).reduce((a, b) => guards[resultID].minutes[a] > guards[resultID].minutes[b] ? a : b)
console.log(resultID)
console.log(resultMinute)
console.log(resultID * resultMinute)
