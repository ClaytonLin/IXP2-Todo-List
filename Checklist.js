//grab elements from html
const todoForm = document.getElementById("form-todo");
const todoInput = document.getElementById("input-todo");
const todoList = document.getElementById("list-todo");

//set trigger
todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    //avoid generate a blank item
    const todoText = todoInput.value;
    if(!todoText){
    return;}   

    //create "p"
    const todoItem = document.createElement("p");
    todoList.appendChild(todoItem);
    todoItem.textContent = todoText;

    //click to check
    todoItem.addEventListener("click", function(){

        if (todoItem.style.backgroundColor === "rgb(32, 32, 32)") {

            todoItem.style.backgroundColor = "rgba(64, 64, 64)";
        } else {

            todoItem.style.backgroundColor = "rgb(32, 32, 32)";
        }
    });

    //double click to remove
    todoItem.addEventListener("dblclick", function() {
        todoItem.remove();
    });

    //remove text in the input
    todoInput.value = "";
    });
