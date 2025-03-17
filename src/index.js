document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  
  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText === "") return; 

  
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => taskItem.remove());

    
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    
    taskInput.value = "";
  });
});