import { StyleSheet, Text, View } from 'react-native'
import DiscoveryScreen from "./screens/Discovery_Screen.js"
import ArtistScreen from "./screens/Artist_Screen.js"

export default function App() {
  return (
    <ArtistScreen/>
    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
