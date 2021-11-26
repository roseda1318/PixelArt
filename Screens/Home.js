import React, { useState, useEffect } from "react";

import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';

import { Feather } from '@expo/vector-icons';
// var color = 'FF9225';
const [color, setColor] = useState('#FF9225');

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

    //do an onPress to pass the color code in for each  row/col? Use state variables for colors in containers
    return (

        <SafeAreaView style={styles.container}>
            <Text> ${color} </Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
            </View>


            <View style={styles.row}>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.R1_}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Button
                    title="Color Picker"
                    onPress={() =>
                        navigation.navigate('colorpicker')
                    }
                />
            </View>
        </SafeAreaView>

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
        backgroundColor: "#FFFFFF"
    },
    row: {
        flexDirection: 'row',
        //flex: 1,
        //marginBottom: 1, 
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
        backgroundColor: "#FF0000",
    },
    R2_: {
        ...button,
        backgroundColor: "#FF0000",
    },
    text: {
        color: "#fff",
        fontSize: 35,
    },
});

export default home;