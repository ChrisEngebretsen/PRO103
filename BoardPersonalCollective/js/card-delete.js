/*
 This function deletes the card
 */
var DeleteCard = {};
var currentBoard;

DeleteCard.delete = function () {
	var index = currentBoard.cards[EditCard.card.id].index

	currentBoard.unregisterCard(EditCard.card)
	currentBoard.reregisterSubsequent(EditCard.card.list, index + 1, -1)

	EditCard.card.list.cardsNode.removeChild(EditCard.card.node)
	EditCard.card.list.cards.splice(index, 1)

	EditCard.close()
	EditCard.card = undefined
}

