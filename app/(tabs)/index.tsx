import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Header from "@/components/Header";
import InputTemplate from "@/components/InputTemplate";
import ButtonTemplate from "@/components/ButtonTemplate";
import TypoText from "@/components/ui/TypoText";
import Colors from "@/components/ui/ColorsFont";
import { router } from "expo-router";
import { loginUser } from "@/services/login";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Por favor ingresa usuario y contraseña");
      return;
    }

    setLoading(true);

    try {
      const response = await loginUser({ username, password });
      await AsyncStorage.setItem("authToken", response.token);
      
      Alert.alert("Éxito", "Inicio de sesión exitoso");
      router.push("./petchoice"); 
    } catch (error) {
      Alert.alert("Error", "Credenciales incorrectas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Acceso de Usuario" />

      <InputTemplate 
        placeholder="Usuario" 
        iconName="user" 
        value={username}
        onChangeText={setUsername}
      />
      <InputTemplate 
        placeholder="Contraseña" 
        iconName="lock" 
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <ButtonTemplate 
        title={loading ? "Cargando..." : "INGRESAR"} 
        onPress={handleLogin} 
      />

      <TouchableOpacity onPress={() => router.push('/register')}> 
        <Text style={[TypoText.link, styles.centerText]}>Registrate</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>
        ¿Olvidaste la contraseña? <Text style={TypoText.link}>Recuperar</Text>
      </Text>
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

export default LoginScreen;
