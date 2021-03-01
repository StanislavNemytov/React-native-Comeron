import { StyleSheet } from "react-native";
import { colors } from "../../src/style/base";
import styles from "./Separator/styles";

const stylesCheckoutList = StyleSheet.create({
  container: {
    ...styles.separator,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    zIndex: 0,
    height: "max-content",
    maxHeight: "max-content",
  },
});

export default stylesCheckoutList;
