import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native';
import UberEats from '../assets/uber_eats.png';

const EatsScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={tw` flex-row  justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex flex-row justify-between bg-black w-24 px-5 py-4 rounded-full`}
        >
          <Text style={tw`text-white text-center font-semibold`}>Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
        >
          <Text style={tw`text-center`}>Pickup</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.input}></TextInput>
      <View>
        <Image
          style={{
            height: 350,
            width: 450,
            resizeMode: 'contain',
          }}
          source={UberEats}
        />
      </View>
    </SafeAreaView>
  );
};

export default EatsScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderRadius: 40,
    padding: 10,
    backgroundColor: 'lightgray',
    fontSize: 25,
  },
});
