const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", addItem);

function addItem() {
  const todoText = todoInput.value;
  if (todoText === "") {
    alert("Please enter a to-do item");
  } else {
    const li = document.createElement("li");
    li.innerText = todoText;
    todoList.appendChild(li);
    todoInput.value = "";
    li.addEventListener("click", completeItem);
  }
}

function completeItem() {
  const li = this;
  li.style.textDecoration = "line-through";
  li.style.color = "#888";
  li.removeEventListener("click", completeItem);
  li.addEventListener("click", removeItem);
}

function removeItem() {
  const li = this;
  todoList.removeChild(li);
}