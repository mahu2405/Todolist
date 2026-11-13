let tasks=["Complete JavaScript practice","Prepare for placement drive","Go for a walk","drink 3L water"];
function displayTask(){
    let display = "";
    tasks.forEach((task, index) => {
    display += `<div class="task-item d-flex justify-content-between align-items-center">
                <span>${task}</span>
                <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">🗑️</button>
                </div>`;
            });
document.getElementById("taskList").innerHTML = display;
}
displayTask()
function deleteTask(index){
    tasks=tasks.filter((task,i)=>i!==index);
    displayTask();
}
function addTask(){
    let input = document.getElementById("taskInput");
    if (input.value.trim() !== ""){
        tasks.push(input.value.trim());
        input.value = "";
        displayTask();
        hideForm();
    }
}
function showForm(){
    document.getElementById("formSection").classList.remove("d-none");
}
function hideForm(){
    document.getElementById("formSection").classList.add("d-none");
}