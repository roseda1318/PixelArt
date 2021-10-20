import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity
} from 'react-native'; 

import { Feather } from '@expo/vector-icons';
import { ColorPicker } from 'react-native-color-picker';

const colorpicker = ({ route, navigation }) => {
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Home')}>
                <Text> Cancel </Text>

                <Feather style={{ marginRight: 10 }} name='home' size={24} />
            </TouchableOpacity>
        ), headerLeft: () => (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Home')}>
                <Text> Save </Text>

                <Feather style={{ marginRight: 10 }} name='save' size={24} />
            </TouchableOpacity>
        ),
    });
    return (
        <View>
            <ColorPicker
                onColorSelected={color => alert(`Color selected: ${color}`)}
                style={styles.colorpicker}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    colorpicker: {
        width: 350,
        height: 600,
        alignSelf: 'center' 
    }
});

export default colorpicker;