import * as React from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';


// You can import from local file

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

  export default function Dessert({navigation}) {
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


<Image style={styles.main} source={require("../assets/dessert.jfif")}/>
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

<Image style={styles.mains} source={require("../assets/dessert2.jfif")}/>
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

<Image style={styles.mainPic} source={require("../assets/dessert3.jfif")}/>
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

<Image style={styles.mainPic} source={require("../assets/dessert4.webp")}/>
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

  <View style={styles.buttonContainer}>
<TouchableOpacity style={styles.popular}>
<Text style={styles.popularTxt}>Discount</Text>
<Text style={styles.Txt}>Total</Text>
<Text style={styles.discountnumber}>$10.00</Text>
<Text style={styles.totalnumber}>$390.00</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.confirmbtn}>
<Text style={styles.Text}> > </Text>
</TouchableOpacity>
    
</View >

</View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
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
marginTop:'-5%',
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
marginTop:'10%',
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
backgroundColor:'#F5F5F5',
borderRadius:15,
justifyContent:'center',
marginLeft:200,
marginTop:-68,
marginLeft:203,


},
plusbtn:{
   margin:60,
width:'13%',
height:40,
backgroundColor:'#B9869E',
borderRadius:15,
justifyContent:'center',
marginTop:-99,
marginLeft:270,

},
popular:{
  width:'90%',
height:130,
backgroundColor:'#B9869E',
borderRadius:15,
justifyContent:'center',
marginTop:330,
marginLeft:40,
},
popularTxt:{
  textAlign:'center',
justifyContent:'center',
color:'#A9A9A9',
marginTop:-60,
marginLeft:-200,
  fontSize:20,

},
Txt:{
  marginBottom:2,
  marginLeft:20,
  fontSize:20,
  color:'#A9A9A9',
  
},
discountnumber:{
  textAlign:'center',
justifyContent:'center',
color:'#A9A9A9',
marginTop:-50,
marginLeft:130,
margin:4,
fontSize:19,
},
totalnumber:{
   textAlign:'center',
justifyContent:'center',
color:'#A9A9A9',
marginLeft:130,
marginBottom:-20,
margin:7,
fontSize:19,
},
confirmbtn:{
     margin:60,
width:'30%',
height:40,
backgroundColor:'#fff',
borderRadius:15,
justifyContent:'center',
marginTop:413,
marginLeft:-170,
}
});
