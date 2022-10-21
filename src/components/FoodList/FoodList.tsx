import {
  createStyles,
  Button,
  useMantineColorScheme,
  ActionIcon,
  Box,
} from "@mantine/core";
import { useState, useMemo } from "react";
import FoodCard from "./FoodCard";
import { ArrowsUpDownIcon, SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { FoodT } from "./types";
import { foodListData } from "../../data/food-list/food-list-data";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "4rem 0",
  },

  "search-input": {
    width: 400,
    padding: "14px 20px",
    borderRadius: 5,
    border: "none",
    outline: "none",
    fontSize: 18,
    backgroundColor: "#f0f0f0",
    color: "#1C1C1C",

    "&:focus": {
      outline: "none",
    },
  },
  "cards-container": {
    display: "grid",
    gridTemplateColumns: "1fr",
    padding: "2rem 2rem",
    margin: "2rem 0",
    gap: "2rem",
    borderRadius: "5px",

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },

  "sort-button": {
    fontSize: "1rem",
    margin: "1rem 0",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
  "sort-button-icon": {
    width: "1.5rem",
    marginRight: "8px",
  },
}));

const FoodList = () => {
  const { classes } = useStyles();
  const [foodList] = useState<FoodT[]>(foodListData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sort, setSort] = useState<string>("Ascending");

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const filteredFoodList = useMemo(() => {
    const sortedFoodList =
      sort === "Ascending"
        ? foodList.sort((a, b) => a.rating - b.rating)
        : foodList.sort((a, b) => b.rating - a.rating);
    return sortedFoodList.filter((food) =>
      food.dish.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, foodList, sort]);

  const onSort = () => {
    setSort((prevValue) =>
      prevValue === "Ascending" ? "Descending" : "Ascending"
    );
  };

  return (
    <section className={classes.container}>
      <label htmlFor="searchQuery">
        <input
          className={classes["search-input"]}
          type="text"
          id="searchQuery"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>

      <Box
        sx={() => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "300px",
        })}
      >
        <Button className={classes["sort-button"]} onClick={onSort}>
          <ArrowsUpDownIcon className={classes["sort-button-icon"]} />
          {sort}
        </Button>
        <ActionIcon
          variant="outline"
          color={dark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? (
            <SunIcon style={{ width: "1rem" }} />
          ) : (
            <MoonIcon style={{ width: "1rem" }} />
          )}
        </ActionIcon>
      </Box>
      <div className={classes["cards-container"]}>
        {filteredFoodList.map((food) => (
          <FoodCard key={food.dish} {...food} />
        ))}
      </div>
    </section>
  );
};

export default FoodList;
