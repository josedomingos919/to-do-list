import { useEffect, useState } from "react";
import { service } from "../../services";

export const useProductState = ({ categoryId }) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    const response = await service.product.getByCategory({
      categoryId,
      search,
    });
    setIsLoading(false);

    if (response?.status == 200) {
      setProducts(response?.data);
    } else {
      setProducts([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, [search, categoryId]);

  return { search, products, isLoading, setSearch };
};
