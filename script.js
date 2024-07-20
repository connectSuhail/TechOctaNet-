document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');
    const newTodoInput = document.getElementById('new-todo');
    

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTodoItem(newTodoInput.value);
        newTodoInput.value = '';
    });
    function addTodoItem(text) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = text;

        const completeButton = document.createElement('button');
        completeButton.textContent = '✔';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', function () {
            li.classList.toggle('completed');
        });
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✖';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function () {
            todoList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        updateTodoVisibility();
    }

    function updateTodoVisibility() {
        const todoItems = todoList.querySelectorAll('li');
        todoItems.forEach(function (item) {
            if (item.classList.contains('completed')) {
                item.style.display = showCompleted ? 'flex' : 'none';
            }
        });
    }
});
