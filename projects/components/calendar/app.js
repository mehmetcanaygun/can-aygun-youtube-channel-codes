// DOM Elements
const dateList = document.querySelector(".dates");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const currentMonthYear = document.querySelector(".current-month-year");

// Constants & Variables
let date = new Date();
const TOTAL_DAYS_VISIBLE = 42;
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Create calendar with the given date object
function createCalendar(date) {
  // Find the amount of days from the last, current and next month to show on the calendar
  const prev = getLastDate(date.getFullYear(), date.getMonth(), true);
  const curr = getLastDate(date.getFullYear(), date.getMonth() + 1);
  const next = TOTAL_DAYS_VISIBLE - (prev.days + curr);

  // Firstly, clear the date list
  dateList.innerHTML = "";

  // Fill previous days on the calendar
  for (let i = prev.date - prev.days + 1; i <= prev.date; i++) {
    dateList.innerHTML += `
      <li class="date">${i}</li>
    `;
  }

  // Fill current days on the calendar
  for (let i = 1; i <= curr; i++) {
    // Check if the day is today
    if (date.getDate() === i) {
      dateList.innerHTML += `
        <li class="date current today">${i}</li>
      `;
    } else {
      dateList.innerHTML += `
        <li class="date current">${i}</li>
      `;
    }
  }

  // Fill next days on the calendar
  for (let i = 1; i <= next; i++) {
    dateList.innerHTML += `
      <li class="date">${i}</li>
    `;
  }

  // Update current month & year
  currentMonthYear.innerText = `${
    MONTHS[date.getMonth()]
  }, ${date.getFullYear()}`;
}

// Previous month
function prevMonth() {
  date = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());

  createCalendar(date);
}

// Next month
function nextMonth() {
  date = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());

  createCalendar(date);
}

// Helper function - Get last date of the previous month
function getLastDate(year, month, withDay = false) {
  if (withDay) {
    return {
      date: new Date(year, month, 0).getDate(),
      days: new Date(year, month, 0).getDay(),
    };
  }

  return new Date(year, month, 0).getDate();
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => createCalendar(date));
