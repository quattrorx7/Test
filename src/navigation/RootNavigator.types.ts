import { RouteProp } from '@react-navigation/core'
import { PATHS } from '../core/constants'
import { Event } from '../modules/Main/screens/Events/Events.types'

export type RootStackParamList = {
  [PATHS.MAIN]: undefined
  [PATHS.EVENTS]: undefined
  [PATHS.EVENT_DETAILS]: {
    event?: Event
  }
}

export type EventsStackParamList = Pick<RootStackParamList, PATHS.EVENTS>

export type EventDetailsScreenRouteProp = RouteProp<RootStackParamList, PATHS.EVENT_DETAILS>
