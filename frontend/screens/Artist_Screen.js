import React, { useState } from "react";
var artistImage = '../assets/kaliArtist.png'

const image = { uri: "https://reactjs.org/logo-og.png" };

import {
  View,
  ImageBackground,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";


const App = () => {
  <View style={styles.container}>
    
  </View>

  return (
    <View style={styles.containerb1}>
         <ImageBackground source={require('../assets/kaliArtist.png')} style={styles.backgroundImage}blurRadius = {3}>

      <View style={styles.label}> 

        <Text style = {styles.ArtistName}>Kali Uchis</Text>
        
        <ImageBackground 
            source={require('../assets/spotify.png')}
            style={styles.socials1}
         >  
        </ImageBackground>

        <ImageBackground 
            source={require("../assets/spotify.png")}
            style={styles.socials1}
         >  
        </ImageBackground>

        <ImageBackground 
            source={require("../assets/insta.png")}
            style={styles.socials2}
         >  
        </ImageBackground>

        <ImageBackground 
            source={require("../assets/twitter.png")}
            style={styles.socials3}
         >  
        </ImageBackground>

        <ImageBackground 
            source={require("../assets/insta.png")}
            style={styles.socials4}
         >  
        </ImageBackground>
    
        <TouchableOpacity
        style={styles.button} 
              
      >
        <Text style = {styles.buttonLabel}>Albums</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle1}></TouchableOpacity>
        <TouchableOpacity style={styles.rectangle2}></TouchableOpacity>
        <TouchableOpacity style={styles.rectangle3}></TouchableOpacity>
        <TouchableOpacity style={styles.rectangle4}></TouchableOpacity>


      <TouchableOpacity
        style={styles.button}       
      >
        <Text style = {styles.buttonLabel}>Singles</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}       
      >
        <Text style = {styles.buttonLabel}>EPs</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}       
      >
       <Text style = {styles.buttonLabel}>MVs</Text>
      </TouchableOpacity>

      <ImageBackground 
            source={require("../assets/albumone.png")}
            style={styles.album1}
         >  
        </ImageBackground>

        <ImageBackground 
            source={require("../assets/album2.png")}
            style={styles.album2}
         >  
        </ImageBackground>

        <ImageBackground 
            source={require("../assets/album3.png")}
            style={styles.album3}
         >  
        </ImageBackground>

        <ImageBackground 
            source={require("../assets/album4.png")}
            style={styles.album4}
         >  
        </ImageBackground>

        <Text style = {styles.album1title}>Sin Miedo (del Amor y Otros{"\n"}</Text>
        <Text style = {styles.album11title}>Demonios) [Deluxe Version]</Text>
        <Text style = {styles.album2title}>Sin Miedo (del Amor y Otros </Text>
        <Text style = {styles.album22title}>Demonios) </Text>
        <Text style = {styles.album3title}>Isolation</Text>
        <Text style = {styles.album4title}>Por Vida</Text>

        <Text style = {styles.songInfo1}>xxxx | Genre</Text>
        <Text style = {styles.songInfo11}>## songs</Text>

        <Text style = {styles.songInfo2}>xxxx | Genre</Text>
        <Text style = {styles.songInfo22}>13 songs</Text>

        <Text style = {styles.songInfo3}>2018 | Latin</Text>
        <Text style = {styles.songInfo33}>13 songs</Text>

        <Text style = {styles.songInfo4}>2015 | Latin</Text>
        <Text style = {styles.songInfo44}>13 songs</Text>

      <ImageBackground source={require("../assets/kaliArtist.png")} style = {styles.ArtistImage}/>


      </View>   
      </ImageBackground> 
    </View>   
  );
};

  const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
  }) => (
    <View style={{ padding: 10, flex: 1 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            title = "Singles"
            color = "#FFFFFF"
            style={[
              styles.button,
              selectedValue === value && styles.selected,
            ]}
          >
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value &&
                  styles.selectedLabel,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.container}>{children}</View>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    minHeight: 200,
  },

  containerb1: {
    flex: 1,
    marginTop: 0,
    marginLeft: 0,
    minHeight: 200,

  }, 
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 99,
    backgroundColor: "black",
    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "10%",
    height: 25,
    marginLeft: 20,
    textAlign: "center",
  },
  socials1:{
    position: "absolute",
    height: 25,   
    width: 25,
    marginTop: -45,
    marginLeft: 100
  },
  socials2:{
    position: "absolute",
    height: 25,   
    width: 25,
    marginTop: -45,
    marginLeft: 150
  },
  socials3:{
    position: "absolute",
    height: 25,   
    width: 25,
    marginTop: -45,
    marginLeft: 200
  },
  socials4:{
    position: "absolute",
    height: 25,   
    width: 25,
    marginTop: -45,
    marginLeft: 250
  },
  selected: {
    backgroundColor: "lightgray",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "white",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    position: "absolute",
    flexDirection: "row",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
    color: "white",
    marginTop: 300,
    marginLeft: 10
  },
  ArtistImage:{
    position: "absolute",
    flex: 1,
    height: 130,
    width: 130,
    top: -220,
    left: 130,
    borderRadius: 300   
  },
  ArtistName:{
    position: "absolute",
    marginTop: -80,
    marginLeft: 150,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 20,
    display: "flex",
    textAlign: "center",
    color: "white"
  }, 
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%", 
},
rectangle1:{
  position: "absolute",
  marginTop: 60,
  marginLeft: 10,
  height: 120,
  width: 370,
  borderRadius: 15,
  backgroundColor: 'gray',
  opacity: 0.5
},
rectangle2:{
  position: "absolute",
  marginTop: 200,
  marginLeft: 10,
  height: 120,
  width: 370,
  borderRadius: 15,
  backgroundColor: 'gray',
  opacity: 0.5
},
rectangle3:{
  position: "absolute",
  marginTop: 340,
  marginLeft: 10,
  height: 120,
  width: 370,
  borderRadius: 15,
  backgroundColor: 'gray',
  opacity: 0.5
},
rectangle4:{
  position: "absolute",
  marginTop: 480,
  marginLeft: 10,
  height: 120,
  width: 370,
  borderRadius: 15,
  backgroundColor: 'gray',
  opacity: 0.5
},
album1:{
  position: "absolute",
  marginTop: 70,
  marginLeft: 25,
  borderRadius: 10,
  height: 100,
  width: 100,
},
album2:{
  position: "absolute",
  marginTop: 210,
  marginLeft: 25,
  borderRadius: 10,
  height: 100,
  width: 100,
},
album3:{
  position: "absolute",
  marginTop: 350,
  marginLeft: 25,
  borderRadius: 10,
  height: 100,
  width: 100,
},
album4:{
  position: "absolute",
  marginTop: 490,
  marginLeft: 25,
  borderRadius: 10,
  height: 100,
  width: 100,
},
album1title:{
  position: "absolute",
  marginTop: 80,
  marginLeft: 150,
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: 12,
  lineHeight: 15,
  display: "flex",
  textAlign: "center",
  color: "white"
},
album11title:{
  position: "absolute",
  marginTop: 100,
  marginLeft: 150,
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: 12,
  lineHeight: 15,
  display: "flex",
  color: "white",
  textAlign: "center"
},
album2title:{
  position: "absolute",
  marginTop: 220,
  marginLeft: 150,
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: 12,
  lineHeight: 15,
  display: "flex",
  color: "white",
  textAlign: "center"
},
album22title:{
  position: "absolute",
  marginTop: 240,
  marginLeft: 150,
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: 12,
  lineHeight: 15,
  display: "flex",
  color: "white",
  textAlign: "center"
},
album3title:{
  position: "absolute",
  marginTop: 360,
  marginLeft: 150,
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: 12,
  lineHeight: 15,
  display: "flex",
  color: "white",
  textAlign: "center"
},
album4title:{
  position: "absolute",
  marginTop: 500,
  marginLeft: 150,
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: 12,
  lineHeight: 15,
  display: "flex",
  color: "white",
  textAlign: "center"
},
songInfo1:{
  position: "absolute",
  marginTop: 115,
  marginLeft: 150,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: 10,
  lineHeight: 15,
  display: "flex",
  color: "#C3BBBB",
  textAlign: "center"
},
songInfo11:{
  position: "absolute",
  marginTop: 130,
  marginLeft: 150,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: 10,
  lineHeight: 15,
  display: "flex",
  color: "#C3BBBB",
  textAlign: "center"
},
songInfo2:{
  position: "absolute",
  marginTop: 255,
  marginLeft: 150,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: 10,
  lineHeight: 15,
  display: "flex",
  color: "#C3BBBB",
  textAlign: "center"
},
songInfo22:{
  position: "absolute",
  marginTop: 270,
  marginLeft: 150,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: 10,
  lineHeight: 15,
  display: "flex",
  color: "#C3BBBB",
  textAlign: "center"
},
songInfo3:{
  position: "absolute",
  marginTop: 395,
  marginLeft: 150,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: 10,
  lineHeight: 15,
  display: "flex",
  color: "#C3BBBB",
  textAlign: "center"
},
songInfo33:{
  position: "absolute",
  marginTop: 410,
  marginLeft: 150,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: 10,
  lineHeight: 15,
  display: "flex",
  color: "#C3BBBB",
  textAlign: "center"
},
songInfo4:{
  position: "absolute",
  marginTop: 535,
  marginLeft: 150,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: 10,
  lineHeight: 15,
  display: "flex",
  color: "#C3BBBB",
  textAlign: "center"
},
songInfo44:{
  position: "absolute",
  marginTop: 550,
  marginLeft: 150,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: 10,
  lineHeight: 15,
  display: "flex",
  color: "#C3BBBB",
  textAlign: "center"
}


});

export default App;
  

    
   

    
