import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';

const NavigateCard = () => {
  const dispatch = useDispatch(); // useDispatch is a hook
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl font-semibold`}>
        Good Morning CodeClan
      </Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={inputBoxStyles} // can't use tailwind because we need to override default styles in component
            fetchDetails={true}
            returnKeyType={'search'}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate('RideOptionsCard');
            }}
            enablePoweredByContainer={false} // this gets rid of the google logo
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={300}
          />
        </View>

        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const inputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 15,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
