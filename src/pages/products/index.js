import * as S from "./styles";

import { useApp } from "./../../context/app";
import { Feather } from "@expo/vector-icons";
import { useProductState } from "./state";
import { AntDesign } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native";
import { formatMonay } from "../../functions/formatMonay";

export function ProductScreen({ route }) {
  const { categoryId, name } = route?.params || {};
  const { user } = useApp();
  const {
    search,
    isLoading,
    setSearch,
    products = [],
  } = useProductState({
    categoryId,
  });

  return (
    <S.Container
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <S.Header>
        <S.UserPhoto source={{ uri: user?.photo }} />
        <S.HeaderText>{user?.email}</S.HeaderText>
      </S.Header>
      <S.InputContainer>
        <Feather
          name="search"
          style={{ marginRight: 10 }}
          size={20}
          color="#C2C2C2"
        />
        <S.Input
          placeholder="Buscar..."
          value={search}
          onChangeText={setSearch}
        />
        {isLoading ? (
          <ActivityIndicator
            style={{
              backgroundColor: "transparent",
            }}
            size="small"
            color="#69b2b0"
          />
        ) : (
          <></>
        )}
      </S.InputContainer>

      <S.TitleBar>{name}</S.TitleBar>
      <S.ProductsContainer>
        {products.map(({ description, preco, photo, id }) => (
          <S.ProductCard key={id} style={S.cardShadow}>
            <S.ProductImage
              resizeMode="contain"
              source={{
                uri: photo,
              }}
            />
            <S.ProductDescription>{description}</S.ProductDescription>
            <S.ProductPrice>{formatMonay(preco)} AOA</S.ProductPrice>
            <S.StarsContent>
              <AntDesign
                name="star"
                size={15}
                style={{
                  marginRight: 5,
                }}
                color="#DEE543"
              />
              <AntDesign
                name="star"
                style={{
                  marginRight: 5,
                }}
                size={15}
                color="#DEE543"
              />
              <AntDesign
                name="star"
                style={{
                  marginRight: 5,
                }}
                size={15}
                color="#DEE543"
              />
            </S.StarsContent>
          </S.ProductCard>
        ))}
      </S.ProductsContainer>
    </S.Container>
  );
}
