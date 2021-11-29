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
import Cell, {getColor} from '../Components/button';
//this works in the expo 'snack' feature, and on the web version
//does not render properly on my android simulator or expo app
//-- about 20% it will render everything but grid will show 100%
const home = ({ route, navigation }) => {
    var newColor='blue'
    var initalColor='black'
    const [dataSource, setDataSource] = useState([]);
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

    var col = 2;
    useState(() => {
      //sets the number of rows and col to be the same
        let items = Array.apply(null, Array(col*col)).map((v, i) => {
           
            return { id: {},   src: <Cell initalColor={initalColor} newColor={newColor}/>
          
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
                  
             >
                 <Cell initalColor={initalColor} newColor={newColor}  />
                  
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
               
                console.log(dataSource)
                //  navigation.navigate('colorpicker', { drawColor })
                
             }
         />
     </View>
         );
        };
   
    /*
    //sets the number of columns
    //needs to create a user input and format to make it pretty
   
  
    return (
        <View>
     <SafeAreaView style={styles.container}>
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'column', margin: 1 }}
                //I am sure this is an operator error-- onpress not registering
                //How do I re-render without losing everything?
                onPress={() =>color = '#cc8899'}
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


*/
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