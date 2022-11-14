import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';


// You can import from local file

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Home({ navigation }) {


  const nextpage = () => {
    navigation.navigate('Cart')
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

        <TouchableOpacity onPress={() => navigation.navigate('Cart', { title: "Spaghetti Al,Arribiatta", image: require('../assets/pasta.png') })} style={styles.item}>

          <Image style={styles.pasta} source={require("../assets/pasta.png")} />
          <Text style={styles.popularText}>Spaghetti Al,Arribiatta</Text>
          <Text style={styles.priceText}>$12.00</Text>

        </TouchableOpacity >
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Cart', { title: " Membuat Lasagne", image: require('../assets/lasagne.jfif') })}>
          <Image style={styles.lasagne} source={require("../assets/lasagne.jfif")} />
          <Text style={styles.popularText}> Membuat Lasagne</Text>
          <Text style={styles.priceText}>$12.00</Text>
        </TouchableOpacity>

      </View>
      


      <View style={styles.buttonContainer} >
      <TouchableOpacity  onPress={() => navigation.navigate('Cart', { title: "../assets/dessert.jfif", image: require('../assets/dessert.jfif') })} style={styles.item}>

<Image style={styles.pasta} source={require("../assets/dessert.jfif")} />
<Text style={styles.popularText}>banana caramel cream</Text>
<Text style={styles.priceText}>$12.00</Text>

</TouchableOpacity>
<TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Cart', { title: " dessert2.jfif", image: require('../assets/dessert2.jfif') })}>
<Image style={styles.lasagne} source={require("../assets/dessert2.jfif")} />
<Text style={styles.popularText}>chocolate churros</Text>
<Text style={styles.priceText}>$12.00</Text>
</TouchableOpacity>

      </View>

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
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  card: {

    marginTop: 3,
    marginLeft: 2,
    width: 70,
    height: 70,
    color: 'white',
    textAlign: 'center',
  },
  favorite: {
    marginLeft: -17,
  },

  item: {
    width: '40%',
    height: 200,
    backgroundColor: '#B9869E',
    margin: 20,
    borderRadius: 15,
  },
  fav: {
    marginLeft: 60,
    marginBottom: -20,
  },


  mainPic: {
    width: '40%',
    height: 98,
    alignSelf: 'center',
    marginTop: '10%',
    marginLeft: '70%',
    borderRadius: '70%'
  },

  itemBox: {
    width: '80%',
    height: 170,
    backgroundColor: '#A96786',
    margin: 20,
    borderRadius: 15,
  },

  pasta: {
    width: '70%',
    height: 68,
    alignSelf: 'center',
    marginTop: '18%',
    borderRadius: '70%',

  },
  lasagne: {
    width: '70%',
    height: 68,
    alignSelf: 'center',
    marginTop: '18%',
    borderRadius: '70%',
  },
  paragraph: {
    fontSize: 15,
    fontWeight: '600',
    margin: 10,
    color: '#000',

  },
  Dessert: {
    fontSize: 15,
    fontWeight: '600',
    margin: 10,
    color: '#000',

  },
  popularbtn: {
    margin: 5,
    width: '20%',
    height: 40,
    backgroundColor: '#B9869E',
    borderRadius: 20,
    justifyContent: 'center',

  },

  popularText: {
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
  },

  priceText: {
    color: '#fff',
    marginLeft: 10,
  },

  popularTexts: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: -80,
    marginTop: '-20%'


  },

  priceTexts: {
    color: '#fff',
    marginLeft: 60,
    fontSize: 20,
    margin: 5,


  },

  popularbtns: {
    margin: 5,
    width: '150%',
    height: 48,
    backgroundColor: '#B9869E',
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: '100%',
    marginLeft: 1,

  },
  main: {
    width: '40%',
    height: 98,
    alignSelf: 'center',
    marginTop: '18%',
    marginBottom: '-9%',
    marginLeft: '-60%'


  },
  mains: {
    width: '40%',
    height: 98,
    alignSelf: 'center',
    marginTop: '10%',
    marginLeft: '-60%'

  },
  mainPic: {
    width: '40%',
    height: 98,
    alignSelf: 'center',
    marginTop: '-5%',
    marginLeft: '-60%',

  },
  mainPic: {
    width: '40%',
    height: 98,
    alignSelf: 'center',
    marginTop: '-5%',
    marginLeft: '-60%',

  },
  popularbtns: {
    marginLeft: 140,
    marginTop: -70,

  },
  popularbtns1: {
    marginLeft: '40%',
    marginTop: -220,

  },

  popularbtns2: {
    marginLeft: '40%',
    marginTop: 70,

  },
  popularbtns3: {
    marginLeft: '-60%',
    marginTop: -110,
  },

});

