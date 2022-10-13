import { StyleSheet, Text, View, Image, Button } from 'react-native'

  //idk where to put these vars
  var songTitle = 'songTitleTemporary'
  var artist = 'artistTemporary'
  var albumCover = '../assets/icon.png'
export default function DiscoveryScreen() {
    return ( 
      <View style={styles.container}>
        <Text 
            style={stylez.header}>
            Discovery Page
        </Text>
        <Text 
            style={stylez.songTitle}>
            {songTitle}
        </Text>
        <Text 
            style={stylez.artist}>
            {artist}
        </Text>
        <Image 
            style={stylez.image} 
            source={require(albumCover)} 
        />
        <Button 
            style={stylez.homeButton}
            title="Home"
            color="#FFFFFF"
        />
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
        header: {
            position: 'absolute',
            left: 135,
            top: 100,
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
            position: 'absolute',
            left: 49,
            top: 532,
            fontSize: 15,
            color: '#FFFFFF',
        },
        image: {
            width: 300,
            height: 300,
            left: 0,
            top: -100,
        },
        homeButton: {
        }
    })
