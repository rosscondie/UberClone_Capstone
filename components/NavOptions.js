import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import CAR from '../assets/uber_taxi.png';
import FOOD from '../assets/uber_food.png';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: CAR,
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: FOOD,
    screen: 'EatsScreen', // Possible extension for the future...
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
              source={item.image}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
