var EditCard =
{ node: document.getElementById('card-edit')
	, windowOverlay: document.getElementById('container-main')
	, titleNode: document.getElementById('card-edit-title')
	, card: undefined
}

EditCard.clearInputs = function () {
	EditCard.titleNode.value = '';
}

//This will called on the close button
EditCard.close = function() {
	EditCard.card = undefined
	EditCard.clearInputs()
	EditCard.node.style.display = 'none'
	EditCard.windowOverlay.style.display = 'none'
}

//This function will show the edited text on the card on submit
EditCard.show = function () {
	EditCard.windowOverlay.style.display = 'block'
	EditCard.node.style.display = 'block'
}

//This function will submit the edited text
EditCard.submit = function (evt) {
	evt.preventDefault()
	var title = EditCard.titleNode.value.trim();

	if (title) {
		EditCard.card.title = title
		EditCard.card.titleNode.replaceChild(document.createTextNode(title),
			EditCard.card.titleNode.childNodes[0])
	}
	EditCard.close()
}