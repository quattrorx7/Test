/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import { Provider } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from './src/navigation/RootNavigator'
import store from './src/core/redux/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  )
}

export default App
