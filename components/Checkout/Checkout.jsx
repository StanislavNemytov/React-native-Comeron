/* eslint-disable react/prop-types */
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CheckoutComment from "../CheckoutComment/CheckoutComment";
import CheckoutCoupon from "../CheckoutCoupon/CheckoutCoupon";
import CheckoutList from "../CheckoutList/CheckoutList";
import CheckoutTotal from "../CheckoutTotal/CheckoutTotal";
import styles from "./styles";

const Checkout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerScrollView}>
        <CheckoutList navigation={navigation} />
        <CheckoutComment navigation={navigation} />
        <CheckoutCoupon navigation={navigation} />
      </ScrollView>
      <CheckoutTotal navigation={navigation} />
    </View>
  );
};

export default Checkout;
