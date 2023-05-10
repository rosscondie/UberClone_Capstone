import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';
import money_hand from '../assets/money_hand.gif';
import { Icon } from 'react-native-elements';

const TipIncentiveScreen = ({ navigation, route }) => {
  const [selectedTip, setSelectedTip] = useState(
    route.params?.selectedTip || 0
  );
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(route.params?.rideCost || 0);

  const handleTipSelection = (percentage) => {
    setSelectedTip(percentage);
    const rideCost = route.params?.rideCost || 0;
    setTipAmount(rideCost * (percentage / 100));
    setTotalAmount(rideCost + rideCost * (percentage / 100));
  };
  const handleTipInput = (value) => {
    if (value === '') {
      setTipAmount('');
      setTotalAmount(route.params?.rideCost || 0);
    } else {
      const tip = parseFloat(value);
      const rideCost = route.params?.rideCost || 0;
      const totalAmount = isNaN(tip) ? rideCost : rideCost + tip;
      setTipAmount(tip);
      setTotalAmount(totalAmount);
    }
  };

  const handleTotalAmount = () => {
    const rideCost = route.params?.rideCost || 0;
    if (tipAmount && tipAmount.trim() !== '' && !isNaN(parseFloat(tipAmount))) {
      setTotalAmount(rideCost + parseFloat(tipAmount));
    } else {
      setTotalAmount(rideCost);
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white p-5`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`absolute left-5 z-50 p-0.5 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center text-lg font-bold text-black`}>
          Choose Tip Amount
        </Text>
      </View>
      <View style={tw`flex-row mt-5 justify-center `}>
        <TouchableOpacity
          onPress={() => handleTipSelection(10)}
          style={tw`flex-row items-center mr-4`}
        >
          <MaterialIcons
            name={
              selectedTip === 10
                ? 'radio-button-checked'
                : 'radio-button-unchecked'
            }
            size={24}
            color="black"
          />
          <Text
            style={[
              tw`text-lg font-medium text-black`,
              selectedTip === 10 && tw`text-black`,
            ]}
          >
            10%
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTipSelection(15)}
          style={tw`flex-row items-center mr-4`}
        >
          <MaterialIcons
            name={
              selectedTip === 15
                ? 'radio-button-checked'
                : 'radio-button-unchecked'
            }
            size={24}
            color="black"
          />
          <Text
            style={[
              tw`text-lg font-medium text-black`,
              selectedTip === 15 && tw`text-black`,
            ]}
          >
            15%
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTipSelection(20)}
          style={tw`flex-row items-center`}
        >
          <MaterialIcons
            name={
              selectedTip === 20
                ? 'radio-button-checked'
                : 'radio-button-unchecked'
            }
            size={24}
            color="black"
          />
          <Text
            style={[
              tw`text-lg font-medium text-black`,
              selectedTip === 20 && tw`text-black`,
            ]}
          >
            20%
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`items-center`}>
        <Image
          style={{ width: 400, height: 400, resizeMode: 'contain' }}
          source={money_hand}
        />
      </View>

      <View style={tw`p-3 mt-8`}>
        <Text style={tw`text-center text-lg font-bold text-black`}>
          Custom Tip Amount
        </Text>
        <TextInput
          placeholder="Enter amount"
          keyboardType="numeric"
          style={tw`text-center  bg-gray-200 py-3 m-3 rounded-lg`}
          onChangeText={(value) => handleTipInput(value)}
        />
      </View>
      <View style={tw`p-3 flex-row justify-between`}>
        <Text style={tw`text-lg font-bold text-black`}>Tip Amount:</Text>
        <Text style={tw`text-lg font-medium text-black`}>
          {new Intl.NumberFormat('en-gb', {
            style: 'currency',
            currency: 'GBP',
          }).format(tipAmount)}
        </Text>
      </View>
      <View style={tw`p-3 flex-row justify-between mt-3`}>
        <Text style={tw`text-lg font-bold text-black`}>Total Amount:</Text>
        <Text style={tw`text-lg font-medium text-black`}>
          {new Intl.NumberFormat('en-gb', {
            style: 'currency',
            currency: 'GBP',
          }).format(totalAmount)}
        </Text>
      </View>
      <TouchableOpacity
        // onPress={handleTotalAmount}
        style={tw`bg-black py-3 m-3 rounded-2xl`}
      >
        <Text style={tw`text-center text-xl text-white`}>Get a Ride</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default TipIncentiveScreen;
