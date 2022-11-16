import React, { Component, useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text,Image,TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export default function Login ({navigation}){
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

 const Signin =()=> {

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      alert("Registered succussfully ")
      navigation.navigate('Home')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
 }

const nextpage = () => {
  navigation.navigate('Signup')
}
   
    return (
      <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/Borcelle.png")}/>
      
        <TextInput
         
          placeholder={'Email'}
           secureTextEntry={true}
          style={styles.input}
          onChangeText={(email) =>setEmail ( email)}
        />
        <TextInput
          
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(password) =>setPassword ( password)}
        />
        
       <View  style={styles.btn}>
        <TouchableOpacity>
          <Text  style={styles.loginText}  onPress={Signin}>
          Log In
          </Text>
      </TouchableOpacity>
        </View>


        <TouchableOpacity  onPress={nextpage}>
          <Text  style={styles.loginText} >
         Don't have an account 
          </Text>
      </TouchableOpacity>
      
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
    borderColor: 'black',
    backgroundColor:'#B9869E',
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
