import { Card, Image, Text, createStyles, Badge } from "@mantine/core";

type Props = {
  title: string;
  description: string;
  btnLabel?: string;
  image: string;
  rating: number;
};

const useStyles = createStyles(() => ({
  card: {
    maxWidth: 350,
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

const FoodCard = ({ title, description, image, rating }: Props) => {
  const { classes } = useStyles();
  return (
    <Card className={classes.card} shadow="md" p="lg" radius="md">
      <Card.Section>
        <Image className={classes.image} src={image} height={240} alt={title} />
      </Card.Section>

      <Text weight={500} mt="md" mb="xs" size="lg">
        {title}
      </Text>

      <Text size="sm" color="dimmed">
        {description}
      </Text>

      <Badge color="blue" size="lg" radius="md" mt="md">
        Rating: {rating}
      </Badge>
    </Card>
  );
};

export default FoodCard;
