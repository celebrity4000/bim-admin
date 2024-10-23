import { endpoint } from "@/utils/endpoint";
import axios from "axios";

export async function SignInRoute (email, password){
    try {
        const admin = await axios.post (`${endpoint.authEndpoint}/signIn`, {
            email: email,
            password: password
        })
        return admin.data;
    } catch (error) {
        throw error;
    }
}