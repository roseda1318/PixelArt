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
<View  styles= {styles.cells}>
     <Button
        title= '     '
       color={ selectedColor }
        onPress= {cellPress}    
    >
    
    </Button>
    </View>
     
);

}const styles = StyleSheet.create({

    cells: {
      height: 1000,
      width: 1000,
      aspectRatio: 1 
    }
})




