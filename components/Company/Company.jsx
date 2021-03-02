import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const img = require("../../assets/image/default-image-avatar.png");

const Company = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainerShadow}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={img} />
        </View>
      </View>
      <Text style={styles.name}>Название компании</Text>
    </View>
  );
};

export default Company;
