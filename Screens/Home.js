import React, {useState,useEffect } from "react";

import { 
    StyleSheet, 
    View,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';

import { Feather } from '@expo/vector-icons';


const home = ({route, navigation}) => {
      navigation.setOptions({
      headerRight:()=>(
          <TouchableOpacity
          onPress={()=>
            navigation.navigate('Home')}>
               <Text> Login </Text> 
          
            <Feather style={{marginRight: 10}} name='log-in' size={24}/>
          </TouchableOpacity>

        ),headerLeft:()=>(
          <TouchableOpacity
          onPress={()=>
            navigation.navigate('SaveScreen')}>
               <Text> Save </Text> 
          
            <Feather style={{marginRight: 10}} name='save' size={24}/>
          </TouchableOpacity>
        ),
         }); 
    return (
                       
            <View>
                <Text>Home Screen</Text>
            </View>
     
        
          )
    } ;   
    
    
    const styles = StyleSheet.create({});
    
    export default home;
    
  