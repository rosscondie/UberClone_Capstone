import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: '37 Castle Terrace, Edinburgh EH1 2EL',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'Clockwise, 77, Renfrew St, Glasgow G2 3BZ',
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
