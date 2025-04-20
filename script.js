//Lets  write javascript

document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskList = document.getElementById('taskList');
  const taskItem = document.createElement('li');
  
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = '';
}

function deleteTask(button) {
  const taskItem =button.parentElement;
  taskItem.remove();
}
