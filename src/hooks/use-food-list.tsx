import { useState } from "react";
import { FoodT } from "../components/FoodList/types";
import { foodListData } from "../data/food-list/food-list-data";

const useFoodList = () => {
  const [foods, setFoods] = useState<FoodT[]>(foodListData);

  return { foods, setFoods };
};

export default useFoodList;
