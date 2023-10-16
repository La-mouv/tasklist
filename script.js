document.getElementById('addTask').addEventListener('click', function() {
    const taskValue = document.getElementById('newTask').value;
    if (taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;
        document.getElementById('tasksList').appendChild(li);
        document.getElementById('newTask').value = '';  // Réinitialiser le champ de saisie
    }
});
