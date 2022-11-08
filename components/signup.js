import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text } from 'react-native';
 import{Image} from 'react-native';


export default function Signup ({navigation}){

const nextpage = () => {
  navigation.navigate('Login')
}


   return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/Borcelle.png")}/>
      
        <TextInput
          
          placeholder={'Username'}
          style={styles.input}
        />
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
   
       
        
        <Button
        onPress={nextpage}
          title={'signup'}
          style={styles.input}
         
        />
      </View>
    );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor:'#B9869E',



    borderColor: 'black',
    marginBottom: 10,

     logo:{
   marginBottom:-90,
   

  }
  },
});
