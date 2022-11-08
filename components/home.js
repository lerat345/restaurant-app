import * as React from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';


// You can import from local file

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

  export default function Home({navigation}) {
const nextpage = () => {
  navigation.navigate('Start')
}
    
  return (
    <View style={styles.container}>  
      <Text style={styles.paragraph}> 
      DELICIOUS SEAFOOD
   
      </Text>

        <View style={styles.buttonContainer}>
<TouchableOpacity style={styles.popularbtn}>
<Text style={styles.popularText}>POPULAR</Text>
</TouchableOpacity>

  
<TouchableOpacity style={styles.popularbtn}>
<Text style={styles.popularText}>Spaghetti</Text>
</TouchableOpacity>

 
<TouchableOpacity style={styles.popularbtn}>
<Text style={styles.popularText}>Lasagne</Text>
</TouchableOpacity>

  
<TouchableOpacity style={styles.popularbtn}>
<Text style={styles.popularText}>Pizza</Text>
</TouchableOpacity>


      </View>

 <View style={styles.buttonContainer}>
      <View style={styles.item}>
<Image style={styles.main} source={require("../assets/pasta.png")}/>
<Text style={styles.popularText}>Spaghetti Al,Arribiatta</Text>
<Text style={styles.priceText}>$12.00</Text>

      </View>
           <View style={styles.item}>
<Image style={styles.main} source={require("../assets/lasagne.jfif")}/>
<Text style={styles.popularText}>  Membuat Lasagne</Text>
<Text style={styles.priceText}>$12.00</Text>

      </View>
      
    </View>

    <View style={styles.itemBox}>
    <TouchableOpacity style={styles.fav}>
     <Image style={styles.fav} source={require("../assets/Favorite2.png")}/>
    <Image  style={styles.plus} source={require("../assets/Plus Math.png")}/>
        </TouchableOpacity>
        
    <Image style={styles.mainPic} source={require("../assets/pizza.jfif")}/>
    <Text style={styles.popularTexts}>Pizza Diavola</Text>
<Text style={styles.priceTexts}>$12.00</Text>
    </View >
   
<View>

</View >

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
card: {

    marginTop: 3 ,
    marginLeft:2 ,
    width: 70,
    height: 70,
    color: 'white',
    textAlign:'center',
},
favorite:{
marginLeft:-17,
},
item:{
width:'40%',
height:200,
backgroundColor:'#B9869E',
margin:20,
borderRadius:15,
},
fav:{
marginLeft:60,
marginBottom:-20,
},
mainPic:{
width:'40%',
height:98,
alignSelf:'center',
marginTop:'10%',
marginLeft:'70%',
borderRadius:'70%'
},

itemBox:{
width:'80%',
height:170,
backgroundColor:'#A96786',
margin:20,
borderRadius:15,
},

main:{
width:'70%',
height:68,
alignSelf:'center',
marginTop:'18%',
borderRadius:'70%',

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

  popularText:{
fontSize:13,
color:'#fff',
textAlign:'center',
justifyContent:'center',
  },

  priceText:{
color:'#fff',
marginLeft:10,
  },

popularTexts:{
  fontSize:20,
color:'#fff',
textAlign:'center',
justifyContent:'center',
marginLeft:-80,
marginTop:'-20%'


},

priceTexts:{
 color:'#fff',
marginLeft:60,
fontSize:20,
margin:5,


},
popularbtns:{
   margin:5,
width:'150%',
height:48,
backgroundColor:'#B9869E',
borderRadius:20,
justifyContent:'center',
marginBottom:'100%',
marginLeft:1,

}

});

