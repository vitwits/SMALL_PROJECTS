const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {

  //simple HTML template function
  const html = `
    <li class="list-group-item d-flex justify-content-between alight-items-center text-light">
      <span>${todo}</span> 
      <i class="far fa-trash-alt delete"></i>
    </li>
    `;
  
  list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim(); //method to cut all spaces before and after the text

  if(todo){ //check on empty string - not adding empty tasks
    generateTemplate(todo);
    addForm.reset(); //method to clear all form fields
  }
});

//delete todo
list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};


//search functionality
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
