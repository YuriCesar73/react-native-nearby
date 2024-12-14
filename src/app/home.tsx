import { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";

import { api } from "@/servers/api";

import { Categories, CategoriesProps } from "@/components/categories";

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi possível carregas as categorias");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Categories data={categories}></Categories>
    </View>
  );
}
