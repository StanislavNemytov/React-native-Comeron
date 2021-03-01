import React, { useState } from "react";
import { Button, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";

const CheckoutCoupon = () => {
  const [state, setState] = useState("");

  /**
   * @param {Event} event
   */
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <View style={styles.container}>
      {/* Text on focus -> TextInput */}
      <TextInput
        style={[state.length && styles.coupon, styles.input]}
        placeholder="Укажите промокод"
        placeholderTextColor={styles.placeholder}
        value={state}
        onChange={handleChange}
      />
      <Button
        title="Ввести промокод"
        disabled={state.length > 0 ? "true" : "false"}
      />
    </View>
  );
};

export default CheckoutCoupon;
