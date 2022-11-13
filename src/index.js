import './style.css';
import { format } from "date-fns";
import { toDoManager } from './toDoManager.js';
import { domManager } from './domManager.js';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

const images = importAll(require.context('./images/', false, /\.(png|svg|jpg|jpeg|gif)$/));

const fullToDos = JSON.parse(localStorage.getItem('fullToDos')) || {
    'Home': [],
    'Today': [],
    'Week': [],
    'Project 1':[],
    'Project 2':[],
    'Project 3':[]                                              
    }

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

//domManager.displayToDos(fullToDos, toDoListDisplay, images, true);
// for(const toDoList in fullToDos) {
//   domManager.displayToDos(fullToDos[toDoList], toDoListDisplay,images,false);
// }
domManager.displayAllToDos(fullToDos,toDoListDisplay,images);

console.log("first " + toDoListDisplay);
domManager.displayNav(fullToDos, navProjectsDisplay, toDoListDisplay,images);
// console.log(fullToDos);

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






console.log('hello');
