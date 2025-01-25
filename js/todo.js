const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// ToDo 삭제한다.
function deleteToDo(event) {
    const li = event.target.parentElement;
    // HTML 표준에 따라 요소의 id 속성은 항상 문자열로 정의된다.
    toDos = toDos.filter(toDo => toDo.id != Number(li.id));
    saveToDoList();
    li.remove();
}

function saveToDoList() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// ToDo를 화면에 보여준다.
function loadToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newToDoObj.text;
    button.innerText="X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    li.classList.add("sm-font");
    toDoList.appendChild(li);
}

function submitToDo(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        id: Date.now(),
        text: newToDo
    };
    toDos.push(newToDoObj);
    saveToDoList();
    loadToDo(newToDoObj);

    // 입력란 초기화
    toDoInput.value = "";
}

toDoForm.addEventListener("submit",submitToDo);



const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(loadToDo);
}

