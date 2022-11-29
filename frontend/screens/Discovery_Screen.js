import { StyleSheet, Text, View, Dimensions, ImageBackground, StatusBar} from 'react-native'


export default function DiscoveryScreen({artist, songTitle, album}) {
    return ( 
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

         <ImageBackground 
            // how do i change album cover
            source={require('../assets/album-cover.png')}
            style={styles.backgroundImage}
         >  
        </ImageBackground>
        <Text 
            style={styles.songTitle}>
            {songTitle}
        </Text>
        <Text 
            style={styles.artist}>
            {artist}
        </Text> 
    
      </View>

    );
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        left: 0
    },
    songTitle: {
        position: 'absolute',
        fontWeight: 'bold',
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
