// Function for the columns and the card //
function List(board, title, index, stupidTest) {
	this.board = board
	this.stupidTest = stupidTest
	this.title = title
	this.index = index
	this.node = document.createElement('div')
	this.titleNode = document.createElement('div')
	this.cardsNode = document.createElement('div')
	this.node.classList.add('list')
	this.titleNode.classList.add('list-title')
	this.cardsNode.classList.add('list-cards')
	this.titleNode.setAttribute('list-index', index)
	this.titleNode.appendChild(document.createTextNode(this.title))
	this.node.appendChild(this.titleNode)
// Setting the cards//
	if (!stupidTest) {
		var stupidTest = new Card(this, 'Add a task...', 0)

		this.titleNode.draggable = true
		this.cards = [stupidTest]
		board.registerCard(this.cards[0], 0)

		// new card title form
		this.titleFormNode = createCardTitleForm()

		for (var i = 0; i < this.cards.length; ++i) {
			this.cardsNode.appendChild(this.cards[i].node)
		}
		stupidTest.titleNode.onclick = CardAdding(this)
		this.node.appendChild(this.cardsNode)
		stupidTest.node.appendChild(this.titleFormNode)
		stupidTest.node.draggable = false
		stupidTest.node.onclick = undefined
}

	// Drag-drop handlers
	this.titleNode.ondragstart = function (evt) {
		var index = parseInt(evt.target.getAttribute('list-index'), 10)
		trackDragger.list = currentBoard.lists[index]
		evt.dataTransfer.effectAllowed = 'move'
	}

	this.titleNode.ondragover = function (evt) {
		if (trackDragger.list) {
			evt.preventDefault()
		}
	}

	this.titleNode.ondrop = function (evt) {
		var sourceIndex = trackDragger.list.index
			, targetIndex = parseInt(this.getAttribute('list-index'), 10)
			, numLists = board.lists.length
			, i

		if (sourceIndex === targetIndex) { return }

		board.listsNode.removeChild(trackDragger.list.node)
		board.listsNode.insertBefore(trackDragger.list.node,
			board.lists[targetIndex].node)

		for (i = sourceIndex; i < numLists-1; ++i) {
			board.lists[i] = board.lists[i+1]
			board.lists[i].titleNode.setAttribute('list-index', i)
			board.lists[i].index = i
		}
		for (i = numLists-1; i > targetIndex; --i) {
			board.lists[i] = board.lists[i-1]
			board.lists[i].titleNode.setAttribute('list-index', i)
			board.lists[i].index = i
		}
		board.lists[targetIndex] = trackDragger.list
		board.lists[targetIndex].titleNode.setAttribute('list-index', targetIndex)
		board.lists[targetIndex].index = targetIndex
		evt.preventDefault()
	}

	this.titleNode.ondragend = function () {
		trackDragger.list = undefined
	}
}
//This function will called on adding the list on the board
function AddingList(board) {
	return function () {
		var titleInput = document.getElementById('trello-list-title-input')

		document.getElementById('trello-list-title-submit').onclick = titleButtonClick
		board.titleFormNode.style.display = 'block'
		titleInput.focus()

		function titleButtonClick(evt) {
			evt.preventDefault()
			var title = titleInput.value.trim()
				, index = board.lists.length - 1
				, list

			board.titleFormNode.style.display = 'none'
			titleInput.value = ''
			if (!title) {
				return
			}

			list = new List(board, title, index)
			board.lists.splice(index, 0, list)
			board.listsNode.insertBefore(list.node,
				board.lists[index + 1].node)
			board.lists[index + 1].titleNode.setAttribute('list-index', index + 1)
		}
	}
}
/*
This function will build the form for list,It is called by addList
 */
function buildListTitleForm() {
	var node = document.createElement('form')
	node.innerHTML =
		'<div class="newitem-title-wrapper">' +
		'<input id="trello-list-title-input" type="text">' +
		'<input id="trello-list-title-submit" type="submit" value="Save">' +
		'</div>'
	node.style.display = 'none'
	return node
}