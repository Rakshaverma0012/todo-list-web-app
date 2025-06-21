function addTask() {
  const taskInput = document.getElementById('taskInput');
  const reminderInput = document.getElementById('reminderInput');
  const taskText = taskInput.value.trim();
  const reminder = reminderInput.value;

  if (taskText === '') return;

  const li = document.createElement('li');

  const text = document.createElement('div');
  text.className = 'text';
  text.textContent = taskText;

  const time = document.createElement('div');
  time.className = 'time';
  time.textContent = reminder ? `Reminder: ${new Date(reminder).toLocaleString()}` : '';

  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔ Done';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏ Edit';
  editBtn.className = 'edit';
  editBtn.onclick = () => {
    const newTask = prompt('Edit your task:', text.textContent);
    if (newTask) text.textContent = newTask;
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑 Delete';
  deleteBtn.className = 'delete';
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(text);
  if (reminder) li.appendChild(time);
  li.appendChild(actions);

  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
  reminderInput.value = '';
}
