import { StyleSheet, Text, View } from 'react-native'

export default function DiscoveryScreen() {
    return ( 
      <View style={styles.container}>
        <Text style={stylez.textColor}>Discovery Page</Text>
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
