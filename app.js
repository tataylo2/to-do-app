function onReady() {
let toDos = [];
const addToDoForm = document.getElementById('addToDoForm');
 const newToDoText = document.getElementById('newToDoText');
 const toDoList = document.getElementById('toDoList');

 function createNewToDo() {
     if (!newToDoText.value) { return; }
   toDos.push({
     title: newToDoText.value,
     complete: false
   });
  }
  function renderTheUI() {
     toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newToDo = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const title = document.createElement('span');
      title.textContent = toDo.title;

             toDoList.appendChild(newLi);
             newLi.appendChild(checkbox);
     });
 }
  addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  createNewToDo();
       newToDoText.value = '';
        renderTheUI();
});
  renderTheUI();


}

window.onload = function() {
  onReady();
};
