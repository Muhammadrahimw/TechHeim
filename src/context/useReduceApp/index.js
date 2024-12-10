export let useReduceApp = (state, action) => {
	switch (action.type) {
		case "addFavorite":
			return;
		case "addBasket":
			return;
		default:
			return state;
	}
};
