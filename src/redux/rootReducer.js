import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import bookReducer from './book/bookReducer';
import confReducer from './conf/confReducer';
import userReducer from './user/userReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['conf']
};

const rootReducer = combineReducers({
	book: bookReducer,
	conf: confReducer,
	user: userReducer
});

export default persistReducer(persistConfig, rootReducer);