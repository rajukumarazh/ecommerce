import { ActionTypes } from "../constants/action-types";

const initialState = {
	cart: [],
};
export const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.ADD_TO_CART:
			let isContains = state.cart.some((eee) => eee.id === payload.id);
			if (isContains == false) {
				return { ...state, cart: [...state.cart, payload] };
			}

		default:
			return state;
		case ActionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart?.filter((item) => {
					if (item.id !== payload) {
						return item;
					}
				}),
			};
	}
};
