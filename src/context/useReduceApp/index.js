export let useReduceApp = (state, action) => {
	switch (action.type) {
		case "addFavorite": {
			let editFavorite = state.favorites.includes(action.payload)
				? state.favorites.filter((id) => id !== action.payload)
				: [...state.favorites, action.payload];

			localStorage.setItem("isLiked", JSON.stringify(editFavorite));

			return {
				...state,
				favorites: editFavorite,
			};
		}

		case "addBasket": {
			return state;
		}

		default:
			return state;
	}
};
