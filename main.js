const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');

const submitToDoButtonElem = document.getElementById('submitToDoButton');

let counter = 0;

const activateDeletes = () => {
  const deleteButtons = document.getElementsByClassName('deleteButton');
  console.log(deleteButtons);

  for (let i = 0; i < deleteButtons.length; i++) {
    const element = deleteButtons[i];
    element.addEventListener("click", (e) => {
      // remove card that the button was on
      const buttonIClicked = e.target;
      const cardToDelete = buttonIClicked.parentNode.parentNode;
      cardToDelete.remove();
    })
  }
}

const printToDom = (stringToPrint, whereToPrint) => {
  document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const buildNewToDoCard = (toDo, notes) => {
  let domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${toDo}</h5>
    <p class="card-text">${notes}</p>
    <button href="#" class="btn btn-primary deleteButton" id=${counter}>Delete this shit.</button>
  </div>
</div>`;
  counter ++;
  printToDom(domString, 'toDoCards');
  activateDeletes();
}

submitToDoButtonElem.addEventListener("click", (e) => {
  e.preventDefault();

  buildNewToDoCard(toDoInputElem.value, notesInputElem.value);
});