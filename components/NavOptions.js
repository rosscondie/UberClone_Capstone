import { Text, View } from 'react-native';
import React from 'react';
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
    <View>
      <Text>NavOptions</Text>
    </View>
  );
};

export default NavOptions;
