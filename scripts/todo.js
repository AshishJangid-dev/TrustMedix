document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(text) {
        const li = document.createElement('li');

        li.innerHTML = `
            <span>${text}</span>
            <button class="remove">&times;</button>
        `;

        li.querySelector('span').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.remove').addEventListener('click', () => {
            li.remove();
        });

        taskList.appendChild(li);
    }
});
