import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Cell, { getColor } from '../Components/button';
//this works in the expo 'snack' feature, and on the web version
//does not render properly on my android simulator or expo app
//-- about 20% it will render everything but grid will show 100%
const home = ({ route, navigation }) => {
  // TODO: These variable names may be confusing, refactor later
  const [newColor, setNewColor] = useState('');
  var drawColor = 'white';
  const [dataSource, setDataSource] = useState([]);
  var col = 8;

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
    <ImageBackground 
        source={"https://cdn.pixabay.com/photo/2013/12/05/20/38/concrete-223838_1280.jpg"}
         resizeMode="cover" style={styles.image}>
    <View>
     
      
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
      </SafeAreaView>
     
      <Button
        title="Color Picker"
        color={ newColor }
        onPress={() => {
          
          navigation.navigate('colorpicker', { newColor })
        }
        }
      />
    </View>
     </ImageBackground>
  );
};


const styles = StyleSheet.create({

  container: {
    /*
      flexDirection: "column", // default
      justifyContent: "flex-start", //default 
      flex: 1,
    */
    // margin: 20,
    flex: 2,
    flexDirection: 'center',
    alignItems: 'flex-start',
    justifyContent: 'center'

  },
  cells: {
   
    aspectRatio: 1,
    flexDirection: "column", // default
    justifyContent: "center", //default 
    flex: 1,
   
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  currentVal: {
    color: '#fff',
    flex: 1,
    textAlign: 'right',
    fontSize: 50,
    marginRight: 10,
    alignSelf: 'center',

  },
  text: {
    color: "#fff",
    fontSize: 35,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default home;