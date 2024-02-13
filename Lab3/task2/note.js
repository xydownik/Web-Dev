const todoList = document.getElementById('todo-list');
const newTask = document.getElementById('new-task');
const addTask = document.getElementById('add-task');

// Добавление новой задачи
addTask.addEventListener('click', () => {
    if (newTask.value === '') {
        return;
    }

    const newTaskId = Math.floor(Math.random() * 1000000);

    const newTaskHtml = `
        <li>
            <input type="checkbox" id="task-${newTaskId}">
            <label for="task-${newTaskId}">${newTask.value}</label>
            <button class="delete-task">✕</button>
        </li>
    `;

    todoList.insertAdjacentHTML('beforeend', newTaskHtml);

    const deleteTaskButtons = document.querySelectorAll('.delete-task');
    for (const button of deleteTaskButtons) {
        button.addEventListener('click', deleteTask);
    }

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (const checkbox of checkboxes) {
        checkbox.addEventListener('change', markDone);
    }

    newTask.value = '';
});

// Удаление задачи
function deleteTask(event) {
    const taskElement = event.target.parentElement;
    taskElement.remove();
}

// Отметка задачи как выполненной
function markDone(event) {
    const taskElement = event.target.parentElement;
    taskElement.classList.toggle('done');
}
