import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, StatusBar} from 'react-native'


export default function DiscoveryScreen({artist, songTitle, album}) {
    return ( 
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        
         <ImageBackground 
            source={require('../assets/album-cover.png')}
            style={styles.backgroundImage}
         >  
        </ImageBackground>
        <Text 
            style={styles.songTitle}>
            uh
        </Text>
        <Text 
            style={styles.artist}>
            huh
        </Text> 
    
      </View>

    );
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        height: 850,
        width: 600,
        left: -10
    },
    songTitle: {
        position: 'absolute',
        fontWeight: 'bold',
        textTransform:'uppercase',
        left: 29,
        top: 630,
        fontSize: 35,
        color: '#FFFFFF',
    },
    artist: {
        position: 'absolute',
        left: 29,
        top: 680,
        fontSize: 18,
        color: '#FFFFFF',
    }  
   })
