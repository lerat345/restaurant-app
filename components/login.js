import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text,Image,TouchableOpacity } from 'react-native';


export default function Login ({navigation}){
  

const nextpage = () => {
  navigation.navigate('Home')
}

    
    return (
      <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/Borcelle.png")}/>
      
        <TextInput
         
          placeholder={'Email'}
           secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
    
       <View  style={styles.btn}>
        <TouchableOpacity>
          <Text  style={styles.loginText}  onPress={nextpage}>
          Log In
          </Text>
      </TouchableOpacity>
        </View>
      
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'black',
    marginBottom: 10,
  },
  btn:{
   width:140,
height:45,
backgroundColor:'#B9869E',
justifyContent:'center',
marginLeft:'10%',
marginTop:50,
borderRadius:27,
  },
  loginText:{
    

  },
});
