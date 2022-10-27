
export const domManager = (function () {

    function displayToDos(toDoList, listDisplay,clear) {
        // console.log('to do list: ' + toDoList);
        if(clear){
            listDisplay.innerHTML = "<div class=\"current-folder-title\">Home</div>";
        }
        if(toDoList[0] == undefined) {
            for(const list in toDoList) {
                displayToDos(toDoList[list],listDisplay,false);
            }
        }
        else {
            
            for(const item in toDoList) {
            const container = document.createElement('div');
            container.classList = 'to-do-item';

            const checkedDiv = document.createElement('div');
            checkedDiv.classList = 'to-do-item__checked';
            checkedDiv.innerHTML = "check";
            container.appendChild(checkedDiv);

            const titleDiv = document.createElement('div');
            titleDiv.classList = 'to-do-item__title';
            titleDiv.innerHTML = toDoList[item].title;
            container.appendChild(titleDiv);
            
            const dueDateDiv = document.createElement('div');
            dueDateDiv.classList = 'to-do-item__due-date';
            dueDateDiv.innerHTML = toDoList[item].dueDate;
            container.appendChild(dueDateDiv);

            const editDiv = document.createElement('div');
            editDiv.classList = 'to-do-item__edit';
            editDiv.innerHTML = "edit";
            container.appendChild(editDiv);

            const priorityDiv = document.createElement('div');
            priorityDiv.classList = 'to-do-item__priority';
            priorityDiv.innerHTML = "priority";
            container.appendChild(priorityDiv);

            const moveToFolderDiv = document.createElement('div');
            moveToFolderDiv.classList = 'to-do-item__move-to-folder';
            moveToFolderDiv.innerHTML = "move";
            container.appendChild(moveToFolderDiv);

            const deleteDiv = document.createElement('div');
            deleteDiv.classList = 'to-do-item__delete';
            deleteDiv.innerHTML = "delete";
            container.appendChild(deleteDiv);

            listDisplay.appendChild(container);
            }
        }
    }

    function displayNav(toDoList, projectDisplay, toDoListDisplay) {
        
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
                domManager.displayToDos(toDoList[name],toDoListDisplay,true);
            });
            
            projectDisplay.appendChild(projectLI);
        }
        
    }

    return {
        displayToDos,
        displayNav,
    }
})();