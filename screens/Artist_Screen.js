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
         <ImageBackground source={require('../assets/kaliArtist.png')} style={styles.backgroundImage}>

      <View style={styles.label}>

        <TouchableOpacity
        style={styles.button}       
      >
        <Text style = {styles.buttonLabel}>Albums</Text>
      </TouchableOpacity>
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

      <ImageBackground source={require("../assets/kaliArtist.png")} style = {styles.homeButtonImage}/>


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
    textAlign: "center",
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
    flexDirection: "row",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
    color: "white",
    marginTop: 300,
    marginLeft: 50
  },
  ArtistImage:{
  

  },
  
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    
},
});

export default App;
  

    
   

    
