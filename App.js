import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text,TouchableOpacity } from 'react-native';
import Start from './components/start';
import Signup from './components/signup';
import Login from './components/login';
import Home from './components/home'
import Order from'./components/order'
import Dessert from './components/dessert'
import Cart from './components/cart'
import Form from './components/form'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

 export default function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator>  
      <Stack.Screen name="Form" component={Form}/>
      <Stack.Screen name="Dessert" component={Dessert}/>  
      <Stack.Screen name="Cart" component={Cart}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="Signup" component={Signup}/>
    
   
      <Stack.Screen name="Order" component={Order}/>

    

      
    

     
              
  
    
          
           
 

                  
      
   

    
      

          
 
  
        <Stack.Screen name="Start" component={Start} />
       
       
      
        
         
      </Stack.Navigator>
    </NavigationContainer>
  );
  
 }