/* eslint-disable react/prop-types */
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Title = ({ text }) => {
  return (
    <View style={styles.title_container}>
      <Text style={styles.title_text}>{text}</Text>
    </View>
  );
};

export default Title;
