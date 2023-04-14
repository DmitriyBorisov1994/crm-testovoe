import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './reducers/contactsReducer'
import authreducer from './reducers/authReducer'

export const store = configureStore({
   reducer: {
      auth: authreducer,
      contacts: contactsReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: ['your/action/type'],
            ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
            ignoredPaths: ['items.dates'],
         },
      }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch