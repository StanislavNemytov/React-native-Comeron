import React, { useState } from "react";
import { Button, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";

const CheckoutCoupon = () => {
  const [state, setState] = useState("");

  /**
   * @param {Event} event
   */
  const handleChange = (text) => {
    setState(text);
  };

  return (
    <View style={styles.container}>
      {/* Text on focus -> TextInput */}
      <TextInput
        style={[state?.length && styles.coupon, styles.input]}
        placeholder="Укажите промокод"
        placeholderTextColor={styles.placeholder.color}
        value={state}
        onChangeText={handleChange}
      />
      <Button title="Ввести промокод" disabled={state.length === 0} />
    </View>
  );
};

export default CheckoutCoupon;
