import { StyleSheet, View, SafeAreaView, Image } from 'react-native';
import React, { useRef } from 'react';
import tw from 'twrnc';
import LOGO from '../assets/uber_logo.png';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const setAddressText = (text) => {
    ref.current?.setAddressText(text);
    ref.current?.focus();
  };

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={LOGO}
        />
        <GooglePlacesAutocomplete
          ref={ref}
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={'search'}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={300}
        />

        <NavOptions />
        <NavFavourites setAddressText={setAddressText} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
