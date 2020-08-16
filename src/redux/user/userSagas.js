import { all, call, takeLatest, put } from 'redux-saga/effects';

import {
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure,
	signUpSuccess,
	signUpFailure
} from './userActions';
import UserActionTypes from './userActionTypes'
import { auth, googleProvider, getCurrentUser } from '../../firebase/firebase';

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield put(signInSuccess(user));
	} catch (error) {
		yield put(signInFailure(error));
	}
};

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield put(signInSuccess(user));
	} catch (error) {
		yield put(signOutFailure(error));
	}
};

export function* isUserAuthenticated() {
	try {
		const user = yield getCurrentUser();
		if (!user) return;
		yield put(signInSuccess(user));
	} catch (error) {
		yield put(signInFailure(error));
	}
};

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess())
	} catch (error) {
		yield put(signOutFailure(error));
	}
};

export function* signUp({ payload: { displayName, email, password } }) {
	try {
		yield auth.createUserWithEmailAndPassword(email, password);
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield put(signUpSuccess(user));
	} catch (error) {
		yield put(signUpFailure(error));
	}
};

export function* onGoogleSignInStart() {
	yield takeLatest(
		UserActionTypes.GOOGLE_SIGN_IN_START,
		signInWithGoogle);
};

export function* onEmailSignInStart() {
	yield takeLatest(
		UserActionTypes.EMAIL_SIGN_IN_START,
		signInWithEmail
	);
};

export function* onCheckUserSession() {
	yield takeLatest(
		UserActionTypes.CHECK_USER_SESSION,
		isUserAuthenticated
	);
};

export function* onSignOutStart() {
	yield takeLatest(
		UserActionTypes.SIGN_OUT_START,
		signOut
	);
};

export function* onSignUpStart() {
	yield takeLatest(
		UserActionTypes.SIGN_UP_START,
		signUp
	);
};

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
		call(onSignUpStart)
	]);
};
