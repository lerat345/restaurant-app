import * as React from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';


// You can import from local file

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

  export default function Order({navigation}) {
const nextpage = () => {
  navigation.navigate('Home')
}
    
  return (
    <View style={styles.container}>  
         <TouchableOpacity style={styles.popularbtn}>
<Text style={styles.Text}> > </Text>
</TouchableOpacity>
      <Text style={styles.paragraph}> 
 
      DELICIOUS SEAFOOD
   
      </Text>

        <View style={styles.buttonContainer}>



      </View>


<Image style={styles.main} source={require("../assets/ukko.jpg")}/>
    <View style={styles.buttonContainer}>
<TouchableOpacity style={styles.popularbutton}>
<Text style={styles.Text}>02</Text>
</TouchableOpacity>
 </View>  

 <TouchableOpacity style={styles.minusbtn}>
<Text style={styles.Text}>-</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.plusbtn}>
<Text style={styles.Text}>+</Text>
</TouchableOpacity>

<Image style={styles.mains} source={require("../assets/ukko.jpg")}/>
<View style={styles.buttonContainer}>
<TouchableOpacity style={styles.popularbutton}>
<Text style={styles.Text}>02</Text>
</TouchableOpacity>
 </View>  

 <TouchableOpacity style={styles.minusbtn}>
<Text style={styles.Text}>-</Text>
</TouchableOpacity>



<TouchableOpacity style={styles.plusbtn}>
<Text style={styles.Text}>+</Text>
</TouchableOpacity>

<Image style={styles.mainPic} source={require("../assets/ukko.jpg")}/>
<View style={styles.buttonContainer}>
<TouchableOpacity style={styles.popularbutton}>
<Text style={styles.Text}>02</Text>
</TouchableOpacity>
 </View>  

 <TouchableOpacity style={styles.minusbtn}>
<Text style={styles.Text}>-</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.plusbtn}>
<Text style={styles.Text}>+</Text>
</TouchableOpacity>

<Image style={styles.mainPic} source={require("../assets/ukko.jpg")}/>
<View style={styles.buttonContainer}>
<TouchableOpacity style={styles.popularbutton}>
<Text style={styles.Text}>02</Text>
</TouchableOpacity>
 </View>  
 <TouchableOpacity style={styles.minusbtn}>
<Text style={styles.Text}>-</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.plusbtn}>
<Text style={styles.Text}>+</Text>
</TouchableOpacity>
    
 
     <View style={styles.buttonContainer}>
<TouchableOpacity style={styles.popularbtns}>
<Text style={styles.Texts}>Burger and Chips</Text>
</TouchableOpacity>

</View>
<TouchableOpacity style={styles.popularbtns1}>
<Text style={styles.Texts}>Burger and Chips</Text>
</TouchableOpacity>

 <View style={styles.buttonContainer}>
<TouchableOpacity style={styles.popularbtns2}>
<Text style={styles.Texts}>Burger and Chips</Text>
</TouchableOpacity>

</View>
<TouchableOpacity style={styles.popularbtns3}>
<Text style={styles.Texts}>Burger and Chips</Text>
</TouchableOpacity>
</View>


    



  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  buttonContainer:{
    justifyContent:'space-between',
    flexDirection:'row',
    
  },



mainPic:{
width:'40%',
height:98,
alignSelf:'center',
marginTop:'10%',
marginLeft:'-60%',

},


main:{
width:'40%',
height:98,
alignSelf:'center',
marginTop:'18%',
marginBottom:'-9%',
marginLeft:'-60%'



},
mains:{
  width:'40%',
height:98,
alignSelf:'center',
marginTop:'18%',
marginLeft:'-60%'

},

  paragraph:{
fontSize:15,
fontWeight:'600',
margin:10,
color:'#000',
  },

  popularbtn: {
    margin:5,
width:'20%',
height:40,
backgroundColor:'#B9869E',
borderRadius:20,
justifyContent:'center',

  },

  Text:{
fontSize:23,
color:'#fff',
textAlign:'center',
justifyContent:'center',
color:'#000000',
marginTop:-9,

  },
Texts:{
  fontSize:12,
color:'#fff',
textAlign:'center',
justifyContent:'center',
color:'#A9A9A9',
marginTop:-60,

},

popularbtns:{
  marginLeft:140,
marginTop:-70,

},
popularbtns1:{
  marginLeft:'6%',
marginTop:-210,

},
popularbtns2:{
  marginLeft:'44%',
marginTop:-280,

},
popularbtns3:{
  marginLeft:'6%',
marginTop:-150,
},

popularbutton:{
    margin:5,
width:'33%',
height:40,
backgroundColor:'#D9D9D9',
borderRadius:20,
justifyContent:'center',
marginLeft:'67%',
marginTop:-67,
},
minusbtn:{
   margin:60,
width:'13%',
height:40,
backgroundColor:'#fff',
borderRadius:15,
justifyContent:'center',
marginLeft:200,
marginTop:-68,
marginLeft:210,


},
plusbtn:{
   margin:60,
width:'13%',
height:40,
backgroundColor:'#B9869E',
borderRadius:15,
justifyContent:'center',
marginTop:-97,
marginLeft:280,

}
});
