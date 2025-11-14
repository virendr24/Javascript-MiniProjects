const task = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = task.value.trim();

  if (taskText === "") {
    alert("Please Enter Task!!!!!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  //Create "Complete" button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔ Done";
  completeBtn.style.backgroundColor = "green";
  completeBtn.style.color = "white";
  completeBtn.style.border = "none";
  completeBtn.style.padding = "5px 10px";
  completeBtn.style.borderRadius = "5px";
  completeBtn.style.cursor = "pointer";

  //  Create "Delete" button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";

  //  Event to mark as completed
  completeBtn.addEventListener("click", () => {
    li.classList.add("completed");
    completeBtn.textContent = "Completed";
    completeBtn.style.backgroundColor = "gray";
    completeBtn.disabled = true; // disable after completion
  });

  // Event to delete the task
  delBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Add buttons inside the list item
  li.appendChild(completeBtn);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  task.value = "";
});