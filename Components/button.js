import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
//let backgroundColor='#ffffff'
 function getColor() {
    return selectedColor;
 }

export default function Cell(props) {

    const { initalColor, newColor, colorId } = props;
    const [selectedColor, setSelectedColor]= useState(initalColor);
   
    const cellPress= ()=> {
        setSelectedColor(newColor);
      
    }

    function getColor() {
        return selectedColor;
    }
return(
<View>
     
      <Button
        color={ selectedColor }
        onPress= {cellPress}
        
      />
    </View>
     
);
}


