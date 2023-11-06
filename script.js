

const calculateBtn = document.getElementById("calculateBtn");

const yearOutPut = document.getElementById("years");
const monthOutPut = document.getElementById("months");
const dayOutPut = document.getElementById("days");


function calculateAge() {
    const inputDate = document.getElementById("input").value;
  const selectedDate = new Date(inputDate);
  const currentDate = new Date();

  // Check if selected date is greater than today's date
  if (selectedDate > currentDate) {
    alert("You cannot select a date greater than today's date.");
    return; 
  }

  // Calculate the difference in years, months, and days
  let yearsDiff = currentDate.getFullYear() - selectedDate.getFullYear();
  let monthsDiff = currentDate.getMonth() - selectedDate.getMonth();
  let daysDiff = currentDate.getDate() - selectedDate.getDate();

  // Handle cases where days or months are negative
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

  // Display the calculated age in the respective output elements
  yearOutPut.textContent = yearsDiff;
  monthOutPut.textContent = monthsDiff;
  dayOutPut.textContent = daysDiff;

  // Show the output element
  const outPutElement = document.getElementById("outPut");
  outPutElement.style.display = "block";
}

calculateBtn.addEventListener("click", calculateAge);
