import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import tw from 'twrnc';
import LOGO from '../assets/uber_logo.png';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import { getCurrentPositionAsync, LocationAccuracy } from 'expo-location';
import { Icon } from 'react-native-elements';
import * as Location from 'expo-location';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText('');
  }, []);

  const setAddressText = (text) => {
    ref.current?.setAddressText(text);
    ref.current?.focus();
  };

  // const [currentLocation, setCurrentLocation] = useState(null);
  // const getCurrentLocation = async () => {
  //   try {
  //     const { coords } = await getCurrentPositionAsync({
  //       accuracy: LocationAccuracy.High,
  //     });
  //     setCurrentLocation(coords);
  //     const address = await Location.reverseGeocodeAsync(coords);
  //     const location = address[0];
  //     const description = `${location.name}, ${location.street}, ${location.city}, ${location.region}, ${location.country}`;
  //     setAddressText(description);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={LOGO}
        />
        <GooglePlacesAutocomplete
          // renderLeftButton={() => (
          //   <TouchableOpacity
          //     style={tw`bg-gray-100 absolute top-5 right-5 z-50 px-4 py-2 rounded-full shadow-md  `}
          //     onPress={getCurrentLocation}
          //   >
          //     <Icon name="compass" type="ionicon" color="black" />
          //   </TouchableOpacity>
          // )}
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
