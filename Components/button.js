import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';


export default function Cell(props) {
    const { initalColor, newColor } = props;
    const [selectedColor, setSelectedColor, ]= useState(initalColor);
    const cellPress= ()=> {
        setSelectedColor(newColor);
   }
return(
<View  styles= {styles.cells}>
     <Button
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




