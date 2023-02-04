const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoElements = document.querySelector(".todo-elements");

let todoDict = {};
const todoDictDB = JSON.parse(localStorage.getItem("todoDict"));
todoDictDB ? (todoDict = todoDictDB) : (todoDict = {});

const removeElement = (element) => {
	key = element.id;
	element.remove();
	delete todoDict[key];
	console.log(todoDict);
	localStorage.setItem("todoDict", JSON.stringify(todoDict));
};
const onClickTodoElement = (event) => {
	event.srcElement.style.textDecoration = "line-through";
	setTimeout(() => removeElement(event.srcElement), 500);
};

const drawtodoDict = (key) => {
	const div = document.createElement("div");
	div.id = key;
	div.innerHTML = todoDict[key];
	div.addEventListener("click", onClickTodoElement);
	todoElements.appendChild(div);
};

const drawAll = () => {
	for (const key in todoDict) {
		drawtodoDict(key);
	}
};

drawAll();

const onSubmitTodo = (event) => {
	event.preventDefault();
	_key = self.crypto.randomUUID();
	_val = todoInput.value;
	if (_val) {
		todoDict[_key] = [_val];
		localStorage.setItem("todoDict", JSON.stringify(todoDict));
		drawtodoDict(_key);
		todoInput.value = "";
	}

	// drawtodoDict();
};

todoForm.addEventListener("submit", onSubmitTodo);
