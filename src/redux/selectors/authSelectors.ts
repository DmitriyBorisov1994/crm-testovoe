import { RootState } from './../store';
import { createSelector } from '@reduxjs/toolkit';

const selectAuthParams = (state: RootState) => {
   return state.auth
};

export const selectLogin = createSelector(
   [selectAuthParams],
   (auth) => auth.login
);