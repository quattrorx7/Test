import { createSlice, createSelector, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../../core/redux/store'
import { Event } from '../screens/Events/Events.types'

interface EventsState {
  events: Event[]
  isEventsLoading: boolean
}

const initialState: EventsState = {
  events: [],
  isEventsLoading: false,
}

export const MODULE_NAME = 'events'

export const fetchEventsList = createAsyncThunk('events/fetchEvents', async () => {
  const response = await axios.get<Event[]>('https://api.github.com/events')

  return response?.data
})

export const eventsSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEventsList.pending, (state) => {
      state.isEventsLoading = true
    })

    builder.addCase(fetchEventsList.fulfilled, (state, action: PayloadAction<Event[]>) => {
      state.events = action.payload
      state.isEventsLoading = false
    })

    builder.addCase(fetchEventsList.rejected, (state) => {
      state.isEventsLoading = false
    })
  },
})

export const eventsStateSelector = (state: RootState) => state[MODULE_NAME]

export const eventsListSelector = createSelector(eventsStateSelector, (state) => state.events)

export const isEventsLoadingSelector = createSelector(
  eventsStateSelector,
  (state) => state.isEventsLoading
)

export const eventsReducer = eventsSlice.reducer
