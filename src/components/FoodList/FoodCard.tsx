import { Card, Image, Text, createStyles, Badge, Box } from "@mantine/core";

type Props = {
  dish: string;
  description: string;
  btnLabel?: string;
  image: string;
  rating: number;
  setClickedImage: (image: string) => void;
};

const useStyles = createStyles(() => ({
  "card-container": {
    "@keyframes slideInFromDown": {
      "0%": {
        transform: "translateY(+40%)",
        opacity: 0,
      },
      "100%": {
        transform: "translateY(0)",
        opacity: 1,
      },
    },

    animation: "slideInFromDown 0.7s ease-in-out",
  },
  card: {
    maxWidth: 350,
    height: 450,
  },

  image: {
    borderRadius: 5,
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "transform 0.3s ease",
    },
  },
}));

const FoodCard = ({
  dish,
  description,
  image,
  rating,
  setClickedImage,
}: Props) => {
  const { classes } = useStyles();

  return (
    <Box className={classes["card-container"]}>
      <Card className={classes.card} shadow="md" p="lg" radius="md">
        <Card.Section>
          <Image
            className={classes.image}
            src={`/images/food/${image}`}
            height={240}
            alt={dish}
            onClick={() => setClickedImage(`/images/food/${image}`)}
          />
        </Card.Section>

        <Text weight={500} mt="md" mb="xs" size="lg">
          {dish}
        </Text>

        <Text size="sm" color="dimmed">
          {description}
        </Text>

        <Badge color="blue" size="lg" radius="md" mt="md">
          Rating: {rating}
        </Badge>
      </Card>
    </Box>
  );
};

export default FoodCard;
