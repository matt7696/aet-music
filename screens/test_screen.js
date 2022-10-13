import { StyleSheet, Text, View } from 'react-native'
export default function TestScreen() {
    return ( 
      <View style={styles.container}>
        <Text>test screen guys!</Text>
        <Text>this is a working app fr!</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  