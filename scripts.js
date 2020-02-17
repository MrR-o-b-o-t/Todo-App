const createEl = el => {
	return document.createElement(el);
};

const addTodo = () => {
	let todoInput = document.getElementById('todo-input');
	let text = todoInput.value;
	if (text.length < 1) return;

	const todos = JSON.parse(localStorage.getItem('todos') || '[]');
	let todoItem = createEl('li');
	todoItem.setAttribute('class', 'list-item');

	let StrikeThroughRadio = createEl('input');
	StrikeThroughRadio.setAttribute('id', 'checkbox-styles');
	StrikeThroughRadio.setAttribute('type', 'checkbox');

	let textnode = createEl('span');

	let deleteButton = createEl('button');
	let deleteButtonX = document.createTextNode('X');

	textnode.innerText = text;
	// Create delete todo button
	deleteButton.appendChild(deleteButtonX);
	deleteButton.addEventListener('click', removeNode);
	// Create strike through radio input
	StrikeThroughRadio.addEventListener('click', e => {
		StrikeThroughRadio.checked
			? e.target.nextElementSibling.classList.add('strike-text')
			: e.target.nextElementSibling.classList.remove('strike-text');
	});

	todoItem.appendChild(StrikeThroughRadio);
	todoItem.appendChild(textnode);
	todoItem.appendChild(deleteButton);

	const todoExist = todos.includes(text);
	if (!todoExist) {
		document.getElementById('display').appendChild(todoItem);
		todos.push(text);
		localStorage.setItem('todos', JSON.stringify(todos));
	} else {
		alert('That todo already exists!');
	}
	todoInput.value = '';
};

function removeNode(e) {
	e.target.parentElement.remove();
}

function ClearInputOnSubmit() {
	document.getElementById('todo-input').value = '';
}

// get saved todos from local storage and save it in a variable
// if saved todos variable is null then re-assign saved todoso variable equal to an empty array
// add current todo text to the saved todos array variable
// re-save saved todos into local storage (using the setItem() method)

//When the page refreshes or loads

// 1. Get saves todo items from local storage
const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
// 2. loop through saved todo items and render each
for (let i = 0; i < savedTodos.length; i++) {
	const todoText = savedTodos[i];

	let text = todoText;

	let todoItem = createEl('li');
	todoItem.setAttribute('class', 'list-item');

	let StrikeThroughRadio = createEl('input');
	StrikeThroughRadio.setAttribute('id', 'checkbox-styles');
	StrikeThroughRadio.setAttribute('type', 'checkbox');

	let textnode = createEl('span');

	let deleteButton = createEl('button');
	let deleteButtonX = document.createTextNode('X');

	textnode.innerText = text;
	console.log(text);
	// Create delete todo button
	deleteButton.appendChild(deleteButtonX);
	deleteButton.addEventListener('click', removeNode);
	// Create strike through radio input
	StrikeThroughRadio.addEventListener('click', e => {
		StrikeThroughRadio.checked
			? e.target.nextElementSibling.classList.add('strike-text')
			: e.target.nextElementSibling.classList.remove('strike-text');
	});

	todoItem.appendChild(StrikeThroughRadio);
	todoItem.appendChild(textnode);
	todoItem.appendChild(deleteButton);
	document.getElementById('display').appendChild(todoItem);
}
