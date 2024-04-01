let users = [];

function renderUsers() {
    let usersHtml = '';
    users.forEach((user, index) => {
        usersHtml += `<div>${user.name} - ${user.age} <button onclick="editUser(${index})">Edit</button> <button onclick="deleteUser(${index})">Delete</button></div>`;
    });
    document.getElementById('users').innerHTML = usersHtml;
}

function addUser() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    users.push({ name: name, age: age });
    renderUsers();
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
}

function editUser(index) {
    let newName = prompt('Enter new name:');
    let newAge = prompt('Enter new age:');
    users[index].name = newName;
    users[index].age = newAge;
    renderUsers();
}

function deleteUser(index) {
    users.splice(index, 1);
    renderUsers();
}

renderUsers();
