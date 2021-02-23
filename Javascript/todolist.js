
let addTaskBox = document.getElementById("addTaskBox");
let pendingTaskList = document.getElementById("pendingTaskList");
let completedTaskList = document.getElementById("completedTaskList");
let buttonSubmit = document.getElementById("buttonSubmit");


// everything needs to be in this one function

buttonSubmit.addEventListener("click", function() {
    let taskName = addTaskBox.value;

    let listItem = document.createElement("li");
    listItem.innerHTML = taskName;

    //to append task to pending task list -- is it okay here? Azam has it at the bottom, close to the end of the function
    // pendingTaskList.appendChild(listItem);

    //creating the remove button
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.addEventListener("click", function(list) {
        if (list == pendingTaskList) {
            pendingTaskList.removeChild(this.parentElement);
        }
        else {
            completedTaskList.removeChild(this.parentElement);
        }
    })
    //creating the checkbox to move task from pending task list to completed task list
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("click", function() {
        if (checkbox.checked == true) {
            completedTaskList.appendChild(listItem);
        }
        else if (checkbox.checked == false) {
            pendingTaskList.appendChild(listItem);
        }
    })

    listItem.appendChild(checkbox);
    pendingTaskList.appendChild(listItem);
    listItem.appendChild(removeButton);
})