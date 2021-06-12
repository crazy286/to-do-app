
let mytoDo = document.getElementById('#todo')
let myInput = document.getElementById('input');
const addB = document.querySelector('#addMe')


//adding elements to page
var addTask = function () {
    var text = myInput.value;
    var li = document.createElement('li');
    li.innerHTML = text;
    mytoDo.appendChild(li);


    //create new edit button.
    const editButton = document.createElement('button');
    editButton.innerText = 'EDIT';
    li.appendChild(editButton)
    editButton.setAttribute('class', 'btn edit')

    editButton.addEventListener('click', function () {
        li.innerHTML = prompt(text);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        li.appendChild(completeButton);
    });
    editButton.setAttribute('class', 'btn edit');


    //creat new delete button.
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    li.appendChild(deleteButton)
    //listen for click and then deletes my new li.
    deleteButton.addEventListener('click', event => mytoDo.removeChild(li));
    deleteButton.setAttribute('class', 'btn delete');

    //create new edit button.
    const completeButton = document.createElement('button')
    completeButton.innerText = '✔';
    completeButton.setAttribute('class', 'btn completed')
    li.appendChild(completeButton);
    //listen for click and show completion.

    completeButton.addEventListener('click', function () {
        li.style.textDecoration = 'line-through';
        li.removeChild(editButton)
        li.removeChild(completeButton);
    });

}
addB.onclick = addTask;

