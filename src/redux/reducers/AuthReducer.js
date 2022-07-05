import { ActionTypes } from "../constants/action-types";
const initialState = { accessToken: "" };
export const AuthReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.LOG_IN:
			return {
				...state,
				email: payload.email,
				password: payload.password,
				accessToken: payload?.token,
			};
		default:
			return state;
	}
};
