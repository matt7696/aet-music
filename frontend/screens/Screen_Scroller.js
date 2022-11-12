import { StyleSheet, View, FlatList, Dimensions, ImageBackground, Text, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import DiscoveryScreen from './Discovery_Screen'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


const songs = [
  {
    artist: "sampleArtist",
    title: "sampleTitle",
    uri: "sampleUri"
  },
  {
    artist: "artist 2",
    title: "title 2",
    uri: "uri 2"
  },

]

const artist = [
  
]



export default function ScreenScroller() {

  const [horizontal, setHorizontal] = useState(true);
  const [snap, setWidth] = useState(Dimensions.get("window").width);




  return (
    <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          snapToAlignment='start'
          snapToInterval={snap}
          decelerationRate='fast'
          data={songs}
          horizontal = {horizontal}
          renderItem={({ item }) => (
            <GestureRecognizer
            onSwipeLeft={(state) => {setHorizontal(true); setWidth(Dimensions.get("window").width);}}
            onSwipeUp={(state) => {setHorizontal(false); setWidth(Dimensions.get("window").height);}}
            onSwipeDown={(state) => {setHorizontal(false); setWidth(Dimensions.get("window").height);}}
          >
            <DiscoveryScreen artist={item.artist} title={item.title} uri={item.title}/>
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