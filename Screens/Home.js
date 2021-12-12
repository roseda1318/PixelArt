import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  Image
} from 'react-native';

import Cell from '../Components/button';

const home = ({ route, navigation }) => {
  // TODO: These variable names may be confusing, refactor later
  const [newColor, setNewColor] = useState('');
  var drawColor = '#ffffff';
  const [dataSource, setDataSource] = useState([]);
  var col = 30;

  /* color passing start */
  useEffect(() => {
    if (route.params?.newColor) { setNewColor(route.params.newColor); }
    else if (route.params?.color) {
      setNewColor(route.params.color);
      console.log(`${newColor}`)
    }

    

    let items = Array.apply(null, Array(col * col)).map((v, i) => {

      return {
        id: {}, src: <Cell initalColor={drawColor} newColor={newColor} />

      };
    });
    setDataSource(items);

  }, [route.params?.newColor, route.params?.color]);
  
  return (
    
    
    <View>
      <Image source={require('../Components/pixelArt.jpg')} 
        style= {{width: "30%", height: "30%" }}
        resizeMode="contain"
        ImageBackground= "#000000"/>
        
      <ImageBackground 
        source={require('../Components/background.jpg')}
        //image source: https://cdn.pixabay.com/photo/2013/12/05/20/38/concrete-223838_1280.jpg
          style={styles.image}>
     
    
      <SafeAreaView style={styles.container}>
      

        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <View  style={styles.cells}
              onPress={() =>drawColor = '#cc8899'}
            >
              <Cell initalColor={drawColor} newColor={newColor} />
              {/* <Image style={styles.imageThumbnail} source={{ uri: item.src }} /> */}

            </View>

          )}
          //Setting the number of column
          numColumns={col}
          keyExtractor={(item, index) => index}
        />
        <Button
        title="Color Picker"
        color={ newColor }
        onPress={() => {
          
          navigation.navigate('colorpicker', { newColor })
        }
        }
      />
      </SafeAreaView>
     
      
      </ImageBackground>
    </View>
   
  );
};


const styles = StyleSheet.create({

  container: {
    /*
      flexDirection: "column", // default
      justifyContent: "flex-start", //default 
      flex: 1,
    */
     margin: 20,
    flex: 1,
    flexDirection: 'center',
    alignItems: 'center',
    justifyContent: 'center'

  },
  cells: {
   
    aspectRatio: 1,
    flexDirection: "column", // default
    justifyContent: "center", //default 
 
   
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
   text: {
    color: "#fff",
    fontSize: 35,
  },
 
});

export default home;