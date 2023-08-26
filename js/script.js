let addbtn = document.getElementById("addbtn");
let todoList = document.getElementById("todoList");
let clearAll = document.getElementById("clearAll");
let totalTask = document.getElementById("total-task");

// clear all todo
clearAll.addEventListener("click", () => {
  let res = confirm("Do you want to clear all tasks?");
  if (res) {
    localStorage.clear();
  }
  showTodo();
});

// deleting a todo
const deleteTodo = (index) => {
  let res = confirm("Do you want to delete this Task?");
  if (res) {
    let allNote = localStorage.getItem("allNote");
    if (allNote == null) {
      noteObj = [];
    } else {
      noteObj = JSON.parse(allNote);
    }
    noteObj.splice(index, 1);
    localStorage.setItem("allNote", JSON.stringify(noteObj));
    showTodo();
  }
  showTodo();
};

// showing all todos
const showTodo = () => {
  let allNote = localStorage.getItem("allNote");
  if (allNote == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(allNote);
  }
  todoList.innerHTML = "";
  for (i = noteObj.length - 1; i >= 0; i--) {
    todoList.innerHTML += `
        <div class="single-list p-2 mb-2 rounded-1">
                <span class="pe-5">${noteObj[i]}</span>
                <button class="btn rounded-0 text-white p-2 px-3 h-100" onclick="deleteTodo(${i})"><i class="bi bi-trash-fill"></i></button>
        </div>`;
  }
  totalTask.innerHTML = `You have ${noteObj.length} pending tasks`;
};
showTodo();

// Adding note
addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let addTodo = document.getElementById("addTodo");
  if (addTodo.value == "") {
    alert("Please enter something..");
  } else {
    let allNote = localStorage.getItem("allNote");
    if (allNote == null) {
      noteObj = [];
    } else {
      noteObj = JSON.parse(allNote);
    }
    noteObj.push(addTodo.value);
    localStorage.setItem("allNote", JSON.stringify(noteObj));
    addTodo.value = "";
  }
  showTodo();
});
