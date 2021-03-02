/* eslint-disable react/prop-types */
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Button } from "react-native";
import { Checkout, Recipes } from "../components";
import styles from "./styles";

const Stack = createStackNavigator();

const onPress = (navigation) => {
  navigation.navigate("Checkout");
};

const screens = {
  Checkout: { component: Checkout, title: "Оформление заказа" },
  Recipes: { component: Recipes, title: "Получатель" },
};

const ToCheckout = ({ navigation }) => (
  <Button onPress={() => onPress(navigation)} title="Click" />
);

const HomeScreen = () => (
  <Stack.Navigator initialRouteName="Checkout">
    <Stack.Screen
      name="Home"
      component={ToCheckout}
      options={{
        title: "Home",
        ...styles,
        headerTitleStyle: { alignSelf: "center" },
      }}
    />
    {Object.entries(screens).map(([name, { component, title }]) => (
      <Stack.Screen
        name={name}
        component={component}
        key={name}
        options={{
          title,
          ...styles,
        }}
      />
    ))}
  </Stack.Navigator>
);

export default HomeScreen;
