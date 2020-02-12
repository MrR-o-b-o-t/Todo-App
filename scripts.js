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

	//document.getElementById('display').appendChild(StrikeThroughRadio);
	document.getElementById('display').appendChild(node);

	(function() {
		'use strict';
		window.addEventListener(
			'load',
			function() {
				// Fetch all the forms we want to apply custom Bootstrap validation styles to
				var forms = document.getElementsByClassName('needs-validation');
				// Loop over them and prevent submission
				var validation = Array.prototype.filter.call(forms, function(form) {
					form.addEventListener(
						'submit',
						function(event) {
							if (form.checkValidity() === false) {
								event.preventDefault();
								event.stopPropagation();
							}
							form.classList.add('was-validated');
						},
						false
					);
				});
			},
			false
		);
	})();
}

function removeNode(e) {
	e.target.parentElement.remove();
}

function ClearInputOnSubmit() {
	document.getElementById('todo-input').value = '';
}
