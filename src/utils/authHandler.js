import { endpoint } from "@/utils/endpoint";
import axios from "axios";
import Cookies from "js-cookie";

export async function SignInRoute(email, password) {
  try {
    const admin = await axios.post(`${endpoint.authEndpoint}/signIn`, {
      email: email,
      password: password,
    });

    await Cookies.set("token", admin.data?.token);
    return admin.data;
  } catch (error) {
    throw error;
  }
}

export async function validateAdmin() {
  try {
    const token = Cookies.get("token");
    const admin = await axios.get(
      `${endpoint.authEndpoint}/validateUserSession`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return admin.data;
  } catch (error) {
    throw error;
  }
}
