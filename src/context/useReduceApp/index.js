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
			let producId = JSON.parse(localStorage.getItem("basket")) || [];
			if (!producId.includes(action.payload)) {
				producId.push(action.payload);
			}

			localStorage.setItem("basket", JSON.stringify(producId));

			return {
				...state,
				basket: producId,
			};
		}

		case "removeBasket": {
			let producId = JSON.parse(localStorage.getItem("basket")) || [];
			let editProduct = producId.filter((id) => id !== action.payload);
			localStorage.setItem("basket", JSON.stringify(editProduct));

			return {
				...state,
				basket: editProduct,
			};
		}

		default:
			return state;
	}
};
