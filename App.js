
import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import StackNavb from './src/screen/RootNavigation/StackNavb'
import { NavigationContainer } from '@react-navigation/native'
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#2a2d34" />
      <StackNavb />
    </NavigationContainer>
  )
}

export default App