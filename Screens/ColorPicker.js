import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { ColorPicker, TriangleColorPicker, toHsv, fromHsv } from 'react-native-color-picker';
//import { Slider } from '@react-native-community/slider';

const colorpicker = ({ route, navigation }) => {
    /* color passing start */
    const [initColor, setInitColor] = useState('');
    const [newColor, setNewColor] = useState('');

    useEffect(() => {
        if (route.params?.newColor) {
            setInitColor(route.params.newColor);
            setNewColor(route.params.newColor);
        }
        // NOTE: These are handled by color picker or default back button now
        // navigation.setOptions({
        //     headerRight: () => (
        //         <TouchableOpacity
        //             onPress={() =>
        //                 navigation.navigate('Home')}>
        //             <Text> Cancel </Text>

        //             <Feather style={{ marginRight: 10 }} name='home' size={24} />
        //         </TouchableOpacity>
        //     // ), headerLeft: () => (
        //     //     <TouchableOpacity
        //     //         onPress={() =>
        //     //             navigation.navigate('Home', { newColor })}>
        //     //         <Text> Save </Text>

        //     //         <Feather style={{ marginRight: 10 }} name='save' size={24} />
        //     //     </TouchableOpacity>
        //     // ),
        // });
    }, [route.params?.newColor]);

    /* color passing end */

    return (
        <View>
            <TriangleColorPicker
                style={styles.colorpicker}
                //defaultColor={initColor}
                // FIXME: Currently not working with initColor
                oldColor={'white'}
                Pass back to home screen here
                onOldColorSelected={
                    //color => setNewColor(color),
                    //color => alert(`Color selected: ${color}, new color: ${newColor}`),
                    color => navigation.navigate('Home', { color })
                }
                onColorSelected={
                    //color => setNewColor(color),
                    //color => alert(`Color selected: ${color}, new color: ${newColor}`),
                    color => navigation.navigate('Home', { color })
                }
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