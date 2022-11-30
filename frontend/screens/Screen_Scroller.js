import {StyleSheet, View, FlatList, Dimensions, ImageBackground, Text, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import DiscoveryScreen from './Discovery_Screen'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';



const songs = [
  {
    artist: "Kali Uchis",
    title: "NO HAY LEY",
    albumT: "album1"
  },
  {
    artist: "Boy Pablo",
    title: "hey girl",
    albumT: "album2"
  },
  {
    artist: "Bad Bunny",
    title: "Titi Me Preguno",
    albumT: "album3"
  }

]



export default function ScreenScroller({navigation}) {

  const handleSwipeLeft = (artistName) => {
    navigation.navigate("Artist", {
      artist: artistName,
    })
  }

  const [horizontal, setHorizontal] = useState(false);
  const [snap, setWidth] = useState(Dimensions.get("window").height);
  const [count, update] = useState();

  let index = 0;

  return (
    <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          snapToAlignment='start'
          snapToInterval={snap}
          decelerationRate='fast'
          data={songs}
          index={count}
          horizontal = {horizontal}
          renderItem={({ item }) => (
            <GestureRecognizer
            onSwipeLeft={() => {handleSwipeLeft(item.artist)}}
            >
            <DiscoveryScreen artist={item.artist} songTitle={item.title} album={item.albumT}/>
            </GestureRecognizer>
          )}
        />
      <ImageBackground 
            source={require("../assets/black-rectangle.png")}
            style={styles.rectangle}
      >  
      </ImageBackground>
      <Text 
            style={styles.header}>
            Discovery Page
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
    flex: 1,
    height: '100vh',
    backgroundColor: 'black'
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
},
})