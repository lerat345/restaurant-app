import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, } from 'react-native';
import Constants from 'expo-constants';


// You can import from local file

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Cart({ navigation, route }) {
  const nextpage = () => {
    navigation.navigate('Order')
  }

  return (
    <View style={styles.container}>


      <TouchableOpacity style={styles.heart}>

        <Image style={styles.hearts} />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
      </View>

      <Image style={styles.pic} source={route.params.image} />
      <Text style={styles.paragraph}>
        {route.params.title}
      </Text>
      <View style={styles.btnContainer}>

      </View>
      <Text style={styles.par} source={route.params.paragraph}>pasta is a good source of energy and fibre and is made from grain</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.carttxt} onPress={() => navigation.navigate('Order', { title: "", image: '' })} >Add to Cart</Text>
        <View>
          <Text style={styles.par2}>Total price</Text>
          <Text style={styles.par3}>$12.00</Text>
        </View>

        <TouchableOpacity style={styles.mnsbtn}>
          <Text style={styles.Text}>+</Text>
        </TouchableOpacity>
      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,


    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffff',
    padding: 8,
  },
  btnContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',


  },

  mainPic: {
    width: '40%',
    height: 98,
    alignSelf: 'center',
    marginTop: '-5%',
    marginLeft: '-60%',

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

  paragraph: {
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

  Text: {
    fontSize: 23,
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#000000',
    marginTop: -9,

  },
  Texts: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#A9A9A9',
    marginTop: -60,

  },

  popularbtns: {
    marginLeft: 140,
    marginTop: -70,

  },
  popularbtns1: {
    marginLeft: '6%',
    marginTop: -210,

  },
  popularbtns2: {
    marginLeft: '44%',
    marginTop: -280,

  },
  popularbtns3: {
    marginLeft: '6%',
    marginTop: -150,
  },

  popularbutton: {
    margin: 5,
    width: '33%',
    height: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    justifyContent: 'center',
    marginLeft: '67%',
    marginTop: -67,
  },
  minusbtn: {
    margin: 60,
    width: '13%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    marginLeft: 200,
    marginTop: -68,
    marginLeft: 210,


  },
  plusbtn: {
    margin: 60,
    width: '13%',
    height: 40,
    backgroundColor: '#B9869E',
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: -97,
    marginLeft: 280,

  },
  popular: {
    width: '90%',
    height: 130,
    backgroundColor: '#B9869E',
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: 330,
    marginLeft: 40,
  },
  popularTxt: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#A9A9A9',
    marginTop: -60,
    marginLeft: -200,
    fontSize: 20,

  },
  Txt: {
    marginBottom: 2,
    marginLeft: 20,
    fontSize: 20,
    color: '#A9A9A9',

  },
  discountnumber: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#A9A9A9',
    marginTop: -50,
    marginLeft: 130,
    margin: 4,
    fontSize: 19,
  },
  totalnumber: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#A9A9A9',
    marginLeft: 130,
    marginBottom: -20,
    margin: 7,
    fontSize: 19,
  },
  cartbutton: {
    margin: 100,
    width: '40%',
    height: 40,
    backgroundColor: '#A9A9A9',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 50,
  },
  pic: {
    width: '96%',
    height: 170,
    alignSelf: 'center',
    marginTop: '18%',
    marginBottom: '-9%',
    marginLeft: '-3%'

  },
  minusbtns: {
    margin: 60,
    width: '13%',
    height: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    justifyContent: 'center',
    marginLeft: 200,
    marginTop: -140,
    marginLeft: 100,
  },
  plusbtns: {
    margin: 60,
    width: '13%',
    height: 40,
    backgroundColor: '#B9869E',
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: -99,
    marginLeft: 187,
  },
  par: {

  },
  button: {
    marginTop: 20,
    marginLeft: 180,
    margin: 60,
    width: '45%',
    height: 50,
    backgroundColor: '#B9869E',
    borderRadius: 50,

  },
  carttxt: {
    marginLeft: 10,
    marginTop: 15,
    color: '#fff',
  },
  mnsbtn: {
    width: '13%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: -105,
    marginLeft: 272,
  },

  heart: {
    margin: 5,
    width: '20%',
    height: 40,
    backgroundColor: '#B9869E',
    borderRadius: 20,
    justifyContent: 'center',
    marginLeft: 240,
    marginTop: -83,
  },
  par2: {
    fontSize: 15,
    fontWeight: '600',
    margin: 10,
    color: '#000',
    marginTop: -30,
    marginLeft: -190,
  },
  par3: {
    fontSize: 15,
    fontWeight: '600',
    margin: 10,
    color: '#000',
    marginTop: -2,
    marginLeft: -190,
  },



});

