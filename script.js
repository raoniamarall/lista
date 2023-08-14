document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
              ${taskText}
              <button class="removeTask">Remover</button>
          `;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("removeTask")) {
      event.target.parentElement.remove();
    }
  });
});
