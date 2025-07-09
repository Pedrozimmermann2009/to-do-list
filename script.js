document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Adicionar tarefa
    addTaskBtn.addEventListener('click', function() {
        if (taskInput.value.trim() !== '') {
            addTask(taskInput.value);
            taskInput.value = '';
        }
    });

    // Adicionar tarefa ao pressionar Enter
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask(taskInput.value);
            taskInput.value = '';
        }
    });

    // Função para adicionar tarefa
    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        taskItem.innerHTML = `
            <i class="far fa-circle complete-btn"></i>
            <span class="task-text">${taskText}</span>
            <div class="task-actions">
                <i class="fas fa-trash delete-btn"></i>
            </div>
        `;

        taskList.appendChild(taskItem);

        // Marcar como concluída
        const completeBtn = taskItem.querySelector('.complete-btn');
        completeBtn.addEventListener('click', function() {
            const taskText = taskItem.querySelector('.task-text');
            taskText.classList.toggle('completed');
            completeBtn.classList.toggle('fa-check-circle');
            completeBtn.classList.toggle('fa-circle');
        });

        // Deletar tarefa
        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            taskItem.classList.add('fadeOut');
            setTimeout(() => {
                taskItem.remove();
            }, 300);
        });
    }
});