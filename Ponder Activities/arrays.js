// Activity 1 - Map (convert strings to HTML list items)
const steps = ["one", "two", "three"];

// function to return HTML string for a step
function listTemplate(step) {
  return `<li>${step}</li>`;
}

// use map to convert each step to an <li> string
const stepsHtml = steps.map(listTemplate);

// join the array of <li> strings to a single string and set it as innerHTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// Activity 2 - Map (convert grades to GPA points)
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}

// map grades to GPA points
const gpaPoints = grades.map(convertGradeToPoints);

// display the GPA points array
document.getElementById("gpaPointsOutput").textContent = 
  `Grades: [${grades.join(", ")}] -> GPA Points: [${gpaPoints.join(", ")}]`;

// Activity 3 - Reduce (calculate GPA from GPA points)
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;

// display GPA
document.getElementById("gpaOutput").textContent = 
  `Total Points: ${pointsTotal}, GPA: ${gpa.toFixed(2)}`;

// Activity 4 - Filter (keep fruits with less than 6 characters)
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(word => word.length < 6);

// display filtered fruits
document.getElementById("filteredFruits").textContent = 
  `Original fruits: [${words.join(", ")}], Short fruits (<6 chars): [${shortWords.join(", ")}]`;

// Activity 5 - indexOf (find the index of lucky number)
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);

// display lucky number index
document.getElementById("luckyIndexOutput").textContent = 
  `Array: [${myArray.join(", ")}], Lucky Number: ${luckyNumber}, Index: ${luckyIndex}`;
