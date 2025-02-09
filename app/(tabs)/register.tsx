import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert} from "react-native";
import Header from "@/components/Header";
import InputTemplate from "@/components/InputTemplate";
import ButtonTemplate from "@/components/ButtonTemplate";
import TypoText from "@/components/ui/TypoText";
import Colors from "@/components/ui/ColorsFont";
import {registerUser} from "@/services/register"

const RegisterScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [email, setEmail] = useState('');
    const [inputColor, setInputColor] = useState(Colors.inputBackground);

    const handlePasswordConfirmChange = (text: string) => {
        setPasswordConfirm(text);
        setInputColor(text === password ? Colors.inputsuccess : Colors.inputfail);
    };

    const handleRegister = async () => {
        if (!username || !password || !email) {
            Alert.alert("Error", "Todos los campos son obligatorios.");
            return;
        }

        if (password !== passwordConfirm) {
            Alert.alert("Error", "Las contraseñas no coinciden.");
            return;
        }

        try {
            const response = await registerUser({ username, password, email });
            Alert.alert("Éxito", "Usuario registrado correctamente.");
            console.log("Registro exitoso:", response);
        } catch (error) {
            Alert.alert("Error", "No se pudo registrar el usuario.");
        }
    };



    return (
        <View style={styles.container}>
            <Header title="Registro de usuario" />

            <InputTemplate placeholder="Usuario" iconName="user"  onChangeText={setUsername}/>
            <InputTemplate 
                placeholder="Contraseña" 
                iconName="lock" 
                secureTextEntry 
                onChangeText={setPassword} 
            />
            <InputTemplate 
                placeholder="Repita la Contraseña" 
                iconName="lock" 
                secureTextEntry 
                onChangeText={handlePasswordConfirmChange}
                inputColor={inputColor} 
            />
            <InputTemplate placeholder="Email" iconName="mail" onChangeText={setEmail}/>

            <ButtonTemplate title="Registrar" onPress={handleRegister}/>
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
