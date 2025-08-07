
const calendarGrid = document.getElementById('calendarGrid');
const monthYear = document.getElementById('monthYear');

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const date = new Date(2025, 7); // Agosto 2025
const year = date.getFullYear();
const month = date.getMonth();

monthYear.textContent = `${monthNames[month]} ${year}`;

// Día actual
const today = new Date();
const isThisMonth = today.getFullYear() === year && today.getMonth() === month;
const todayDate = today.getDate();

const daysOfWeek = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];
daysOfWeek.forEach(day => {
  const div = document.createElement('div');
  div.className = "day-name";
  div.textContent = day;
  calendarGrid.appendChild(div);
});

const firstDay = new Date(year, month, 1).getDay();
const startDay = firstDay === 0 ? 6 : firstDay - 1;
const daysInMonth = new Date(year, month + 1, 0).getDate();

for (let i = 0; i < startDay; i++) {
  const empty = document.createElement('div');
  empty.className = 'day empty';
  calendarGrid.appendChild(empty);
}

for (let i = 1; i <= daysInMonth; i++) {
  const day = document.createElement('div');
  day.className = 'day';
  day.textContent = i;

  if (isThisMonth && i === todayDate) {
    day.classList.add('today');
  }

  calendarGrid.appendChild(day);
}
