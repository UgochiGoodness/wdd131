const input = docuument.querySelector('#favchap');
const button = docuument.querySelector('button');
const list = docuument.querySelector('list');

const li = docuument.createElement('li');
const deleteButton = docuument.createElement('button');

li.textContent = input.value; 
deleteButton.textContent = '❌' ;
li.append(deleteButton);
li.append(li);