import { useEffect, useState } from "react";
import { useApp } from "../../context/app";
import { service } from "../../services";

export const useCategoryState = ({ navigation }) => {
  const { setUser } = useApp();
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectCategory = (categoryId, name) => {
    navigation.navigate("ProductScreen", { categoryId, name });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const getCategories = async () => {
    setIsLoading(true);
    const response = await service.product.getCategory();
    setIsLoading(false);

    if (response?.status == 200) {
      setCategories(response?.data);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const filterCategory = (data = []) => {
    return data.filter(({ name = "" }) => {
      return search
        ? name?.toLowerCase()?.includes(search?.toLowerCase())
        : true;
    });
  };

  return {
    search,
    categories: filterCategory(categories),
    isLoading,
    setSearch,
    handleSelectCategory,
    handleLogout,
  };
};
