let tasks = [];

function taskTemplate(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
      </div>
    </li>`;
}

function renderTasks(tasks) {
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  const html = tasks.map(taskTemplate).join("");
  listElement.innerHTML = html;
}

function newTask() {
  const input = document.querySelector("#todo");
  const task = input.value.trim();
  if (task === "") return;

  tasks.push({ detail: task, completed: false });
  renderTasks(tasks);
  input.value = ""; // Clear input field
}

function removeTask(taskElement) {
  const taskText = taskElement.querySelector('p').innerText;
  tasks = tasks.filter(task => task.detail !== taskText);
  renderTasks(tasks);
}

function completeTask(taskElement) {
  const taskText = taskElement.querySelector('p').innerText;
  const taskIndex = tasks.findIndex(task => task.detail === taskText);
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    renderTasks(tasks);
  }
}

function manageTasks(e) {
  const parent = e.target.closest("li");
  const action = e.target.dataset.action;
  if (!action || !parent) return;

  if (action === "delete") {
    removeTask(parent);
  } else if (action === "complete") {
    completeTask(parent);
  }
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

renderTasks(tasks);
