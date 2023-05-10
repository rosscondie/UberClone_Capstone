import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native';
import UberEats from '../assets/uber_eats.png';
import { useNavigation } from '@react-navigation/native';
import ASIAN from '../assets/uber-eats/asian.png';
import INDIAN from '../assets/uber-eats/indian.png';
import AMERICAN from '../assets/uber-eats/american.png';
import JAPANESE from '../assets/uber-eats/japanese.png';
import SUSHI from '../assets/uber-eats/sushi.png';
import BREAKFAST from '../assets/uber-eats/breakfast.png';
import DESSERT from '../assets/uber-eats/dessert.png';

const data = [
  {
    id: '123',
    title: 'Asian',
    image: ASIAN,
  },
  {
    id: '456',
    title: 'Indian',
    image: INDIAN,
  },
  {
    id: '789',
    title: 'American',
    image: AMERICAN,
  },
  {
    id: '101112',
    title: 'Japanese',
    image: JAPANESE,
  },
  {
    id: '131415',
    title: 'Sushi',
    image: SUSHI,
  },
  {
    id: '16171819',
    title: 'Breakfast',
    image: BREAKFAST,
  },
  {
    id: '202122',
    title: 'Dessert',
    image: DESSERT,
  },
];

const EatsScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView style={tw`bg-white`}>
      <View
        style={tw`flex-row justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={tw`absolute top-2.5 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
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
      <TextInput style={styles.input} placeholder="Hungry?"></TextInput>
      <View>
        <Image
          style={{
            height: 350,
            width: 450,
            resizeMode: 'contain',
            marginBottom: 10,
          }}
          source={UberEats}
        />
      </View>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, image }, item }) => (
          <TouchableOpacity
            style={tw.style`items-center ${
              id === selected?.id && 'bg-gray-200'
            }`}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={image}
            />
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-7 border-t border-gray-200`}>
        <TouchableOpacity
          disbaled={!selected}
          style={tw.style`bg-black py-3 m-3 ${!selected && 'bg-gray-500'}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Order {selected?.title}
          </Text>
        </TouchableOpacity>
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
    fontSize: 20,
  },
});
