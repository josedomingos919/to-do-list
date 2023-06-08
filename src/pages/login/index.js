import * as S from "./styles";

import { useLoginState } from "./state";
import { ActivityIndicator } from "react-native";

import userPng from "./../../assets/user.jpg";

export function LoginScreen({ navigation }) {
  const {
    email,
    password,
    photo,
    isLoading,
    handleLogin,
    setEmail,
    setPassword,
  } = useLoginState({ navigation });

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <S.LoginCard style={S.cardShadow}>
        <S.UserPhoto style={S.cardShadow}>
          <S.Image
            resizeMode="contain"
            source={
              photo
                ? {
                    uri: photo,
                  }
                : userPng
            }
          />
        </S.UserPhoto>
        <S.InputLabel>E-mail</S.InputLabel>
        <S.InputContainer>
          <S.Input
            placeholder="ex.: teste@gmail.com"
            value={email}
            onChangeText={setEmail}
          />
        </S.InputContainer>
        <S.InputLabel>Senha</S.InputLabel>
        <S.InputContainer>
          <S.Input
            placeholder="ex.: ShjsY626?."
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </S.InputContainer>
        <S.Button disabled={isLoading} onPress={handleLogin}>
          {isLoading ? <ActivityIndicator size="small" color="#ffff" /> : <></>}
          <S.ButtonLabel> Entrar</S.ButtonLabel>
        </S.Button>
      </S.LoginCard>
    </S.Container>
  );
}
