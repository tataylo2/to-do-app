function onReady() {
  var toDos = [];
  const addTodoForm = document.getElementById('addToDoForm');
  let id = 0;

  let removeItem = document.createElement('button')
  removeItem.type = "button";
  removeItem.textContent = "Remove";

  localStorage.getItem(function() {
    if (value === null) {
      return;
    }
    toDos = JSON.parse(array);
  });


  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');

    if (!newToDoText.value) { return; }

  
    id++;

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";


      let removeItem = document.createElement('button')
      removeItem.type = "button";
      removeItem.textContent = "Remove";

      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

    
      newLi.appendChild(removeItem);

   
      removeItem.addEventListener('click', event => {
        toDos = toDos.filter(function(el) {
         return el.id !== toDo.id;
        });
        renderTheUI();
        localStorage.setItem('array',(JSON.stringify(toDos)));
      });

     
      checkbox.addEventListener('checkboxStateChange', event => {
        if (checkbox.checked === 'false') {
          toDo.complete = false;
        }
        else if (checkbox.checked === 'true') {
          toDo.complete = true;
        }
        console.log(toDos);
        localStorage.setItem('array',(JSON.stringify(toDos)));
      });

    });

    addToDoForm.addEventListener('submit', event =>{
      event.preventDefault();
      createNewToDo();
      localStorage.setItem('array',(JSON.stringify(toDos)));
    });
  };


  renderTheUI();
}


window.onload = function() {
  onReady();
};
