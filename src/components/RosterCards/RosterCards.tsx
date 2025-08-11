"use client";

import {
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";
import classes from "./RosterCards.module.css";
import rosterData from "@/data/roster.json";

export function RosterCards() {
  const cards = rosterData.map((article) => (
    <Card
      key={article.name}
      p="md"
      radius="md"
      component="a"
      className={classes.card}
    >
      <AspectRatio ratio={800 / 800}>
        <Image src={article.image} alt="image" />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.year}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.name}
      </Text>
      <Text c="dimmed" size="xs" fw={700} mt="md">
        {article.location}
      </Text>
      <Text c="dimmed" size="xs" fw={700} mt="md">
        {article.major}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{cards}</SimpleGrid>
    </Container>
  );
}