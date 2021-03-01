/* eslint-disable react/prop-types */
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CheckoutComment from "../CheckoutComment/CheckoutComment";
import CheckoutCoupon from "../CheckoutCoupon/CheckoutCoupon";
import CheckoutList from "../CheckoutList/CheckoutList";
import styles from "./styles";

const Checkout = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <CheckoutList navigation={navigation} />
      <CheckoutComment navigation={navigation} />
      <CheckoutCoupon />
    </ScrollView>
  );
};

export default Checkout;
