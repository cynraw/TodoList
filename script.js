const taskBox = document.getElementById("task-box");
const listContainer = document.getElementById("list-container");
let draggedItem = null;

function addTask() {
    if (taskBox.value === '') {events
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = taskBox.value;
        li.draggable = true; 
        addDragEvents(li); 
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskBox.value = '';
    saveInfo();
}

function addDragEvents(item) {
    item.addEventListener("dragstart", function () {
        draggedItem = this; 
        setTimeout(() => (this.style.display = "none"), 0);
    });

    item.addEventListener("dragend", function () {
        setTimeout(() => (this.style.display = "block"), 0);
        draggedItem = null;
        saveInfo();
    });

    item.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    item.addEventListener("drop", function () {
        if (this !== draggedItem) {
            let allItems = Array.from(listContainer.children);
            let draggedIndex = allItems.indexOf(draggedItem);
            let dropIndex = allItems.indexOf(this);

            if (draggedIndex < dropIndex) {
                this.after(draggedItem);
            } else {
                this.before(draggedItem);
            }
        }
    });
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveInfo();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveInfo();
    }
}, false);

function saveInfo() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    Array.from(listContainer.children).forEach(addDragEvents); 
}

showTask();
