var trackDragger =
{
	id: undefined
	, list: undefined
}

//this function will build the card node
function createCardNode() {
	var node = document.createElement('div')
	node.draggable = true
	node.innerHTML =
		'<div class="card-title"></div>';
	return node
}

/*
 This function is constructor function for card
 */
function Card(list, title) {
	this.id = list.board.getNextId()
	this.list = list
	this.title = title
	this.node = createCardNode()
	this.titleNode = this.node.getElementsByClassName('card-title')[0]

	this.node.classList.add('card')
	this.node.setAttribute('card-id', this.id)
	this.titleNode.appendChild(document.createTextNode(this.title))

	/*
	 These four function will work on drag and drop of the card on another list
	 */
	this.node.ondragstart = (function (id) {
		return function (evt) {
			trackDragger.id = id
			evt.dataTransfer.effectAllowed = 'move'
		}
	}(this.id))

	this.node.ondragover = function (evt) {
		if (trackDragger.id) {
			evt.preventDefault()
		}
	}

	this.node.ondrop = (function (board) {
		return function (evt) {
			var id = trackDragger.id
				, targetId = this.getAttribute('card-id') // 'this' is target of drop
				, source = board.cards[id]
				, target = board.cards[targetId]

			if (id === targetId) {
				return
			}

			source.list.cardsNode.removeChild(source.card.node)
			target.list.cardsNode.insertBefore(source.card.node, target.card.node)

			board.reregisterSubsequent(source.list, source.index + 1, -1)
			source.list.cards.splice(source.index, 1)

			board.reregisterSubsequent(target.list, target.index + 1, 1)
			target.list.cards.splice(target.index + 1, 0, source.card)

			source.card.list = target.list
			board.registerCard(source.card, target.index + 1)
			evt.preventDefault()
		}
	}(list.board))

	this.node.ondragend = function () {
		trackDragger.id = undefined
	}


	// this function will be called once you click on the text to edit
	this.node.onclick = (function (card) {
		return function () {
			EditCard.card = card
			EditCard.titleNode.value = card.title;
			EditCard.show()
		}
	}(this))
}
/*
 This function is called to build the card form
 */
function createCardTitleForm() {
	var node = document.createElement('form')
	node.innerHTML =
		'<div class="newitem-title-wrapper">' +
		'<textarea class="trello-new-card-title-input" type="text"></textarea>' +
		'<input class="trello-new-card-title-submit" type="submit" value="Add">' +
		'</div>'
	node.style.display = 'none'
	return node
}