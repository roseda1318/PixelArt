import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';

//let backgroundColor='#ffffff'
 function getColor() {
    return selectedColor;
 }
export default function Cell(props) {
    const { initalColor, newColor } = props;
    const [selectedColor, setSelectedColor, ]= useState(initalColor);
    const cellPress= ()=> {
        setSelectedColor(newColor);
   }
return(
<View
    style={{
        width:50,
        height:50,
    }}>
     <Button
        color={ selectedColor }
        onPress= {cellPress}    
    >
  
    </Button>
    </View>
     
);

}



