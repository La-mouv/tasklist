document.getElementById('addTask').addEventListener('click', function() {
    const taskValue = document.getElementById('newTask').value;
    if (taskValue) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                li.style.textDecoration = 'line-through';
                li.style.color = '#aaa';
            } else {
                li.style.textDecoration = 'none';
                li.style.color = '#000';
            }
        });

        li.appendChild(checkbox); 
        li.appendChild(document.createTextNode(' ' + taskValue));  // Ajouter une espace pour séparer la checkbox du texte
        document.getElementById('tasksList').appendChild(li);
        document.getElementById('newTask').value = '';  // Réinitialiser le champ de saisie
    }
});

function addTask() {
    const taskValue = document.getElementById('newTask').value;
    if (taskValue) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                li.style.textDecoration = 'line-through';
                li.style.color = '#aaa';
            } else {
                li.style.textDecoration = 'none';
                li.style.color = '#000';
            }
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(' ' + taskValue));
        document.getElementById('tasksList').appendChild(li);
        document.getElementById('newTask').value = ''; // Réinitialiser le champ de saisie
    }
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Effacer';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteButton);
}

document.getElementById('addTask').addEventListener('click', addTask);
document.getElementById('newTask').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
