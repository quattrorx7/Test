import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackParamList } from './RootNavigator.types'
import { EventsNavigator } from './navigators'
import { PATHS } from '../core/constants'

export const RootStack = createStackNavigator<RootStackParamList>()

export const RootNavigator: FC = () => {
  return (
    <RootStack.Navigator detachInactiveScreens={false}>
      <RootStack.Screen
        name={PATHS.MAIN}
        component={EventsNavigator}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  )
}
