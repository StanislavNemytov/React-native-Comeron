import { StyleSheet } from "react-native";
import { colors } from "../../../src/style/base";

const stylesCheckoutComment = StyleSheet.create({
  container: { padding: 20 },
  containerComment: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  img: { marginRight: 16, resizeMode: "contain", width: 23, height: 21 },
  placeholder: { color: colors.placeholder },
});

export default stylesCheckoutComment;
