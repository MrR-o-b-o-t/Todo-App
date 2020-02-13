function addTodo() {
	let node = document.createElement('li');
	node.setAttribute('class', 'list-item');
	let text = document.getElementById('todo-input').value;
	if (text.length < 1) return;
	let textnode = document.createElement('span');
	textnode.innerText = text;
	// Create delete todo button
	let deleteButton = document.createElement('button');
	let deleteButtonX = document.createTextNode('X');
	deleteButton.appendChild(deleteButtonX);
	deleteButton.addEventListener('click', removeNode);
	// Create strike through radio input
	let StrikeThroughRadio = document.createElement('input');
	StrikeThroughRadio.setAttribute('id', 'checkbox-styles');
	StrikeThroughRadio.setAttribute('type', 'checkbox');
	StrikeThroughRadio.addEventListener('click', function(e) {
		StrikeThroughRadio.checked
			? e.target.nextElementSibling.classList.add('strike-text')
			: e.target.nextElementSibling.classList.remove('strike-text');
	});

	node.appendChild(StrikeThroughRadio);
	node.appendChild(textnode);
	node.appendChild(deleteButton);

	document.getElementById('display').appendChild(node);
}

function removeNode(e) {
	e.target.parentElement.remove();
}

function ClearInputOnSubmit() {
	document.getElementById('todo-input').value = '';
}
