import { StyleSheet, Text, View, Dimensions, ImageBackground, StatusBar} from 'react-native'

const albumCovers = {
    "album1" : require("../assets/coveralbum1.png"),
    "album2" : require("../assets/coveralbum2.png"),
    "album3" : require("../assets/aaaaaaaa.png"),
    "album4" : require("../assets/irisaccc.png"),
    "album5" : require("../assets/albumcover4.png"),
    "album6" : require("../assets/coveralbum5.png")
}


export default function DiscoveryScreen({artist, songTitle, album}) {
    return ( 
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

         <ImageBackground 
            source={albumCovers[album]}
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
        textShadowColor: 'black',
        textShadowRadius: 50,
        shadowOpacity: 50,
    },
    artist: {
        position: 'absolute',
        left: 29,
        top: 680,
        fontSize: 18,
        color: '#FFFFFF',
        textShadowColor: 'black',
        textShadowRadius: 50,
        shadowOpacity: 50,
    }  
   })
