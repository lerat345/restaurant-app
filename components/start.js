import * as React from 'react';
import { Text, View, StyleSheet,Image, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Start() {

  const nextpage = () => {
  navigation.navigate('Signup')
}

  return (
    <View style={styles.container}>
    
    <View style={styles.imgContainer}>
       <Image style={styles.logo} source={require("../assets/Borcelle.png")}/>

        <Image style={styles.main} source={require("../assets/ukko.jpg")}/>
<Text style={styles.paragraph}>What Special meal today? </Text>

<Button  onPress={nextpage} type="submit" class="btn btn-primary">Sign UP</Button>

<Text style={styles.getStarted}>Get Started </Text>

    
    </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#A96786',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    marginTop:50,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
     color:'#A9A9A9',  

  },

  getStarted:{
fontSize:24,
fontWeight:'600',
textAlign:'center',
marginTop:60,
color:'#A9A9A9',

  },

  imgContainer:{
marginBottom:'auto',
  },

  logo: {
    marginTop:40,
    height: 128,
    width: 128,
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:'20%',
    

},

main:{
width:'80%',
height:200,
alignSelf:'center',
marginTop:'30%',
borderRadius:'20%',

},




});