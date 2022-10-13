import { StyleSheet, Text, View } from 'react-native'
import DiscoveryScreen from "./screens/Discovery_Screen.js"

export default function App() {
  return (
    <DiscoveryScreen/>
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
