import React, { useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text } from 'react-native';
 import{Image} from 'react-native';
import  {auth} from '../config/firebase'
 import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function Signup ({navigation}){

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const Register =()=>{

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        alert("Registered succussfully ")  
        navigation.navigate('Cart')

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    

  }
const nextpage = () => {
  navigation.navigate('Cart')
  
}


   return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/Borcelle.png")}/>
      
        <TextInput
          
          placeholder={'Username'}
          style={styles.input}
          onChangeText={(username) =>setUsername ( username)}
        />
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
   
       
        
        <Button
        onPress={Register}
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
