import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert} from "react-native";
import Header from "@/components/Header";
import InputTemplate from "@/components/InputTemplate";
import ButtonTemplate from "@/components/ButtonTemplate";
import TypoText from "@/components/ui/TypoText";
import Colors from "@/components/ui/ColorsFont";
import {registerUser} from "@/services/register"

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [apecies, setSpecies] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [owner, setOwner] = useState(Colors.inputBackground);

    return (
        <View style={styles.container}>
            <Header title="Registro de usuario" />

            <InputTemplate placeholder="nombre" iconName="chevron-right"  onChangeText={setName}/>
            <InputTemplate placeholder="especie" iconName="chevron-right"  onChangeText={setSpecies}/>
            <InputTemplate placeholder="raza" iconName="chevron-right"  onChangeText={setBreed}/>
            <InputTemplate placeholder="edad" iconName="chevron-right"  onChangeText={setAge}/>
            <InputTemplate placeholder="propietario" iconName="chevron-right"  onChangeText={setOwner}/>
            

            <ButtonTemplate title="Añadir" onPress={() => Alert.alert('mascota creada')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    centerText: {
        marginVertical: 10,
    },
    forgotPassword: {
        marginTop: 15,
        fontSize: 14,
        color: Colors.textPrimary,
    },
});

export default RegisterScreen;
