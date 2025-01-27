// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let taskForm = document.getElementById("taskForm");
let taskLi = document.getElementById("tasks");
let data = JSON.parse(localStorage.getItem("data")) || [];
let status1 = document.getElementById("status");
renderData();
taskForm.addEventListener("submit", () => {
  event.preventDefault();
  let arrayTask = document.getElementById("taskText").value;

  if (arrayTask) {
    let tasks = { text: arrayTask, completed: false };
    data.push(tasks);
    saveTasks();
    taskForm.reset();
    renderData();
    status1.textContent = "Todo Item Created Successfully.";
  } else {
    status1.style.color = "red";
    status1.textContent = "Todo Item Don't Created.";
  }
  setTimeout(() => {
    status1.innerHTML = "";
    status1.style.color = "green";
  }, 1000);
});
function renderData() {
  taskLi.innerHTML = "";
  data.forEach((task, index) => {
    let li = document.createElement("li");
    if (!task.completed) {
      li.innerHTML = `<div class="position" onclick="completeTask(${index})">${task.text} </div>
    <div  class="tade"><button style=" border:none;cursor: pointer;background-color:rgba(222, 220, 211, 0.658)" onclick=changeData(${index}) ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></button> 
    <button style=" border:none;   cursor: pointer; background-color:rgba(222, 220, 211, 0.658)" onclick=deleteContact(${index})><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button></div>`;
      taskLi.append(li);
      if (task.completed) {
        li.classList = "completed";
      }
    } else {
      li.innerHTML = `<div class="position" onclick="completeTask(${index})">${task.text} </div>
    <div  style="display: flex;
  align-items: center;
  margin: 8px 0;
  margin-right: 5px;"> 
    <button style=" border:none;   cursor: pointer; background-color:rgba(222, 220, 211, 0.658)" onclick=deleteContact(${index})><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button></div>`;
      taskLi.append(li);
      if (task.completed) {
        li.classList = "completed";
        saveTasks();
      }
    }
  });
}
function deleteContact(index) {
  data.splice(index, 1);
  renderData();
  saveTasks();
}
function changeData(index) {
  let putText = document.getElementById("taskText").value;
  if (putText) {
    data[index].text = putText;
    renderData();
    taskForm.reset();
  } else {
    status1.style.color = "red";
    status1.textContent = "Input Is Empty.";
  }
  setTimeout(() => {
    status1.innerHTML = "";
    status1.style.color = "green";
  }, 1000);
}
function completeTask(index) {
  if (!data[index].completed) {
    data[index].completed = true;
  } else {
    data[index].completed = false;
  }
  renderData();
}
function saveTasks() {
  localStorage.setItem("data", JSON.stringify(data));
}
