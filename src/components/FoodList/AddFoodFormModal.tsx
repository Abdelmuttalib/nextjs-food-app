import { Input, Button, Container, Title, Modal } from "@mantine/core";
import { useForm } from "react-hook-form";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { FoodT } from "./types";

type Props = {
  onAddFood: (food: FoodT) => void;
  opened: boolean;
  setOpened: (state: boolean) => void;
};

const AddFoodForm = ({ onAddFood, opened, setOpened }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FoodT>();

  const onAddFoodSubmit = (data: FoodT) => {
    onAddFood(data);
    reset();
  };
  return (
    <Modal opened={opened} onClose={() => setOpened(false)}>
      <div>
        <form onSubmit={handleSubmit(onAddFoodSubmit)}>
          <Container
            size={800}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Title
              order={1}
              style={{
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Add new food
            </Title>
            <Input
              size="lg"
              {...register("title", { required: true })}
              type="text"
              placeholder="food title"
              inputMode="text"
            />
            {errors.title && (
              <span style={{ color: "red" }}>* kindly enter food title</span>
            )}
            <Input
              size="lg"
              {...register("image", { required: true })}
              type="text"
              placeholder="food image url"
              inputMode="text"
            />
            {errors.title && (
              <span style={{ color: "red" }}>
                * kindly enter food image url
              </span>
            )}
            <Input
              size="lg"
              {...register("description", { required: true })}
              type="text"
              placeholder="food description"
              inputMode="text"
            />
            {errors.title && (
              <span style={{ color: "red" }}>
                * kindly enter food description
              </span>
            )}
            <Input
              size="lg"
              {...register("rating", { required: true })}
              type="text"
              placeholder="rating"
              inputMode="numeric"
            />{" "}
            {errors.title && (
              <span style={{ color: "red" }}>* kindly enter food rating</span>
            )}
            {/* Submit Button */}
            <Button
              type="submit"
              color="blue"
              size="lg"
              style={{ marginTop: "1.5rem" }}
            >
              <PlusCircleIcon
                style={{ width: "1.6rem", marginRight: "0.5rem" }}
              />
              Add Food
            </Button>
          </Container>
        </form>
      </div>
    </Modal>
  );
};

export default AddFoodForm;
