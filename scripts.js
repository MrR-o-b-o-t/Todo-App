function addTodo() {
	let node = document.createElement('li');
	node.setAttribute('id', 'list-item');
	let text = document.getElementById('todo-input').value;
	let textnode = document.createTextNode(text);
	node.appendChild(textnode);

	let deleteButton = document.createElement('button');
	let deleteButtonX = document.createTextNode('X');
	deleteButton.appendChild(deleteButtonX);

	let StrikeThroughRadio = document.createElement('input');
	StrikeThroughRadio.setAttribute('type', 'checkbox');
	StrikeThroughRadio.addEventListener('click', function(e) {
		if (StrikeThroughRadio.checked === true) {
			e.target.nextElementSibling.style.textDecoration = 'line-through';
			e.target.nextElementSibling.style.color = 'red';
		} else {
			e.target.nextElementSibling.style.textDecoration = 'none';
			e.target.nextElementSibling.style.color = 'black';
		}
	});

	deleteButton.addEventListener('click', function() {
		let deleteLI = document.getElementById('display');
		deleteLI.removeChild(node);
		let RemoveDeleteButton = document.getElementById('display');
		RemoveDeleteButton.removeChild(deleteButton);
		let RemoveStrikeThroughRadio = document.getElementById('display');
		RemoveStrikeThroughRadio.removeChild(StrikeThroughRadio);
	});

	document.getElementById('display').appendChild(StrikeThroughRadio);
	document.getElementById('display').appendChild(node);
	document.getElementById('display').appendChild(deleteButton);
}

function ClearInputOnSubmit() {
	document.getElementById('todo-input').value = '';
}
