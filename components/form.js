import React,{Components,useState} from "react";
import { Alert, Button, TextInput, View, StyleSheet,Text,Image,TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../config/firebase'

export default function Form ({ navigation }) {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobilenumber, setMobilenumber] = useState();
  const [adress, setAdress] = useState();


    const addOrder = async () => {

      try {
        const docRef = await addDoc(collection(db, "Orders"), {
          name:name,
          email:email,
          mobilenumber:mobilenumber,
          adress:adress,

        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      alert("Ordered succussfully ")
    
      }
return (
    <View style={styles.container}> 
    <Text style={styles.heading}>Restaurant contact details</Text>
      
      <TextInput
        
        placeholder={'Name'}
        style={styles.input}
        onChangeText={(username) =>setName ( username)}
      />
      <TextInput
       
       
        placeholder={'Email'}
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(email) =>setEmail ( email)}
       
      />

     <TextInput
       
       
       placeholder={'Mobile number'}
       secureTextEntry={true}
       style={styles.input}
       onChangeText={(mobilenumber) =>setMobilenumber( mobilenumber)}
     />
     
<TextInput
       
       placeholder={'Adress'}
       secureTextEntry={true}
       style={styles.input}
       onChangeText={(adress) =>setAdress (adress)}
     />
        <View style={styles.confirmbtn}>
        <TouchableOpacity onPress={addOrder} >
          <Text  style={styles.confirm}  >
        Order now
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
  backgroundColor: '#fff',
},
input: {
  width: 300,
  height: 44,
  padding: 10,
  borderWidth: 1,
  borderRadius: 50,
  marginLeft:-70,
  backgroundColor:'#B9869E',
  borderColor: 'black',
  marginBottom: 10,

   logo:{
 marginBottom:-90,
   }

},
heading:{
fontSize: 20,
fontWeight:'600',
margin: 80,
marginLeft:-50,
color: '#000',
},
confirmbtn:{
width:140,
height:50,
backgroundColor:'#B9869E',
justifyContent:'center',
marginLeft:'-20%',
marginTop:50,
borderRadius:27,
},
confirm:{
    fontSize:15,
    marginLeft:40,
}
});
