// Reference elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value; 
deleteButton.textContent = '❌' ;
li.append(deleteButton);
li.append(li);


// Handle add chapter button click
addChapterButton.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    li.appendChild(deleteButton);
    list.appendChild(li);

    input.value = '';
  }

  input.focus(); // Always refocus, even if input was empty
});