import { createSelector } from 'reselect';

const selectConfState = (state) => state.conf;

export const selectMode = createSelector(
	[selectConfState],
	(confState) => confState.mode
);
