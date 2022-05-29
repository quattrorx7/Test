import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Events, EventDetails } from '../../../modules'
import { PATHS } from '../../../core/constants'

const EventsStack = createStackNavigator()

export const EventsNavigator: React.FC = () => {
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen
        options={{ headerTitle: 'Events' }}
        name={PATHS.EVENTS}
        component={Events}
      />
      <EventsStack.Screen
        options={{ headerTitle: 'Event details' }}
        name={PATHS.EVENT_DETAILS}
        component={EventDetails}
      />
    </EventsStack.Navigator>
  )
}
