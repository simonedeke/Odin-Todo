import './style.css';
import { format } from "date-fns";
import { toDoManager } from './toDoManager.js';
import { domManager } from './domManager.js';

function importAll(r) {
  const images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images/', false, /\.(png|svg|jpg|jpeg|gif)$/));

const fullToDos = JSON.parse(localStorage.getItem('fullToDos')) || {
  Home: [],
  Today: [],
  Week: [],
  'Project 1': [],
  'Project 2': [],
  'Project 3': [],
};

if (!localStorage.getItem('fullToDos')) {

    fullToDos['Home'].push(toDoManager.createToDo('Home Title', 'Description of home task 1', '2022-11-30', 'low', 'Home', true));
    fullToDos['Home'].push(toDoManager.createToDo('Home to do Title 2', 'Description of home task 2', '2022-11-30', 'medium', 'Home', false));
    fullToDos['Home'].push(toDoManager.createToDo('Home to do Title 3', 'Description of home task 3', '2022-09-30', 'high', 'Home', false));

    fullToDos['Today'].push(toDoManager.createToDo('Today take a shower', 'Description of taking a shower?', '2022-12-31', 'low', 'Today', false));
    fullToDos['Today'].push(toDoManager.createToDo('Today brush teeth', 'Description of brushing teeth', '2022-10-31', 'low', 'Today', false));

    fullToDos['Week'].push(toDoManager.createToDo('Week Title', 'Description of week task 1', '2022-09-30', 'low', 'Week', false));
    fullToDos['Week'].push(toDoManager.createToDo('Week Title 2', 'Description of week task 2', '2022-10-31', 'low', 'Week', false));

    fullToDos['Project 1'].push(toDoManager.createToDo('Project 1 Title', 'Description of proj 1 task 1', '2022-10-31', 'low', 'Project 1', false));

    fullToDos['Project 2'].push(toDoManager.createToDo('Project 2 Title', 'Description of proj 2 task 1', '2022-10-31', 'low', 'Project 2', false));

    fullToDos['Project 3'].push(toDoManager.createToDo('Project 3 Title', 'Description of proj 3 task 1', '2022-10-31', 'low', 'Project 3', false));
}

for(const list in fullToDos) {
  toDoManager.sortListByDate(fullToDos[list]);
}
const toDoListDisplay = document.querySelector('.to-do-list');
const navProjectsDisplay = document.querySelector('.projects-container');
const homeNav = document.querySelector('.home-nav');
const todayNav = document.querySelector('.today-nav');
const weekNav = document.querySelector('.week-nav');
const addDiv = document.querySelector(".add-to-do");
const cancelBtn = document.querySelector("#cancelToDo");
const titleInput = document.querySelector("#form-title");


//domManager.displayToDos(fullToDos, toDoListDisplay, images, true);
// for(const toDoList in fullToDos) {
//   domManager.displayToDos(fullToDos[toDoList], toDoListDisplay,images,false);
// }
domManager.displayAllToDos(fullToDos,toDoListDisplay,images);

console.log("first " + toDoListDisplay);
domManager.displayNav(fullToDos, navProjectsDisplay, toDoListDisplay,images);
// console.log(fullToDos);
domManager.fillSelectProject(fullToDos);

homeNav.addEventListener('click', () => {
    // domManager.setCurrentProject('Home');
    toDoListDisplay.innerHTML = "<div class=\"current-folder-title\">Home</div>";
    // for(const toDoList in fullToDos) {
    //   //domManager.setCurrentProject('Home');  
    //   domManager.displayToDos(fullToDos[toDoList], toDoListDisplay,images,false);
    // }
    domManager.displayAllToDos(fullToDos,toDoListDisplay,images);
    //domManager.displayToDos(fullToDos,toDoListDisplay,images,true);
});
todayNav.addEventListener('click', () => {
  // domManager.setCurrentProject('Today');
  domManager.displayToDos(fullToDos, 'Today',toDoListDisplay,images,true);
});
weekNav.addEventListener('click', () => {
  // domManager.setCurrentProject('Week');
  domManager.displayToDos(fullToDos, 'Week',toDoListDisplay,images,true);
});

cancelBtn.addEventListener('click', () => {
    let formContainer = document.querySelector('.todo-form-container');  
    formContainer.style.display = "none";
    domManager.resetForm();

});

addDiv.addEventListener('click', function handler() {
    console.log("add");
    let formContainer = document.querySelector('.todo-form-container');
    let form = document.querySelector('#editForm');
    let title = document.querySelector('#form-title');
    let titleError = document.querySelector("#form-title + span.error");
    let description = document.querySelector('#form-description');
    let date = document.querySelector('#form-date');
    let priorityLow = document.querySelector('#priority-low');
    let priorityMed = document.querySelector('#priority-medium');
    let priorityHigh = document.querySelector('#priority-high');
    let project = document.querySelector('#form-project');
    let complete = document.querySelector('#form-complete');
    let saveBtn = document.querySelector('#saveToDo');
    let cancelBtn = document.querySelector('#cancelToDo');
    let prioritySet = "low";

    formContainer.style.display = "block";

    saveBtn.innerHTML = "Create New";
    //console.log(form.checkValidity());
    saveBtn.addEventListener('click', function handler(e) {
      console.log("adding");
      console.log("form valid: " + form.checkValidity());
      if(form.checkValidity()){
        if(priorityLow.checked == true){
          prioritySet = "low";
        }
        else if(priorityMed.checked == true){
          prioritySet = "medium";
        }
        else {
          prioritySet = "high";
        }
        fullToDos[project.value].push(toDoManager.createToDo(title.value, description.value, date.value, prioritySet, project.value, complete.checked));
        //toDoManager.editToDo(toDoList[item], title.value, description.value, date.value, prioritySet, toDoList[item].project, toDoList[item].complete);
        
        if(document.querySelector('.current-folder-title').innerHTML == 'Home'){
          domManager.displayAllToDos(fullToDos, toDoListDisplay, images);
        }
        else {
          domManager.displayToDos(fullToDos, project.value, toDoListDisplay, images, true);
        }
        formContainer.style.display = "none";
        domManager.resetForm();
        saveBtn.removeEventListener('click',handler);
      }
      else {
        console.log("invalid");
        domManager.showError();
        //titleError.textContent = "Title is a required field"
      }
      
    });


})

// titleInput.addEventListener('input', (event) => {
//     if(titleInput.validity){

//     }
// });






console.log('end of index.js');
