"use client";

import {
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";
import classes from "./ArticlesCardsGrid.module.css";

const roster = [
  {
    name: "Hayden Bruckner",
    location: "Franklin, MA",
    image: "",
    year: "Senior",
    major: "Molecular Biology & Biochemistry",
  },
  {
    name: "Sam Robert",
    location: "Northborough, MA",
    image: "",
    year: "Senior",
    major: "Operations & Information Management",
  },
  {
    name: "Gabe Shulefand",
    location: "Buffalo, NY",
    image: "",
    year: "Senior",
    major: "Sport Management",
  },
  {
    name: "Chris Pietrini",
    location: "Beverly, MA",
    image: "",
    year: "Junior",
    major: "Psychology",
  },
  {
    name: "Mike Pietrini",
    location: "Beverly, MA",
    image: "",
    year: "Junior",
    major: "Finance",
  },
  {
    name: "Christopher Pickreign",
    location: "Harvard, MA",
    image: "",
    year: "Junior",
    major: "Computer Science & Finance",
  },
  {
    name: "Christian Noble Shriver",
    location: "Rochester, MA",
    image: "",
    year: "Junior",
    major: "Computer Science",
  },
  {
    name: "Mike Ringie",
    location: "Holliston, MA",
    image: "",
    year: "Junior",
    major: "Molecular Biology & Biochemistry",
  },
  {
    name: "Jared Curran",
    location: "Plainville, MA",
    image: "",
    year: "Sophomore",
    major: "Finance",
  },
  {
    name: "Will Geftas",
    location: "Canton, MA",
    image: "",
    year: "Sophomore",
    major: "Finance",
  },
  {
    name: "Jack Sorenson",
    location: "Georgetown, MA",
    image: "",
    year: "Sophomore",
    major: "Hospitality & Tourism Management",
  },
  {
    name: "Phillip le Gassick",
    location: "Mattapoisett, MA",
    image: "",
    year: "Freshman",
    major: "Accounting",
  },
  {
    name: "Markus Pierre",
    location: "Marion, MA",
    image: "",
    year: "Freshman",
    major: "Business Management",
  },
];

export function ArticlesCardsGrid() {
  const cards = roster.map((article) => (
    <Card
      key={article.name}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
    >
      <AspectRatio ratio={920 / 455}>
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