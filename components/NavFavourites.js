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

const NavFavourites = ({ setAddressText }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={() => {
            setAddressText(destination);
          }}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
