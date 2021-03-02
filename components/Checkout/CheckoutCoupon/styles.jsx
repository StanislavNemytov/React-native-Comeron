import { StyleSheet } from "react-native";
import { colors } from "../../../src/style/base";

const stylesCheckoutCoupon = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 20,
    paddingLeft: 20,
  },
  coupon: {
    fontSize: 24,
    textTransform: "uppercase",
  },
  input: {
    marginBottom: 20,
    alignSelf: "center",
  },
  placeholder: {
    color: colors.placeholder,
  },
  button: {
    alignSelf: "stretch",
    width: "100%",
  },
});

export default stylesCheckoutCoupon;
