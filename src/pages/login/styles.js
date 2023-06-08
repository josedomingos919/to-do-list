import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: #69b2b0;
  justify-content: center;
  padding: 0px 40px;
  position: relative;
`;

export const Title = styled.Text`
  margin-top: 25%;
  margin-left: 40px;
  font-weight: bold;
  color: white;
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const LoginCard = styled.View`
  width: 100%;
  min-height: 350px;
  border-radius: 15px;
  padding: 10px 20px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
`;

export const UserPhoto = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: #ffff;
  margin-top: -50px;
  margin-bottom: 20px;
  padding: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const cardShadow = {
  shadowOffset: { width: 0, height: 5 },
  shadowColor: "#171717",
  shadowOpacity: 0.2,
  shadowRadius: 3,
};

export const InputLabel = styled.Text`
  font-weight: bold;
  color: #000000;
  font-size: 15px;
  margin-bottom: 10px;
  align-self: flex-start;
`;

export const InputContainer = styled.View`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 15px;
  background-color: #ebebeb;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  margin-bottom: 35px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
`;

export const ButtonLabel = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  background-color: red;
  width: 100%;
  height: 48px;
  border-radius: 15px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #69b2b0;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
