import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Colors from "@/components/ui/ColorsFont";
import { AntDesign } from "@expo/vector-icons"; // Para el ícono "+"

interface ButtonProps {
  title: string;
  subtitle: string;
  onPress: () => void;
}

const RectangleButton: React.FC<ButtonProps> = ({ title, subtitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.addText}>{title}</Text>
        <AntDesign name="plus" size={18} color={Colors.textPrimary} />
      </View>
      <Text style={styles.subText}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.inputBackground, // Blanco
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.primary, // Morado
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, // Sombra en Android
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  addText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginRight: 5,
  },
  subText: {
    fontSize: 14,
    color: Colors.textPrimary,
  },
});

export default RectangleButton;
