import { RootState } from './../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectAllContacts = (state: RootState) => {
   return state.contacts
};

export const selectContactsBySearch = createSelector(
   [selectAllContacts, (search: string) => search],
   (contacts, search) => {
      if (search.trim()) {
         return contacts.filter(contact => {
            for (let v of Object.values(contact)) {
               let vStr = `${v}`
               return vStr.includes(search)
            }
         })
      } else return contacts

   }
);