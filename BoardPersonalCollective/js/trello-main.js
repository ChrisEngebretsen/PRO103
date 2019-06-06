(function () {
	'use strict'

	//Board constructor object and assign some properties to its prototype//
	function Board(title) {
		var nextId = 0
		
		this.cards = {}
		this.title = title
		this.lists = []
		

		this.node = document.createElement('div')
		this.titleNode = document.createElement('div')
		this.listsNode = document.createElement('div')

		this.node.id = 'board'
		this.titleNode.id = 'trello-title-board'
		this.listsNode.id = 'trello-canvas-board'

		// New list title form//
		this.titleFormNode = buildListTitleForm()
		this.titleNode.appendChild(document.createTextNode(this.title))

		this.getNextId = function () {
			return '_' + (nextId++).toString()
		}
	}

	Board.prototype.render = function () {
		this.lists.push(new List(this, 'Add a column...', 0, true))
		for (var i = 0; i < this.lists.length; ++i) {
			this.listsNode.appendChild(this.lists[i].node)
		}
		this.lists[this.lists.length - 1].node.appendChild(this.titleFormNode)
		this.lists[this.lists.length - 1].titleNode.onclick = AddingList(this)
		this.node.appendChild(this.titleNode)
		this.node.appendChild(this.listsNode)
	}

	Board.prototype.registerCard = function (card, index) {
		this.cards[card.id] =
		{
			card: card
			, list: card.list
			, index: index
		}
	}

	Board.prototype.reregisterSubsequent = function (list, index, shift) {
		for (var i = index; i < list.cards.length; ++i) {
			this.registerCard(list.cards[i], i + shift)
		}
	}

	Board.prototype.unregisterCard = function (card) {
		delete this.cards[card.id]
	}


	document.getElementById('card-edit-close').onclick = EditCard.close

	document.getElementById('card-edit-submit').onclick = EditCard.submit

	document.getElementById('card-edit-delete').onclick = DeleteCard.delete

	EditCard.windowOverlay.onclick = EditCard.close

	//Press escape to fastescape the edit box//
	window.onkeydown = function (evt) {
		if (evt.keyCode === 27) {
			EditCard.close()
		}
	}


	//Onloading the document render the board.The code starts from here//
	document.body.onload = function () {
		var title = ""
			, board = new Board(title)

		board.render()
		document.getElementById('container').appendChild(board.node)
		currentBoard = board
	}
}())
