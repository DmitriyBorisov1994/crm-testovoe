import { IContact } from './../../interfaces/IContact';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IContact[] = [
   {
      clientId: 1,
      clientName: 'Ivan',
      trn_ppsn: 654835,
      yearEnd: '23/06/22',
      ard: '23/06/22',
      companyNumber: 147258369,
      email: 'someMail@mail.com',
      phoneNumber: 8800553535,
      companyAddress: 'Pushkina 10'
   },
   {
      clientId: 2,
      clientName: 'Vasiliy',
      trn_ppsn: 963528,
      yearEnd: '23/06/22',
      ard: '23/06/22',
      companyNumber: 147258369,
      email: 'vasyok@mail.com',
      phoneNumber: 8800553535,
      companyAddress: 'Lenina 1'
   },
   {
      clientId: 3,
      clientName: 'Anatoliy',
      trn_ppsn: 147852,
      yearEnd: '23/06/22',
      ard: '23/06/22',
      companyNumber: 147258369,
      email: 'tolik@mail.com',
      phoneNumber: 8800553535,
      companyAddress: 'Gagarina 12'
   },
]

const contactsSlice = createSlice({
   name: 'contacts',
   initialState,
   reducers: {
      addContact: (state, action: PayloadAction<IContact>) => {
         state.push(action.payload)
      },
      editContact: (state, action: PayloadAction<{ data: IContact, key: number }>) => {
         const index = state.findIndex((item) => item.clientId === action.payload.key);
         state.splice(index, 1, {
            ...action.payload.data
         });
      },
      deleteContact: (state, action: PayloadAction<number>) => {
         const index = state.findIndex((item) => item.clientId === action.payload);
         state.splice(index, 1);
      },
   },
})

export const { addContact, editContact, deleteContact } = contactsSlice.actions

export default contactsSlice.reducer