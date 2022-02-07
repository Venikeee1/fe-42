const hoursArrowRef = document.querySelector('.hours-arrow');
const minutesArrowRef = document.querySelector('.minutes-arrow');
const secondsArrowRef = document.querySelector('.seconds-arrow');
const toggleClockRef = document.querySelector('.toggle-clock');
let isRunning = true;
let clockTimerId = null;

const setArrowAngle = (arrowRef, angle) => {
  arrowRef.style.transform = `rotate(${angle}deg)`;
};

const setHoursArrowPosition = hour => {
  const angle = (hour / 12) * 360;
  setArrowAngle(hoursArrowRef, angle);
};

const setMinutesArrowPosition = minutes => {
  const angle = (minutes / 60) * 360;
  setArrowAngle(minutesArrowRef, angle);
};

const setSecondsArrowPosition = seconds => {
  const angle = (seconds / 60) * 360;
  setArrowAngle(secondsArrowRef, angle);
};

const getCurrentTime = () => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return {
    hours,
    minutes,
    seconds,
  };
};

const setClockArrowsPosition = () => {
  const { hours, minutes, seconds } = getCurrentTime();

  setHoursArrowPosition(hours);
  setMinutesArrowPosition(minutes);
  setSecondsArrowPosition(seconds);
};

const toggleClock = () => {
  if (!isRunning) {
    clockTimerId = startClock();
  } else {
    clearInterval(clockTimerId);
  }

  isRunning = !isRunning;
};

const startClock = () => {
  return setInterval(setClockArrowsPosition, 1000);
};

clockTimerId = startClock();

toggleClockRef.addEventListener('click', toggleClock);

setClockArrowsPosition();

const prevDay = localStorage.getItem('currentDay');
const currentDay = new Date().getDate();
const isDayChanged = prevDay !== currentDay;

if (isDayChanged) {
  localStorage.setItem('currentDay', currentDay);
}
