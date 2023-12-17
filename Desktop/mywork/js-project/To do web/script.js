document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Add task function
    window.addTask = function () {
        var taskText = taskInput.value;

        if (taskText.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        var li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    };

    // Delete task function
    window.deleteTask = function (element) {
        var li = element.parentElement;
        taskList.removeChild(li);
    };
});
