import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const MapScreen = () => {
  return (
    <View>
      <Text>MapScreen</Text>
      <View style={tw`h-1/2`}></View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
