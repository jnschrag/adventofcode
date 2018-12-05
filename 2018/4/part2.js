const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
const input = text.split("\n");
const dateLength = 16;

let currentID;

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
  guards[id].frequentMinute = Object.keys(guards[id].minutes).reduce((a, b) => guards[id].minutes[a] > guards[id].minutes[b] ? a : b)
  guards[id].frequentAmount = guards[id].minutes[guards[id].frequentMinute]
}

let resultID = Object.keys(guards).reduce((a, b) => guards[a].frequentAmount > guards[b].frequentAmount ? a : b);
let resultMinute = guards[resultID].frequentMinute
console.log(resultID)
console.log(resultMinute)
console.log(resultID * resultMinute)
