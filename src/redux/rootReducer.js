import { combineReducers } from 'redux';

import bookReducer from './book/bookReducer';
import confReducer from './conf/confReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
	book: bookReducer,
	conf: confReducer,
	user: userReducer
});

export default rootReducer;