import { createStyles } from "@mantine/core";
import React from "react";
import FoodCard from "./FoodCard";

const foodListData = [
  {
    dish: "Kebab",
    description:
      "a type of cooked meat dish that originates from cuisines of the Middle East",
    image: "kebab.jpg",
    rating: 4.6,
  },
  {
    dish: "Shawarma",
    description:
      "a delightful sight of vertically mounted layered chicken or lamp meat",
    image: "shawarma.jpg",
    rating: 4.3,
  },
  {
    dish: "Falafel",
    description:
      "Falafel is a Middle Eastern recipe that is basically mashed chickpeas with herbs and seasonings formed into patties and fried",
    image: "falafel.jpg",
    rating: 4.7,
  },
  {
    dish: "Taboleh",
    description:
      "a Levantine salad made mostly of finely chopped parsley, with tomatoes, mint, onion, bulgur (soaked, not cooked), and seasoned with olive oil, lemon juice, salt and sweet pepper",
    image: "taboleh.jpg",
    rating: 4.2,
  },
  {
    dish: "Kabsa",
    description:
      "an Arab mixed rice dish, served on a communal platter, that originates from Saudi Arabia",
    image: "kabsa.jpg",
    rating: 4.9,
  },
  {
    dish: "Hummus",
    description:
      "a Middle Eastern dip, spread, or savory dish made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic.",
    image: "hummus.jpg",
    rating: 4.8,
  },
];

const useStyles = createStyles((theme) => ({
  "cards-container": {
    display: "grid",
    gridTemplateColumns: "1fr",
    padding: "3rem 2rem",
    margin: "4rem 0",
    gap: "2rem",
    borderRadius: "5px",
    // backgroundColor: "#D9D9D9",

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
}));

const FoodList = () => {
  const { classes } = useStyles();

  return (
    <section className={classes["cards-container"]}>
      {foodListData.map(({ dish, description, image, rating }) => (
        <FoodCard
          key={dish}
          dish={dish}
          description={description}
          image={image}
          rating={rating}
        />
      ))}
    </section>
  );
};

export default FoodList;
