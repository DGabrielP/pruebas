import { StyleSheet } from "react-native";

const TypoText = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4F3D73",
    textAlign: "center",
    textTransform: "uppercase",
  },
  body: {
    fontSize: 16,
    color: "#333333",
  },
  link: {
    fontSize: 14,
    color: "#0B63E5",
    textDecorationLine: "underline",
  },
});

export default TypoText;
