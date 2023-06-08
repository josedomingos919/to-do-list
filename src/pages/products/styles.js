import styled from "styled-components/native";

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: #f8f8f8;
  padding: 0px 20px;
`;

export const Header = styled.View`
  margin-top: 70px;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-weight: bold;
  margin-left: 10px;
`;

export const UserPhoto = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
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
  margin-bottom: 30px;
`;

export const TitleBar = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 30px;
`;

export const ProductsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProductCard = styled.View`
  padding: 10px;
  width: 45%;
  min-height: 195px;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: #ffff;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
`;

export const ProductDescription = styled.Text`
  align-self: flex-start;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 5px;
  align-self: flex-start;
`;

export const StarsContent = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 5px;
`;

export const cardShadow = {
  shadowOffset: { width: 2, height: 0 },
  shadowColor: "#171717",
  shadowOpacity: 0.1,
  shadowRadius: 3,
};
