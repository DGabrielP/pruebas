import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import Colors from "./ui/ColorsFont";
import Entypo from '@expo/vector-icons/Entypo';

interface InputProps extends TextInputProps {
  iconName: keyof typeof Entypo.glyphMap;
  placeholder: string;
  secureTextEntry?: boolean;
  inputColor?: string;
}

const InputTemplate: React.FC<InputProps> = ({ 
  iconName, 
  placeholder, 
  secureTextEntry, 
  inputColor, 
  ...rest 
}) => {
  return (
    <View style={[styles.inputContainer, { backgroundColor: inputColor || Colors.inputBackground }]}>
      <Entypo name={iconName} size={18} color={Colors.textPrimary} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={Colors.textPrimary}
        style={styles.input}
        {...rest}  // Permite recibir onChangeText y otros props
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.textPrimary,
  },
});

export default InputTemplate;
