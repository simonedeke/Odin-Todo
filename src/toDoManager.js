
export const toDoManager = (function () {



    function createToDo(title, description, dueDate, priority, project, complete) {
        return {
            title,
            description,
            dueDate,
            priority,
            project,
            complete
        }
    }

    function editToDo() {

    }

    function deleteToDo() {

    }

    return {
        createToDo
    }
})();