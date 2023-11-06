const calculateBtn = document.getElementById("calculateBtn");

const yearOutPut = document.getElementById("years");
const monthOutPut = document.getElementById("months");
const dayOutPut = document.getElementById("days");

function calculateAge() {
  const inputDate = document.getElementById("input").value;
  const selectedDate = new Date(inputDate);
  const currentDate = new Date();

  let yearsDiff = currentDate.getFullYear() - selectedDate.getFullYear();
  let monthsDiff = currentDate.getMonth() - selectedDate.getMonth();
  let daysDiff = currentDate.getDate() - selectedDate.getDate();

  if (daysDiff < 0) {
    monthsDiff--;
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    daysDiff = lastDayOfMonth + daysDiff;
  }

  if (monthsDiff < 0) {
    yearsDiff--;
    monthsDiff = 12 + monthsDiff;
  }

  yearOutPut.textContent = yearsDiff;
  monthOutPut.textContent = monthsDiff;
  dayOutPut.textContent = daysDiff;
  const outPutElement = document.getElementById("outPut");
  outPutElement.style.display = "block";
}

calculateBtn.addEventListener("click", calculateAge);
