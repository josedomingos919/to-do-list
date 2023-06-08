import { ActivityIndicator } from "react-native";
import { useCategoryState } from "./state";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import * as S from "./styles";

export function CategoryScreen({ navigation }) {
  const {
    search,
    categories,
    isLoading,
    setSearch,
    handleSelectCategory,
    handleLogout,
  } = useCategoryState({ navigation });

  return (
    <S.Container
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <S.HeaderContainer>
        <S.HeaderTitle>Lista de Categorias</S.HeaderTitle>
      </S.HeaderContainer>
      <S.CatregoryList>
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
        </S.InputContainer>

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          categories.map(({ name, id }, index) => {
            return (
              <S.CategoryItem
                onPress={() => handleSelectCategory(id, name)}
                key={index}
              >
                <S.CategoryItemText>{name}</S.CategoryItemText>
              </S.CategoryItem>
            );
          })
        )}
      </S.CatregoryList>
      <S.Button onPress={handleLogout}>
        <MaterialIcons
          style={{ marginRight: 10 }}
          name="logout"
          size={24}
          color="#ffff"
        />
        <S.ButtonLabel>Sair</S.ButtonLabel>
      </S.Button>
    </S.Container>
  );
}
