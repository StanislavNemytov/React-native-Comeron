/* eslint-disable react/prop-types */
import React from "react";
import { Animated } from "react-native";
import Company from "../Company/Company";
import Header from "../Header/Header";
import CheckoutComment from "./CheckoutComment/CheckoutComment";
import CheckoutCoupon from "./CheckoutCoupon/CheckoutCoupon";
import CheckoutList from "./CheckoutList/CheckoutList";
import CheckoutTotal from "./CheckoutTotal/CheckoutTotal";
import styles from "./styles";

const Checkout = ({ navigation }) => {
  const data = [
    "Header",
    "Company",
    "CheckoutList",
    "CheckoutComment",
    "CheckoutCoupon",
    "CheckoutTotal",
  ];

  const components = {
    Header,
    CheckoutComment,
    CheckoutCoupon,
    CheckoutList,
    CheckoutTotal,
    Company,
  };
  const renderData = ({ item }) => {
    const Component = components[item];
    return <Component navigation={navigation} />;
  };

  return (
    <Animated.FlatList
      keyExtractor={(item) => item.toString()}
      data={data}
      renderItem={renderData}
      style={styles.container}
    />
  );
};

export default Checkout;
