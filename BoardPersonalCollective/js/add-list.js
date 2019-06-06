//This function will called on adding the list/column on the board//
function AddingList(board) {
	return function () {
		var titleInput = document.getElementById('trello-list-title-input')

		document.getElementById('trello-list-title-submit').onclick = ButtonTitleClick
		board.titleFormNode.style.display = 'block'
		titleInput.focus()

		function ButtonTitleClick(evt) {
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