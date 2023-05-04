import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import UberX from '../assets/UberX.webp';
import UberXL from '../assets/UberXL.webp';
import UberLux from '../assets/UberLux.webp';

const data = [
  {
    id: 'Uber-X-123',
    title: 'Uber X',
    multiplier: 1,
    image: UberX,
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: UberXL,
  },
  {
    id: 'Uber-LUX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: UberLux,
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a ride</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity style={tw`flex-row justify-between items-center`}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain,',
              }}
              source={image}
            />
            <View>
              <Text>{title}</Text>
              <Text>Travel time...</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
