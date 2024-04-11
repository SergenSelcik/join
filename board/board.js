// 

let allTasks = [{
    "taskID": 0,
    "processingStatus": "ToDo",
    "title": "Einkaufen",
},{
    "taskID": 1,
    "processingStatus": "ToDo",
    "title": "Lernen",
},
{
    "taskID": 2,
    "processingStatus": "ToDo",
    "title": "Projekt",
},
{
    "taskID": 3,
    "processingStatus": "ToDo",
    "title": "Putzen",

}];

function showAddTaskOverlay() {
    document.getElementById('addTaskOverlayID').classList.remove('d-none');
}

function closeAddTaskOverlay(){
    document.getElementById('addTaskOverlayID').classList.add('d-none');

}

function doNotClose(event) {
    event.stopPropagation();
}

let currentDraggedElement;

function updateHTML() {
    let toDo = allTasks.filter(t => t['processingStatus'] == 'ToDo');

    document.getElementById('todo').innerHTML = '';
    for (let index = 0; index < toDo.length; index++) {
        const element = toDo[index];
        document.getElementById('todo').innerHTML += generateTodoHTML(element);
    }

    let progress = allTasks.filter(t => t['processingStatus'] == 'progress');

    document.getElementById('progress').innerHTML = '';
    for (let index = 0; index < progress.length; index++) {
        const element = progress[index];
        document.getElementById('progress').innerHTML += generateTodoHTML(element);
    }

    let awaitFeedback = allTasks.filter(t => t['processingStatus'] == 'awaitFeedback');

    document.getElementById('awaitFeedback').innerHTML = '';
    for (let index = 0; index < awaitFeedback.length; index++) {
        const element = awaitFeedback[index];
        document.getElementById('awaitFeedback').innerHTML += generateTodoHTML(element);
    }

    let done = allTasks.filter(t => t['processingStatus'] == 'done');

    document.getElementById('done').innerHTML = '';
    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('done').innerHTML += generateTodoHTML(element);
    }
}

function startDragging(taskID){
    currentDraggedElement=taskID;
}

function generateTodoHTML(element){
    return `<div class="task_todo" draggable="true" ondragstart="startDragging(${element['taskID']})">${element['title']}</div>`
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(processingStatus) {
    allTasks[currentDraggedElement]['processingStatus'] = processingStatus;
    updateHTML();
}