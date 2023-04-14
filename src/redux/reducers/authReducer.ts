import { IUserCredentials } from '../../interfaces/IUserCredentials';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IUserCredentials = { login: null, password: null }

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setCredentials: (state, action: PayloadAction<IUserCredentials>) => {
         const { login, password } = action.payload
         state.login = login
         state.password = password
      },
      logOut: (state) => {
         state.login = null
         state.password = null
      }
   },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer
