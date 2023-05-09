import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';

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

  // const handleTipInput = (amount) => {
  //   setSelectedTip(0);
  //   const rideCost = route.params?.rideCost || 0;
  //   setTipAmount(parseFloat(amount));
  //   setTotalAmount(rideCost + parseFloat(amount));
  // };

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

  //   const handleTotalAmount = () => {
  //     const rideCost = route.params?.rideCost || 0;
  //     if (tipAmount && !isNaN(parseFloat(tipAmount))) {
  //       setTotalAmount(rideCost + parseFloat(tipAmount));
  //     } else {
  //       setTotalAmount(rideCost);
  //     }
  //   };

  const handleTotalAmount = () => {
    const rideCost = route.params?.rideCost || 0;
    if (tipAmount && tipAmount.trim() !== '' && !isNaN(parseFloat(tipAmount))) {
      setTotalAmount(rideCost + parseFloat(tipAmount));
    } else {
      setTotalAmount(rideCost);
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-black p-5`}>
      <Text style={tw`text-lg font-bold text-white`}>Choose Tip Amount</Text>
      <View style={tw`flex-row mt-5 items-center`}>
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
            color="white"
          />
          <Text
            style={[
              tw`text-lg font-medium text-white`,
              selectedTip === 10 && tw`text-white`,
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
            color="white"
          />
          <Text
            style={[
              tw`text-lg font-medium text-white`,
              selectedTip === 15 && tw`text-white`,
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
            color="white"
          />
          <Text
            style={[
              tw`text-lg font-medium text-white`,
              selectedTip === 20 && tw`text-white`,
            ]}
          >
            20%
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`mt-8`}>
        <Text style={tw`text-lg font-bold text-white`}>
          Or Enter Tip Amount
        </Text>
        <TextInput
          placeholder="Enter amount"
          keyboardType="numeric"
          style={tw`bg-white mt-3 p-3 rounded-md text-lg`}
          onChangeText={(value) => handleTipInput(value)}
        />
      </View>
      <View style={tw`flex-row justify-between mt-5`}>
        <Text style={tw`text-lg font-bold text-white`}>Tip Amount:</Text>
        <Text style={tw`text-lg font-medium text-white`}>
          {new Intl.NumberFormat('en-gb', {
            style: 'currency',
            currency: 'GBP',
          }).format(tipAmount)}
        </Text>
      </View>
      <View style={tw`flex-row justify-between mt-3`}>
        <Text style={tw`text-lg font-bold text-white`}>Total Amount:</Text>
        <Text style={tw`text-lg font-medium text-white`}>
          {new Intl.NumberFormat('en-gb', {
            style: 'currency',
            currency: 'GBP',
          }).format(totalAmount)}
        </Text>
      </View>
      {/* <TouchableOpacity
        onPress={() => handleTotalAmount()}
        style={tw`bg-white py-3 px-8 mt-8 rounded-lg`}
      >
        <Text style={tw`text-lg font-bold`}>Calculate Total</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={handleTotalAmount}
        style={tw`bg-white py-3 px-8 mt-8 rounded-lg`}
      >
        <Text style={tw`text-lg font-bold`}>Get a Ride</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default TipIncentiveScreen;
