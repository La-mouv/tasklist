document.getElementById('newTask').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

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
    const taskDeadline = document.getElementById('taskDeadline').value;

    if (taskValue) {
        const row = document.createElement('tr');

        // Checkbox
        const checkboxCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                row.style.textDecoration = 'line-through';
                row.style.color = '#aaa';
            } else {
                row.style.textDecoration = 'none';
                row.style.color = '#000';
            }
        });
        checkboxCell.appendChild(checkbox);
        row.appendChild(checkboxCell);

        // Tâche
        const taskCell = document.createElement('td');
        taskCell.textContent = taskValue;
        row.appendChild(taskCell);

        // Date
        const dateCell = document.createElement('td');
        dateCell.textContent = taskDeadline || '-'; // Si pas de date, afficher un tiret
        row.appendChild(dateCell);

        // Bouton Effacer
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Effacer';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', function() {
            row.remove();
        });
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        document.getElementById('tasksList').appendChild(row);

        // Réinitialiser les champs
        document.getElementById('newTask').value = '';
        document.getElementById('taskDeadline').value = '';
    }
}
