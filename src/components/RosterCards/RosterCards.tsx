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

const roster = [
  {
    name: "Gabe Schulefand",
    location: "Buffalo, NY",
    image: "headshots/gshulefand-1.jpg",
    year: "Graduate Student",
    major: "Business Analytics",
  },
  {
    name: "Chris Pietrini",
    location: "Beverly, MA",
    image: "headshots/cpietrini-1.jpg",
    year: "Senior",
    major: "Psychology",
  },
  {
    name: "Mike Pietrini",
    location: "Beverly, MA",
    image: "headshots/mpietrini-1.jpg",
    year: "Senior",
    major: "Finance",
  },
  {
    name: "Christopher Pickreign",
    location: "Harvard, MA",
    image: "headshots/cpickreign-1.jpg",
    year: "Senior",
    major: "Computer Science & Finance",
  },
  {
    name: "Christian Noble Shriver",
    location: "Rochester, MA",
    image: "headshots/cnobleshriver-1.jpg",
    year: "Senior",
    major: "Computer Science",
  },
  {
    name: "Mike Ringie",
    location: "Holliston, MA",
    image: "headshots/mringie-1.jpg",
    year: "Senior",
    major: "Molecular Biology & Biochemistry",
  },
  {
    name: "Jack Sorensen",
    location: "Georgetown, MA",
    image: "headshots/jsorensen-1.jpg",
    year: "Senior",
    major: "Hospitality & Tourism Management",
  },
  {
    name: "Jared Curran",
    location: "Plainville, MA",
    image: "headshots/jcurran-1.jpg",
    year: "Junior",
    major: "Finance",
  },
  {
    name: "Michael Guerrera",
    location: "Farmington, CT",
    image: "headshots/mguerrera-1.jpg",
    year: "Sophomore",
    major: "Chemistry",
  },
  {
    name: "Phillip le Gassick",
    location: "Mattapoisett, MA",
    image: "headshots/plegassick-1.jpg",
    year: "Sophomore",
    major: "Accounting",
  },
  {
    name: "Markus Pierre",
    location: "Marion, MA",
    image: "headshots/mpierre-1.jpg",
    year: "Sophomore",
    major: "Business Management",
  },
  {
    name: "Ricky Gardella IV",
    location: "Rowley, MA",
    image: "headshots/rgardella-1.jpg",
    year: "Sophomore",
    major: "OIM",
  },
  {
    name: "James Erickson",
    location: "Watertown, MA",
    image: "headshots/jerickson-1.jpg",
    year: "Freshman",
    major: "Management",
  },
  {
    name: "CJ Kivlehan",
    location: "Hopedale, MA",
    image: "headshots/ckivlehan-1.jpg",
    year: "Freshman",
    major: "Marketing",
  },
];

export function RosterCards() {
  const cards = roster.map((article) => (
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