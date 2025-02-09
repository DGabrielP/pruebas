import api from "./api";

interface RegisterData {
  username: string;
  password: string;
  email: string;
}

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await api.post("/register", data);
    return response.data;
  } catch (error: any) {
    console.error("Error en el registro:", error.response?.data || error.message);
    throw error;
  }
};
