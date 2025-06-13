/* ----------  GLOBAL STATE  ---------- */
let participantCount = 1;           // we start with Participant 1

/* ----------  DOM SHORTCUTS  ---------- */
const form            = document.querySelector("form");
const addBtn          = document.getElementById("add");
const participantsBox = document.querySelector("fieldset.participants");
const summaryEl       = document.getElementById("summary");

/* ----------  HELPERS  ---------- */
function participantTemplate(count) {
  /* build a **string** of HTML with unique ids/names */
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>

      <div class="item">
        <label for="fname${count}">First Name<span>*</span></label>
        <input id="fname${count}" name="fname${count}" type="text" required />
      </div>

      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" name="activity${count}" type="text" />
      </div>

      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" name="fee${count}" type="number" />
      </div>

      <div class="item">
        <label for="date${count}">Desired Date<span>*</span></label>
        <input id="date${count}" name="date${count}" type="date" />
      </div>

      <div class="item">
        <p>Grade</p>
        <select name="grade${count}">
          <option selected disabled value=""></option>
          ${["1","2","3","4","5","6","7","8","9","10","11","12"]
             .map(g => `<option value="${g}">${g}${g==="1"?"st":g==="2"?"nd":g==="3"?"rd":"th"}</option>`)
             .join("")}
        </select>
      </div>
    </section>
  `;
}

function totalFees() {
  /* any input whose id STARTS with “fee” */
  const feeInputs = [...document.querySelectorAll("input[id^='fee']")];
  return Number(
    feeInputs.reduce((sum, el) => sum + (parseFloat(el.value) || 0), 0)
              .toFixed(2)
  );
}

function successTemplate({ name, num, fees }) {
  return `
    <h2>Registration Complete</h2>
    <p>Thank you <strong>${name}</strong> for registering.</p>
    <p>You have registered <strong>${num}</strong> participant${num > 1 ? "s" : ""} and owe <strong>$${fees}</strong>.</p>
  `;
}

/* ----------  EVENT HANDLERS  ---------- */
function addParticipant() {
  participantCount += 1;
  /* place the new section right **before** the add‑button */
  addBtn.insertAdjacentHTML("beforebegin", participantTemplate(participantCount));
}

function handleSubmit(e) {
  e.preventDefault();                // keep the page here

  const fees = totalFees();
  const adultName = document.getElementById("adult_name").value.trim() || "friend";

  /* simple guard: require at least one fee entered */
  if (fees === 0) {
    alert("Please enter at least one participant fee.");
    return;
  }

  form.style.display = "none";       // hide the form
  summaryEl.innerHTML = successTemplate({
    name: adultName,
    num : participantCount,
    fees
  });
}

/* ----------  WIRE‑UP  ---------- */
addBtn.addEventListener("click", addParticipant);
form.addEventListener("submit", handleSubmit);
