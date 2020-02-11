function addTodo() {
	let node = document.createElement('li');
	node.setAttribute('class', 'list-item');
	let text = document.getElementById('todo-input').value;
	let textnode = document.createElement('span');
	textnode.innerText = text;
	//node.appendChild(textnode);

	let deleteButton = document.createElement('button');
	let deleteButtonX = document.createTextNode('X');
	deleteButton.appendChild(deleteButtonX);
	deleteButton.addEventListener('click', removeNode);

	let StrikeThroughRadio = document.createElement('input');
	StrikeThroughRadio.setAttribute('type', 'checkbox');
	StrikeThroughRadio.addEventListener('click', function(e) {
		StrikeThroughRadio.checked
			? e.target.nextElementSibling.classList.add('strike-text')
			: e.target.nextElementSibling.classList.remove('strike-text');
	});

	node.appendChild(StrikeThroughRadio);
	node.appendChild(textnode);
	node.appendChild(deleteButton);

	//document.getElementById('display').appendChild(StrikeThroughRadio);
	document.getElementById('display').appendChild(node);
	//document.getElementById('display').appendChild(deleteButton);
}

function removeNode(e) {
	e.target.parentElement.remove();
}

function ClearInputOnSubmit() {
	document.getElementById('todo-input').value = '';
}
