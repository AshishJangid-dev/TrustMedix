document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Function to create a new task element
    function createTaskElement(taskText) {
        const li = document.createElement('li');

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.textContent = taskText;
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        return li;
    }

    // Add task on button click
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = ''; // Clear input field
        }
    });

    // Add task on Enter key press
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
