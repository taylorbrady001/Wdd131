// courses.js

const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 25,
      days: "TTh",
      instructor: "Sis A",
    },
  ],

  // Combined method to increment or decrement enrolled students
  changeEnrollment: function (sectionNum, add = true) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        if (this.sections[sectionIndex].enrolled > 0) {
          this.sections[sectionIndex].enrolled--;
        } else {
          alert(`No students to drop in section ${sectionNum}`);
          return;
        }
      }
      renderSections(this.sections);
    } else {
      alert(`Section ${sectionNum} not found.`);
    }
  },
};

function setCourseInfo(course) {
  const courseName = document.querySelector("#courseName");
  const courseCode = document.querySelector("#courseCode");
  courseName.textContent = course.name;
  courseCode.textContent = course.code;
}

function sectionTemplate(section) {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
  </tr>`;
}

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value.trim();
  if (sectionNum) {
    aCourse.changeEnrollment(sectionNum, true);
  } else {
    alert("Please enter a section number");
  }
});

document.querySelector("#dropStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value.trim();
  if (sectionNum) {
    aCourse.changeEnrollment(sectionNum, false);
  } else {
    alert("Please enter a section number");
  }
});

// Initialize page content
setCourseInfo(aCourse);
renderSections(aCourse.sections);
