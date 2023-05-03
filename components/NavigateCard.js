import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl font-semibold`}>
        Good Morning CodeClan
      </Text>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
