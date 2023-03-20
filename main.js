
let addToDo = document.getElementById('addTodo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField')

addToDo.addEventListener( 'click', function () {
    var paragraph = document.createElement('P')
    paragraph.innerText = inputField.Value;
    toDoContainer.appendChild(paragraph);

})