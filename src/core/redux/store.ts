import { Action, configureStore, Middleware } from '@reduxjs/toolkit'

import * as eventsStore from '../../modules/Main/stores'

const store = configureStore({
  reducer: {
    [eventsStore.MODULE_NAME]: eventsStore.eventsReducer,
  },
})

export default store

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
