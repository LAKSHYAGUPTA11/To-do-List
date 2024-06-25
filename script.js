// script.js

document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', taskActions);

    function addTask(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerText = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    function taskActions(event) {
        const target = event.target;
        if (target.tagName === 'LI') {
            target.classList.toggle('completed');
        } else if (target.classList.contains('delete')) {
            target.parentNode.remove();
        }
    }
});
// script.js (continued)

document.addEventListener('DOMContentLoaded', function () {
    // Existing code...

    // Load tasks from local storage when the page loads
    loadTasks();

    function addTask(event) {
        // Existing code...

        // Save tasks to local storage
        saveTasks();
    }

    function taskActions(event) {
        // Existing code...

        // Save tasks to local storage
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(task => {
            tasks.push({
                text: task.innerText,
                completed: task.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(task => {
                const taskItem = document.createElement('li');
                taskItem.innerText = task.text;
                if (task.completed) {
                    taskItem.classList.add('completed');
                }
                taskList.appendChild(taskItem);
            });
        }
    }
});
