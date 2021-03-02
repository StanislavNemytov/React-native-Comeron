import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const CheckoutTotal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>132 000 Р</Text>
      </View>
      {/* <Button title="Оформить заказ" /> */}
      <Pressable
        style={styles.button}
        onPress={() => {
          alert("Оформить заказ");
        }}
      >
        <Text style={styles.buttonText}>Оформить заказ</Text>
      </Pressable>
    </View>
  );
};

export default CheckoutTotal;
