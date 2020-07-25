import ConfActionTypes from './confActionTypes';

const INITIAL_STATE = {
	mode: 'Light'
};

const confReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ConfActionTypes.TOGGLE_MODE:
			return {
				...state,
				mode: state.mode === 'Light' ? 'Dark' : 'Light'
			}
		default:
			return state;
	}
};

export default confReducer;