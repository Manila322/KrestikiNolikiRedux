import { PLAYER, STATUS } from './constants';

const initialState = {
	field: Array(9).fill(null),
	currentPlayer: PLAYER.CROSS,
	status: STATUS.TURN,
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_FIELD':
			return {
				...state,
				field: action.payload,
			};
		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: action.payload,
			};
		case 'SET_STATUS':
			return {
				...state,
				status: action.payload,
			};
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};
