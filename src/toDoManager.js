
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
    function sortListByDate (list) {
        list.sort((d1,d2) => new Date(d1.dueDate).getTime() - new Date(d2.dueDate).getTime());
    }
    function deleteToDo() {

    }

    return {
        createToDo,
        sortListByDate
    }
})();