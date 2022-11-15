import { format, parse, parseISO } from "date-fns";
import { it } from "date-fns/locale";
import { toDoManager } from "./toDoManager";

export const domManager = (function () {

    let _currentProject = 'Home';
    function displayToDos(fullList, project, listDisplay, images, clear) {
        if(clear) {
            listDisplay.innerHTML = "<div class=\"current-folder-title\">" + project + "</div>";
        }
        //&& (_currentProject != 'Home'
        // console.log(fullList);
        // console.log(project);
        let toDoList = fullList[project];
        // toDoManager.sortListByDate(toDoList);
        console.log(toDoList);
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

        //console.log(toDoList[item].dueDate);
        //console.log(parse(toDoList[item].dueDate, 'yyyy-MM-dd', new Date()));
        dueDateDiv.innerHTML = format(parse(toDoList[item].dueDate, 'yyyy-MM-dd', new Date()), 'MMM d');

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
            let project = document.querySelector('#form-project');
            let complete = document.querySelector('#form-complete');
            let saveBtn = document.querySelector('#saveToDo');
            let cancelBtn = document.querySelector('#cancelToDo');
            let prioritySet = "low";

            //console.log(toDoList.name);
            saveBtn.innerHTML = "Save";
            title.value = toDoList[item].title;
            description.value = toDoList[item].description;
            date.value = toDoList[item].dueDate;
            
            if(toDoList[item].priority == "low"){
                priorityLow.checked = true;
            }
            else if(toDoList[item].priority == "medium"){
                priorityMed.checked = true;
                prioritySet = "medium";
            }
            else {
                priorityHigh.checked = true;
                prioritySet = "high";
            }
            project.value = toDoList[item].project;
            complete.checked = toDoList[item].complete;

            saveBtn.addEventListener('click', function handler(e) {
                if(priorityLow.checked == true){
                    prioritySet = "low";
                }
                else if(priorityMed.checked == true){
                    prioritySet = "medium";
                }
                else {
                    prioritySet = "high";
                }
                if(toDoList[item].project != project.value){
                    console.log("project change");
                    fullList[project.value].push(toDoManager.createToDo(title.value, description.value, date.value, prioritySet, project.value, complete.checked));
                    toDoManager.deleteToDo(toDoList, toDoList[item]);
                }
                else {
                    toDoManager.editToDo(toDoList[item], title.value, description.value, date.value, prioritySet, project.value, complete.checked);
                }
                
                if(document.querySelector('.current-folder-title').innerHTML == 'Home'){
                    displayAllToDos(fullList, listDisplay, images);
                }
                else {
                    displayToDos(fullList, project.value, listDisplay,images, true);
                }
                formContainer.style.display = "none";
                resetForm();
                saveBtn.removeEventListener('click',handler);
            });

            
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
            if(document.querySelector('.current-folder-title').innerHTML == 'Home'){
                displayAllToDos(fullList, listDisplay, images);
            }
            else {
                displayToDos(fullList, document.querySelector('.current-folder-title').innerHTML, listDisplay,images, true);
            }
        });

        deleteDiv.appendChild(deleteIMG);

        container.appendChild(deleteDiv);

        listDisplay.appendChild(container);
            
        }
    }
    function displayAllToDos(fullList,toDoListDisplay,images) {
        toDoListDisplay.innerHTML = "<div class=\"current-folder-title\">Home</div>"
        for(const list in fullList) {
            displayToDos(fullList, list, toDoListDisplay,images,false);
          }
    }

    function resetForm() {
        let formContainer = document.querySelector('.todo-form-container');
        let form = document.querySelector('#editForm');
        let title = document.querySelector('#form-title');
        let description = document.querySelector('#form-description');
        let date = document.querySelector('#form-date');
        let priorityLow = document.querySelector('#priority-low');
        let project = document.querySelector('#form-project');
        let priorityMed = document.querySelector('#priority-medium');
        let priorityHigh = document.querySelector('#priority-high');
        let complete = document.querySelector('#form-complete');
        let saveBtn = document.querySelector('#saveToDo');
        let cancelBtn = document.querySelector('#cancelToDo');
        let prioritySet = "low";

        title.value = "";
        description.value = "";
        date.value = format(new Date(), "yyyy-MM-dd");
        priorityLow.checked = true;
        project.value = 'Home';
        complete.checked = false;

    }

    function displayNav(toDoList, projectDisplay, toDoListDisplay,images) {
        
        const projectList = Object.assign({}, toDoList);
        delete projectList.Home;
        delete projectList.Today;
        delete projectList.Week;
        //console.log(toDoListDisplay);
        for(const name in projectList) {
            const projectLI = document.createElement("li");
            projectLI.innerHTML = name;
            console.log('display nav display: ' + toDoListDisplay);
            projectLI.addEventListener('click', () => {
                domManager.setCurrentProject(name);
                domManager.displayToDos(toDoList, name, toDoListDisplay,images,true);
            });
            
            projectDisplay.appendChild(projectLI);
        }
        
    }
    function fillSelectProject(fullList) {
        let project = document.querySelector('#form-project');
        for(const name in fullList) {
            let option = document.createElement("option");
            option.value = name;
            option.textContent = name;
            project.appendChild(option);
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
        displayAllToDos,
        resetForm,
        displayNav,
        fillSelectProject,
        getCurrentProject,
        setCurrentProject
    }
})();