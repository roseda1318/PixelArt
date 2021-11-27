import React, { useState, useEffect} from "react";

import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    Image
} from 'react-native';
import { Feather } from '@expo/vector-icons';

//this works in the expo 'snack' feature, and on the web version
//does not render properly on my android simulator or expo app
//-- about 20% it will render everything but grid will show 100%
const home = ({ route, navigation }) => {
    /* color passing start */
    useEffect(() => {
        if (route.params?.newColor) { setColor(route.params.newColor); }
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Home')}>
                    <Text> Login </Text>

                    <Feather style={{ marginRight: 10 }} name='log-in' size={24} />
                </TouchableOpacity>

            ), headerLeft: () => (
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('SaveScreen')}>
                    <Text> Save </Text>

                    <Feather style={{ marginRight: 10 }} name='save' size={24} />
                </TouchableOpacity>
            ),
        });
    }, [route.params?.newColor]);
    /* color passing end */

    
    const [dataSource, setDataSource] = useState([]);
    //this takes the draw color and makes the format readable for link
    var drawColor='#000fff'
    var color=drawColor.substring(1)

    //sets the number of columns
    var col = 5;
    useState(() => {
      //sets the number of rows and col to be the same
        let items = Array.apply(null, Array(col*col)).map((v, i) => {
            //cusomizable image square setting the text color and background to same color
            return { id: i,   src: `https://via.placeholder.com/150/${color}/${color}?Text=Down.com`,
          
          };
      });
      setDataSource(items);
    }, []);
  
    return (
        <View>
     <SafeAreaView style={styles.container}>
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'column', margin: 1 }}
                //I am sure this is an operator error-- onpress not registering
                onPress={() =>color = '000fff'}
          >
              <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
               
            </TouchableOpacity>
            
          )}
          //Setting the number of column
          numColumns={col}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
     
      <Button
          title="Color Picker"
          onPress={() =>
              navigation.navigate('colorpicker', { drawColor })
          }
      />
  </View>
    );
  };


const button = {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 1,
    borderWidth: 1,
    flex: 1
};

const styles = StyleSheet.create({
    
    container: {
        flexDirection: "column", // default
        justifyContent: "flex-start", //default 
        flex: 1,
        margin: 20,
    
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
});

export default home;