import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TypoText from "@/components/ui/TypoText";
import Colors from "@/components/ui/ColorsFont";
import { FontAwesome } from "@expo/vector-icons"; // Para el corazón

interface PetItemProps {
  id: number;
  name: string;
  owner: string;
  breed: string;
  isFavorite: boolean;
}

const PetItem: React.FC<PetItemProps> = ({ id, name, owner, breed, isFavorite }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{id}</Text>
      <View style={styles.details}>
        <Text style={TypoText.title}>{name}</Text>
        <Text style={TypoText.body}>{owner} • {breed}</Text>
      </View>
      <TouchableOpacity>
        <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={24} color={isFavorite ? "red" : "black"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.inputBackground,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    elevation: 2,
  },
  number: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
});

export default PetItem;
