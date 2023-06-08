import styled from "styled-components/native";

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: #69b2b0;
  padding: 0px 20px;
  position: relative;
`;

export const CatregoryList = styled.View`
  width: 100%;
  min-height: 100px;
  border-radius: 10px;
  padding: 10px;
  background-color: #ffff;
  min-height: 75%;
  margin-bottom: 10px;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  margin-top: 70px;
  margin-bottom: 25px;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-weight: bold;
  color: #ffff;
`;

export const CategoryItemText = styled.Text`
  font-weight: bold;
  color: #4c4c4c;
`;

export const CategoryItem = styled.TouchableOpacity`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #ebebeb;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
`;

export const InputContainer = styled.View`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 5px;
  background-color: #ebebeb;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  margin-bottom: 20px;
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
