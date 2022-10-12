import { StyleSheet, Text, View } from 'react-native'
import TestScreen from "./screens/test_screen.js"

export default function App() {
  return (
    <TestScreen/>
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
