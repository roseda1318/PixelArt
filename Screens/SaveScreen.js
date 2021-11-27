import React, { useState, useEffect } from "react";


import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';

import { Feather } from '@expo/vector-icons';


const save = ({ route, navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Home')}>
        <Text> Home </Text>

        <Feather style={{ marginRight: 10 }} name='home' size={24} />
      </TouchableOpacity>
    ), headerLeft: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Save')}>
        <Text> Save </Text>

        <Feather style={{ marginRight: 10 }} name='save' size={24} />
      </TouchableOpacity>
    ),
  });
  return (
    <View>
      <Text>Save Screen</Text>
    </View>
  )
};


const styles = StyleSheet.create({});

export default save;

