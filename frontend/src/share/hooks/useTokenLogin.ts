import { jwtDecode } from "jwt-decode";
import { useState } from "react";

export function useTokenLogin() {
  const [userId, setUserId] = useState("hola");

  const getUserId = (token: string) => {
    try {
      const decoded: { email: string; userId: string } = jwtDecode(token);
      setUserId(decoded.userId);
      return decoded;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  return {
    userId,
    getUserId,
  };
}
