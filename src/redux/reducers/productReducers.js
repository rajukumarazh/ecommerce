import { ActionTypes } from "../constants/action-types";

const initialState = {
	products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return { ...state, products: payload };
		case ActionTypes.SEARCH_ITEMS:
			let ar = state.products.filter((cur) => {
				if (cur.name.toLowerCase().includes(payload.current)) {
					return cur;
				}
			});
			return { ...state, products: [...ar] };
		case ActionTypes.HIGH_TO_LOW:
			let neee = state.products.sort((a, b) => {
				return b.price - a.price;
			});
			return { ...state, products: [...neee] };
		case ActionTypes.LOW_TO_HIGH:
			let AA = state.products.sort((a, b) => {
				return a.price - b.price;
			});
			return { ...state, products: [...AA] };
		case ActionTypes.SEARCH_HEADPHONE:
			let headphone = state.products.filter((current) => {
				return current.title == "headphones";
			});
			return { ...state, products: [...headphone] };

		default:
			return state;
	}
};

export const selectedProductReducer = (
	state = initialState,
	{ type, payload },
) => {
	switch (type) {
		case ActionTypes.SELECTED_PRODUCTS:
			return { ...state, ...payload };
		case ActionTypes.REMOVE_SELECTED_PRODUCTS:
			return {};
		default:
			return state;
	}
};
export const FilteredReducer = (state = initialState, { type, payload }) => {
	console.log("reducer", payload);

	switch (type) {
		// case ActionTypes.SEARCH_ITEMS:
		// 	let ar = state.products.filter((cur) => {
		// 		if (cur.name.toLowerCase().includes(payload.current)) {
		// 			return cur;
		// 		}
		// 	});
		// 	return { ...state, products: ar };

		case ActionTypes.HIGH_TO_LOW:
			let neee = payload?.sort((a, b) => {
				return b.price - a.price;
			});
			return { ...state, cart: neee };
		case ActionTypes.LOW_TO_HIGH:
			let AA = payload?.sort((a, b) => {
				return a.price - b.price;
			});
			return { ...state, cart: AA };

		default:
			return state;
	}
};
