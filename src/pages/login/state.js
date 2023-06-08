import { useState } from "react";
import { Alert } from "react-native";
import { useApp } from "../../context/app";
import { service } from "../../services";
import { cache } from "../../cache";
import { useEffect } from "react";

export const useLoginState = () => {
  const { setUser } = useApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState("");

  const handleLogin = async () => {
    if (!email) {
      Alert.alert("Atenão!", "Não digitou o email!");
      return;
    } else if (!email.includes("@") || !email.includes(".")) {
      Alert.alert("Atenão!", "Email inválido!");
      return;
    } else if (!password) {
      Alert.alert("Atenão!", "Não digitou a senha!");
      return;
    } else if (password?.length < 5) {
      Alert.alert("Atenão!", "Senha muito pequena!");
      return;
    }

    setIsLoading(true);
    const response = await service.user.login({
      email,
      password,
    });
    setIsLoading(false);

    if (response?.status == 200) {
      await cache.local.setItem("user", response?.data);

      setUser(response?.data);
    } else {
      Alert.alert("Atenão!", "Falha no login, tente novamente mais tarde!");
      return;
    }
  };

  const getUserPhoto = async () => {
    const user = await cache.local.getItem("user");

    setPhoto(user?.photo);
  };

  useEffect(() => {
    getUserPhoto();
  }, []);

  return {
    email,
    password,
    isLoading,
    getUserPhoto,
    photo,
    handleLogin,
    setEmail,
    setPassword,
  };
};
