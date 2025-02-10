import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Header from "@/components/Header";
import PetItem from "@/components/PetItem";
import RectangleButton from "@/components/RectangleButton";
import Colors from "@/components/ui/ColorsFont";
import { router } from "expo-router";

const pets = [
  { id: 1, name: "Helly", owner: "Jonathan Cadme", breed: "Golden Retriever", isFavorite: false },
  { id: 2, name: "Tommy", owner: "Diego Pulgarn", breed: "Pequinés", isFavorite: true },
  { id: 3, name: "Samantha", owner: "Leonardo Uluma", breed: "Husky Siberiano", isFavorite: false },
  { id: 4, name: "Pulgosa", owner: "José Jaramillo", breed: "Pastor Alemán", isFavorite: true },
  { id: 5, name: "Giyu", owner: "Michelle Maquina", breed: "Border Collie", isFavorite: false },
];

const PetScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
      <RectangleButton 
         title="Agregar" 
         subtitle="Nueva Mascota" 
         onPress={() => router.push('/petregister')}
        />
      </View>

      <Header title="Lista de Mascotas" />

      <FlatList
        data={pets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PetItem {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 10,
  },
  buttons: {
    marginVertical: 10,
  },
});

export default PetScreen;
