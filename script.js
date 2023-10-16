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
    const taskDeadline = document.getElementById('taskDeadline').value; // Récupérer la date limite

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

        // Ajout de la date limite si elle existe
        if (taskDeadline) {
            const deadlineSpan = document.createElement('span');
            deadlineSpan.className = 'deadline';
            deadlineSpan.textContent = ` - Jusqu'au ${taskDeadline}`;
            li.appendChild(deadlineSpan);
        }

        // Création du bouton "Effacer"
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Effacer';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(deleteButton);

        // Ajout de la tâche à la liste
        document.getElementById('tasksList').appendChild(li);

        // Réinitialisation des champs de saisie
        document.getElementById('newTask').value = '';
        document.getElementById('taskDeadline').value = '';
    }
}


<div class="container">
    <h1>Ma liste de tâches</h1>
    <input type="text" id="newTask" placeholder="Nouvelle tâche...">
    <input type="date" id="taskDeadline"> <!-- Sélecteur de date ajouté ici -->
    <button id="addTask">Ajouter</button>
    <ul id="tasksList"></ul>
</div>

