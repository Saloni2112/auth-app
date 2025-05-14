
import axios from "axios"

const API_BASE = import.meta.env.VITE_API_URL;

console.log("API_BASE:", API_BASE); // Should show "/api"

const register = async(FormData) => {
    const response = await axios.post(`${API_BASE}/user/register`, FormData)
   localStorage.setItem("user", JSON.stringify(response.data))
    return response.data;
}
const login = async(FormData) => {
    const response = await axios.post(`${API_BASE}/user/login`, FormData)
   localStorage.setItem("user", JSON.stringify(response.data))
    return response.data;
}

const authService = {
    register,
    login,
}

export default authService;