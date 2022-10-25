
export const domManager = (function () {

    function displayToDos(toDoList, listDisplay) {
        console.log(toDoList);
        for(const item in toDoList) {
        console.log(item);
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
        //     <div class='to-do-item'>
        //   <div class='to-do-item__checked'><input type='checkbox'></div>
        //   <div class='to-do-item__title'>To do task - task to do</div>
        //   <div class='to-do-item__due-date'>October 31st</div>
        //   <div class='to-do-item__edit'>Edit</div>
        //   <div class='to-do-item__priority'>Priority</div>
        //   <div class='to-do-item__move-to-folder'>Move</div>
        //   <div class='to-do-item__delete'>Delete</div>
        // </div>
        }
    }

    function displayAllToDos() {

    }

    function displayNav() {

    }

    return {
        displayToDos
    }
})();