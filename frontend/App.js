import ArtistScreen from "./screens/Artist_Screen.js"
import ScreenScroller from "./screens/Screen_Scroller.js";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Artist2 from "./screens/Artist2.js"

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Scroller" component={ScreenScroller}/>
        <Stack.Screen name="Artist" component={ArtistScreen}/>
        <Stack.Screen name = "Artist2" component={Artist2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );


}

