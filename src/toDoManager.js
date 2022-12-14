
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
    function editToDo(item, title, description, dueDate, priority, project, complete) {
        item.title = title;
        item.description = description;
        item.dueDate = dueDate;
        item.priority = priority;
        item.project = project, 
        item.complete = complete;
    }
    function sortListByDate (list) {
        list.sort((d1,d2) => new Date(d1.dueDate).getTime() - new Date(d2.dueDate).getTime());
    }
    function deleteToDo(toDoList, item) {
        console.log(toDoList);
        toDoList.splice(item,1);
        console.log(toDoList);
    }
    function setComplete(item, complete) {
        item.complete = complete;
    }

    return {
        createToDo,
        deleteToDo,
        editToDo,
        sortListByDate,
        setComplete
    }
})();