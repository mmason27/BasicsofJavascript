
let addTaskBox = document.getElementById("addTaskBox");
let pendingTaskList = document.getElementById("pendingTaskList");
let completedTaskList = document.getElementById("completedTaskList");
let buttonSubmit = document.getElementById("buttonSubmit");

buttonSubmit.addEventListener("click", function() {
  
   //creating the checkbox to move task from pending task list to completed task list
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("click", function() {
        if (this.checked) {
            completedTaskList.appendChild(listItem);
        }
        else {
            pendingTaskList.appendChild(listItem);
        }
    })

    // //creating the list item
    let taskName = addTaskBox.value;
    let listItem = document.createElement("li");
    listItem.innerHTML = taskName;

    //creating the remove button
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.addEventListener("click", function() {
        this.parentElement.remove();
    })

    listItem.appendChild(checkbox);
    listItem.appendChild(removeButton);
    pendingTaskList.appendChild(listItem);
    
})