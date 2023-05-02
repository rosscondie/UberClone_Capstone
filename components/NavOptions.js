import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import CAR from '../assets/uber_taxi.webp';
import FOOD from '../assets/uber_food.jpeg';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: { CAR },
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: { FOOD },
    screen: 'EatsScreen', // Change in future...
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
