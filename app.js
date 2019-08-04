const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hour");
const timerMinEl = document.querySelector(".timer__min");
const timerSecEl = document.querySelector(".timer__sec");
const timerToEl = document.querySelector(".timer__to");
const timerUserDateEl = document.getElementById("timer__date");

//get current date in format required to set minimum date on user selected countdown timer to TODAY
let currentDate = new Date();
let dd = currentDate.getDate();
let mm = currentDate.getMonth() + 1; //January is 0
let yyyy = currentDate.getFullYear();
let hh = currentDate.getHours();
let min = currentDate.getMinutes();
let userDate = null;

currentDate =
  yyyy +
  "-" +
  checkLess10(mm) +
  "-" +
  checkLess10(dd) +
  "T" +
  hh +
  ":" +
  checkLess10(min);
timerUserDateEl.setAttribute("min", currentDate);
console.log(currentDate);

function getTimeDifference(start, end) {
  let miliseconds = Math.floor(end - start);
  let seconds = Math.floor(miliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  return {
    rDays: days,
    rHours: hours,
    rMinutes: minutes,
    rSeconds: seconds
  };
}
let timerTill = document.createElement("p");

function chooseCount() {
  timerUserDateEl.addEventListener("change", function(event) {
    userDate = new Date(timerUserDateEl.value); //formats userDate input into milliseconds since 1 January 1970 UTC.

    let timer = setInterval(function() {
      const startDate = new Date(); //current time/date
      let timeDifferenceObj = getTimeDifference(startDate, userDate);
      console.log(timeDifferenceObj);
      timerDayEl.textContent = checkLess10(timeDifferenceObj.rDays);
      timerHourEl.textContent = checkLess10(timeDifferenceObj.rHours);
      timerMinEl.textContent = checkLess10(timeDifferenceObj.rMinutes);
      timerSecEl.textContent = checkLess10(timeDifferenceObj.rSeconds);
    }, 1000);
    timerTill.textContent = userDate;
    timerToEl.appendChild(timerTill);
  });
}
chooseCount();

function checkLess10(timeUnit) {
  if (timeUnit < 10) {
    return "0" + timeUnit;
  }
  return timeUnit;
}

//old code before user choosing their own date
// const endDate = new Date("5 August, 2019 08:00:00");

// let timer = setInterval(function() {
//   const startDate = new Date(); //current time/date
//   let timeDifferenceObj = getTimeDifference(startDate, endDate);
//   //console.log(timeDifferenceObj);
//   timerDayEl.textContent = checkLess10(timeDifferenceObj.rDays);
//   timerHourEl.textContent = checkLess10(timeDifferenceObj.rHours);
//   timerMinEl.textContent = checkLess10(timeDifferenceObj.rMinutes);
//   timerSecEl.textContent = checkLess10(timeDifferenceObj.rSeconds);
// }, 1000);

// let timerTill = document.createElement("p");
// timerTill.textContent = endDate;
// timerToEl.appendChild(timerTill);

//let user decide date
//how to stop it/when to stop it
//add 0's to 1 character labels to prevent oval

//old code inside timer replaced by function checkLess10
// if (timeDifferenceObj.rDays < 10) {
//   timerDayEl.textContent = "0" + timeDifferenceObj.rDays;
// } else {
//   timerDayEl.textContent = timeDifferenceObj.rDays;
// }
// if (timeDifferenceObj.rHours < 10) {
//   timerHourEl.textContent = "0" + timeDifferenceObj.rHours;
// } else {
//   timerHourEl.textContent = timeDifferenceObj.rHours;
// }
// if (timeDifferenceObj.rMinutes < 10) {
//   timerMinEl.textContent = "0" + timeDifferenceObj.rMinutes;
// } else {
//   timerMinEl.textContent = timeDifferenceObj.rMinutes;
// }
// if (timeDifferenceObj.rSeconds < 10) {
//   timerSecEl.textContent = "0" + timeDifferenceObj.rSeconds;
// } else {
//   timerSecEl.textContent = timeDifferenceObj.rSeconds;
// }
