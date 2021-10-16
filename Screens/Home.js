import React, {useState,useEffect } from "react";

import { 
    StyleSheet, 
    View,
    Text,
    Button,
    TouchableOpacity, 
    SafeAreaView
} from 'react-native';

import { Feather } from '@expo/vector-icons';
var colorOne = 'FF9225';

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
        //do an onPress to pass the color code in for each  row/col? Use state variables for colors in containers
    return (

      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.R1_}>
            <Text style={styles.text}>R1.1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.R1_}>
            <Text style={styles.text}>R1.2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.R1_}>
            <Text style={styles.text}>R1.3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.R1_}>
            <Text style={styles.text}>R1.4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.R1_}>
            <Text style={styles.text}>R1.5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.R1_}>
            <Text style={styles.text}>R1.6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.R1_}>
            <Text style={styles.text}>R1.7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.R1_}>
            <Text style={styles.text}>R1.8</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.row}>
          <TouchableOpacity style={styles.R2_}>
            <Text style={styles.text}>R2.1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.R2_}>
            <Text style={styles.text}>R2.2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.R2_}>
            <Text style={styles.text}>R2.3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.R2_}>
            <Text style={styles.text}>R2.4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.R2_}>
            <Text style={styles.text}>R2.5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.R2_}>
            <Text style={styles.text}>R2.6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.R2_}>
            <Text style={styles.text}>R2.7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.R2_}>
            <Text style={styles.text}>R2.8</Text>
          </TouchableOpacity>
      </View>
   
    </SafeAreaView>
  );
};

    
const button = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 1,
  borderWidth: 1
};

const styles = StyleSheet.create({
container: {
    flexDirection: "column", // default
    justifyContent: "flex-start", //default 
    flex: 1,
    backgroundColor: colorOne

},
row: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 1,
},
currentVal: {
    color: '#fff',
    flex: 1, 
    textAlign: 'right',
    fontSize: 50,
    marginRight: 10,
    alignSelf: 'center',
    
},

R1_: {
  ...button,
  backgroundColor: "#FF9225",
},
R2_: {
  ...button,
  backgroundColor: "#FF9225",
},
text: {
  color: "#fff",
  fontSize: 35,
},
});

    export default home;
    
  