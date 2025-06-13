// Course data and methods
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 25, days: "TTh", instructor: "Sis A" }
  ],

  changeEnrollment(sectionNum, add = true) {
    const secNum = Number(sectionNum);
    if (isNaN(secNum)) return;

    const section = this.sections.find(s => s.sectionNum === secNum);
    if (section) {
      if (add) {
        section.enrolled++;
      } else if (section.enrolled > 0) {
        section.enrolled--;
      }
      renderSections(this.sections);
    } else {
      alert("Section number not found.");
    }
  }
};

// Display course info
function setCourseInfo(course) {
  document.getElementById("courseName").textContent = course.name;
  document.getElementById("courseCode").textContent = course.code;
}

// Render sections in table
function renderSections(sections) {
  const tbody = document.getElementById("sections");
  tbody.innerHTML = sections.map(section => `
    <tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
    </tr>
  `).join("");
}

// Setup event listeners
document.getElementById("enrollStudent").addEventListener("click", () => {
  const sectionNum = document.getElementById("sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, true);
});

document.getElementById("dropStudent").addEventListener("click", () => {
  const sectionNum = document.getElementById("sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, false);
});

// Initialize page
setCourseInfo(aCourse);
renderSections(aCourse.sections);
