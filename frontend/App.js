import { StyleSheet, Text, View } from 'react-native'
import ArtistScreen from "./screens/Artist_Screen.js"
import DiscoveryScreen from './screens/Discovery_Screen.js';
import ScreenScroller from "./screens/Screen_Scroller.js";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Scroller" component={ScreenScroller}/>
        <Stack.Screen name="Artist" component={ArtistScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );


}

