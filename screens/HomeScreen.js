import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import LOGO from '../assets/uber_logo.png';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={LOGO}
        />
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={300}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
