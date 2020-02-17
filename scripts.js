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
	deleteButton.appendChild(deleteButtonX);
	deleteButton.addEventListener('click', removeNode);

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

const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');

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
