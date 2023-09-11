const weekdayEl = document.getElementById("weekday");
const timeEl = document.getElementById("time");

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayOfTheWeek = "";

function getDayOfTheWeek() {
  const date = new Date();
  dayOfTheWeek = weekday[date.getDay()];
  weekdayEl.innerText = `${dayOfTheWeek}: `;
}
getDayOfTheWeek();

function getTime() {
  const date = new Date();
  let time = date.getTime();

  if (date.getHours() === "0") {
    getDayOfTheWeek();
  }

  timeEl.innerText = time;
}

setInterval(getTime, 10);
