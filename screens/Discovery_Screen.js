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
        <ImageBackground 
            source={require("../assets/black-rectangle.png")}
            style={styles.rectangle}
         >  
        </ImageBackground>
        
        <Text 
            style={styles.header}>
            Discovery Page
        </Text>
        <Text 
            style={styles.songTitle}>
            uh
        </Text>
        <Text 
            style={styles.artist}>
            huh
        </Text> 
        
        <TouchableOpacity 
            style = {styles.homeButton}
        >     
            <ImageBackground source={require("../assets/home-button.png")} style = {styles.homeButtonImage}/>
        </TouchableOpacity>
        <TouchableOpacity 
            style = {styles.profileButton}
        >     
            <ImageBackground source={require("../assets/profile-icon.png")} style = {styles.profileButtonImage}/>
        </TouchableOpacity>
    
      </View>

    );
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        position: 'absolute',
        height: 850,
        width: 600,
        left: -10
    },
    rectangle: {
        position: 'absolute',
        height: 100,
        width: 500,
        top: -10,
        opacity: 0.7
    },
    header: {
        position: 'absolute',
        left: 138,
        top: 50,
        fontSize: 17,
        color: '#FFFFFF',
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
    },
    homeButton: {
        position: 'absolute',
        top: 750,
        left: 70,
        width: 60,
        height: 60,
    },
    profileButton: {
        position: 'absolute',
        top: 750,
        left: 290,
        width: 60,
        height: 60,
    },
    homeButtonImage: {
        width: 30,
        height: 30
    },
    profileButtonImage: {
        width: 25,
        height: 33
    }  
   })
