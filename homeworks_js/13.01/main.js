(function() {
    let taskList = []
    function saveTask() {

        let task = {
            description: document.getElementById("task_des").value,
            state: document.getElementById("task_state").value,
            id: taskList.length
        }
        taskList.push(task);
        render();
        storageSave();
    }

    function render() {
        let ul = document.getElementById("task_list");
        ul.innerHTML = "";

        for (let item of taskList) {
            let li = document.createElement("li");
            li.innerHTML = item.description;
            li.setAttribute("id", item.id);

            let updateBtn = document.createElement("button");
            updateBtn.innerHTML = "UPDATE";
            let deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "DELETE";

            li.appendChild(updateBtn);
            li.appendChild(deleteBtn);
            ul.appendChild(li);
        }
    }
    function storageSave() {
        window.localStorage.setItem("listTask", JSON.stringify(taskList));
    }
    function init() {
        if (window.localStorage.getItem("listTask")) {
            taskList = JSON.parse(window.localStorage.getItem("listTask"));
        } else {
            taskList = []
        }
        let saveBtn = document.getElementById("save_task");
        saveBtn.addEventListener("click", saveTask);
        render();
    }
    init();
})();
