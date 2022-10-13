import { StyleSheet, Text, View } from 'react-native'

export default function DiscoveryScreen() {
    return ( 
      <View style={styles.container}>
<<<<<<< HEAD:screens/Discovery_Screen.js
        <Text style={stylez.textColor}>Discovery Page</Text>
=======
        <Text>test screen guys!</Text>
        <Text>this is a working app fr!</Text>
>>>>>>> 5b0da2ceb79393bc68b8c215392bbf2d3ea53d67:screens/test_screen.js
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#040f2f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    })

    const stylez = StyleSheet.create({
        textColor: {
            color: 'white'
        }
    })
