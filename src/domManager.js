import { format } from "date-fns";
import { toDoManager } from "./toDoManager";

export const domManager = (function () {

    let _currentProject = 'Home';
    function displayToDos(toDoList, listDisplay, images, clear) {
        if(clear && (_currentProject != 'Home')){
            listDisplay.innerHTML = "<div class=\"current-folder-title\">" + _currentProject + "</div>";
        }
        
        // console.log(toDoList);
        // toDoManager.sortListByDate(toDoList);
        for(const item in toDoList) {
        const container = document.createElement('div');
        container.classList = 'to-do-item';

        const checkedDiv = document.createElement('div');
        checkedDiv.classList = 'to-do-item__check-div';

        const checkIMG = document.createElement('img');
        checkIMG.classList = 'to-do-item__check-img';

        if(toDoList[item].complete){
            checkIMG.src = images['checkbox-white.png'];      
        }
        checkedDiv.appendChild(checkIMG);
        
        checkedDiv.addEventListener('click', (e) => {
                toDoManager.setComplete(toDoList[item],!(toDoList[item].complete));
                changeCheckBox(e, toDoList[item].complete,images);
        });

        container.appendChild(checkedDiv);

        const titleDiv = document.createElement('div');
        titleDiv.classList = 'to-do-item__title';
        titleDiv.innerHTML = toDoList[item].title;
        container.appendChild(titleDiv);
        
        const dueDateDiv = document.createElement('div');
        dueDateDiv.classList = 'to-do-item__due-date';
        dueDateDiv.innerHTML = format(new Date((toDoList[item].dueDate).replace(/-/g, '/')), 'MMM d');
        container.appendChild(dueDateDiv);

        const editDiv = document.createElement('div');
        editDiv.classList = 'to-do-item__edit';

        const editBtn = document.createElement('button');
        editBtn.classList = "to-do-item__edit-button";
        editBtn.innerHTML = "Edit";
        editBtn.addEventListener('click', (e) => {
            let formContainer = document.querySelector('.todo-form-container');
            let form = document.querySelector('#editForm');
            let title = document.querySelector('#form-title');
            let description = document.querySelector('#form-description');
            let date = document.querySelector('#form-date');
            let priorityLow = document.querySelector('#priority-low');
            let priorityMed = document.querySelector('#priority-medium');
            let priorityHigh = document.querySelector('#priority-high');

            title.value = toDoList[item].title;
            description.value = toDoList[item].description;
            console.log(toDoList[item].dueDate);
            date.value = toDoList[item].dueDate;
            
            formContainer.style.display = "block";
        });

        editDiv.appendChild(editBtn);
        container.appendChild(editDiv);

        const priorityDiv = document.createElement('div');
        priorityDiv.classList = 'to-do-item__priority';
        priorityDiv.innerHTML = toDoList[item].priority;
        container.appendChild(priorityDiv);

        // const moveToFolderDiv = document.createElement('div');
        // moveToFolderDiv.classList = 'to-do-item__move-to-folder';
        // moveToFolderDiv.innerHTML = "move";
        // container.appendChild(moveToFolderDiv);

        const deleteDiv = document.createElement('div');
        deleteDiv.classList = 'to-do-item__delete';
        
        const deleteIMG = document.createElement('img');
        deleteIMG.classList = "to-do-item__delete-img";
        deleteIMG.src = images['delete-button-white.png'];

        deleteDiv.addEventListener('click', (e) => {
            toDoManager.deleteToDo(toDoList, item);
            listDisplay.removeChild(container);
        });

        deleteDiv.appendChild(deleteIMG);

        container.appendChild(deleteDiv);

        listDisplay.appendChild(container);
            
        }
    }

    function displayNav(toDoList, projectDisplay, toDoListDisplay,images) {
        
        const projectList = Object.assign({}, toDoList);
        delete projectList.Home;
        delete projectList.Today;
        delete projectList.Week;
        console.log(toDoListDisplay);
        for(const name in projectList) {
            const projectLI = document.createElement("li");
            projectLI.innerHTML = name;
            console.log('display nav display: ' + toDoListDisplay);
            projectLI.addEventListener('click', () => {
                domManager.setCurrentProject(name);
                domManager.displayToDos(toDoList[name],toDoListDisplay,images,true);
            });
            
            projectDisplay.appendChild(projectLI);
        }
        
    }
    function setCurrentProject(project) {
        _currentProject = project;
    }
    function getCurrentProject() {
        return _currentProject;
    }
    function changeCheckBox(e, complete,images) {
        e.target.src = (complete) ? images['checkbox-white.png'] : images['blank-square.png'];

    }
   

    return {
        displayToDos,
        displayNav,
        getCurrentProject,
        setCurrentProject
    }
})();