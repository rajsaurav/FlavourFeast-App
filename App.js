import React from 'react'
import RecipeList from './src/screens/RecipeList'
import RecipeDetail from './src/screens/RecipeDetail'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='List' component={RecipeList} options={{ headerShown: false }} />
        <Stack.Screen name='Details' component={RecipeDetail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App