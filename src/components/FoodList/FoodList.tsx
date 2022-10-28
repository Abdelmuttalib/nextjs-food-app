import { createStyles, Button, Box } from "@mantine/core";
import { useState, useMemo } from "react";
import FoodCard from "./FoodCard";
import { ArrowsUpDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import { FoodT } from "./types";
import AddFoodFormModal from "./AddFoodFormModal";
import { createClient } from "@supabase/supabase-js";

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

const FoodList = ({ foods }: { foods: FoodT[] }) => {
  const { classes } = useStyles();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  const supabase = createClient(supabaseUrl, supabaseKey);

  const [opened, setOpened] = useState(false);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sort, setSort] = useState<string>("Ascending");

  const filteredFoodList = useMemo(() => {
    if (!foods) return [];
    const sortedFoodList =
      sort === "Ascending"
        ? foods.sort((a, b) => a.rating - b.rating)
        : foods.sort((a, b) => b.rating - a.rating);
    return sortedFoodList.filter((food) =>
      food.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, foods, sort, supabase.auth]);

  const onSort = () => {
    setSort((prevValue) =>
      prevValue === "Ascending" ? "Descending" : "Ascending"
    );
  };

  const onAddFood = async (newFoodData: FoodT) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await supabase.from("foods").insert(newFoodData);
    setOpened(false);
  };

  return (
    <section className={classes.container}>
      <AddFoodFormModal
        onAddFood={onAddFood}
        opened={opened}
        setOpened={setOpened}
      />

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
          gap: "2rem",
        })}
      >
        <Button className={classes["sort-button"]} onClick={onSort}>
          <ArrowsUpDownIcon className={classes["sort-button-icon"]} />
          {sort}
        </Button>
        <Button onClick={() => setOpened(true)}>
          <PlusIcon style={{ width: "1rem" }} />
          Add new food
        </Button>
      </Box>
      {/* {isLoading && <div style={{ marginTop: "5rem" }}>Loading...</div>} */}
      <div className={classes["cards-container"]}>
        {filteredFoodList.map((food) => (
          <FoodCard key={food.title} {...food} />
        ))}
      </div>
    </section>
  );
};

export default FoodList;
