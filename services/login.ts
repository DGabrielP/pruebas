import api from "./api";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginData {
    username: string;
    password: string;
}

interface LoginResponse {
    id: number;
    username: string;
    token: string;
}

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
    try{
        const response = await api.post<LoginResponse>('/login');
        return response.data;
    } catch (error:any){
        console.error('Login error', error.response?.data || error.message);
        throw error;
    }
};

export const getToken = async () => {
    return await AsyncStorage.getItem("authToken");
  };
  
  // Función para cerrar sesión
  export const logoutUser = async () => {
    await AsyncStorage.removeItem("authToken");
  };