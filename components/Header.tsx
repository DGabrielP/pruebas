import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TypoText from "./ui/TypoText";
import Colors from "./ui/ColorsFont";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={TypoText.title}>{title}</Text>
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  underline: {
    width: "50%",
    height: 2,
    backgroundColor: Colors.primary,
    marginTop: 5,
  },
});

export default Header;
