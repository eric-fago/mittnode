import { all, call } from 'redux-saga/effects'

import { bookSagas } from './book/bookSagas';
import { userSagas } from './user/userSagas';

export default function* rootSaga() {
	yield all([
		call(bookSagas),
		call(userSagas)
	]);
};
