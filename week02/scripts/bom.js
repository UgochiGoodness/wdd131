// Reference elements
const input = docuument.querySelector('#favchap');
const button = docuument.querySelector('button');
const list = docuument.querySelector('list');

const li = docuument.createElement('li');
const deleteButton = docuument.createElement('button');

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