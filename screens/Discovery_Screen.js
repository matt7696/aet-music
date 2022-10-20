import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'

  //idk where to put these vars
  var songTitle = 'songTitleTemporary'
  var artist = 'artistTemporary'
  var albumCover = '../assets/icon.png'
export default function DiscoveryScreen() {
    return ( 
      <View style={styles.container}>
         
        <Text 
            style={styles.header}>
            Discovery Page
        </Text>
        <Text 
            style={styles.songTitle}>
            {songTitle}
        </Text>
        <Text 
            style={styles.artist}>
            {artist}
        </Text>
        <Image 
            style={styles.image} 
            source={require(albumCover)} 
        />
        <TouchableOpacity 
            style = {styles.homeButton}
        >     
        <Image source={require("../assets/icon.png")} style = {styles.homeButtonImage}/>
        </TouchableOpacity>
    
      </View>

    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#040f2f',
      flexDirection: 'column',
      alignItems: ''
    },
    header: {
        left: 138,
        top: 50,
        fontSize: 17,
        color: '#FFFFFF',
    },
    songTitle: {
        position: 'absolute',
        left: 49,
        top: 486,
        fontSize: 25,
        color: '#FFFFFF',
    },
    artist: {
        left: 49,
        top: 532,
        fontSize: 15,
        color: '#FFFFFF',
    },
    image: {
        width: 300,
        height: 300,
        left: 50,
        top: 150,
    },
    homeButton: {
        top: 390,
        left: 40,
        backgroundColor: 'white',
        width: 60,
        height: 60,
    },
    homeButtonImage: {
        width: 60,
        height: 60
    }
    })
