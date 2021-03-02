import React from "react";
import { Pressable, View } from "react-native";
import Payment from "./Payment/Payment";
import Separator from "./Separator/Separator";
import ShipMethod from "./ShipMethod/ShipMethod";
import UserData from "./UserData/UserData";

const CheckoutList = ({ navigation }) => {
  const onPress = (navigateTo) => {
    navigation.navigate(navigateTo);
  };

  const data = [
    {
      Component: UserData,
      key: "item-1",
      navigateTo: "Recipes",
    },
    {
      Component: ShipMethod,
      key: "item-2",
      navigateTo: "Recipes",
    },
    {
      Component: Payment,
      key: "item-3",
      navigateTo: "Recipes",
    },
  ];

  return data.map((item) => {
    const { Component, key, navigateTo } = item;

    return (
      <View key={key}>
        <Pressable onPress={() => onPress(navigateTo)}>
          <Component />
        </Pressable>
        <Separator />
      </View>
    );
  });
};

export default CheckoutList;
