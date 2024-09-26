"use client";

import "@mantine/core/styles.css";
import { useState } from "react";
import { Container, Group, Burger, Box, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./DoubleHeader.module.css";
import Image from "next/image";
import Link from "next/link";

const userLinks = [{ link: "https://nccga.org/app/regions/new-england-region-golf-tournaments", label: "Fall '24 Calendar" }];

const mainLinks = [
  { link: "/", label: "Home" },
  { link: "/roster", label: "Roster" },
  { link: "/results", label: "Tournament Results" },
  { link: "/contact", label: "Contact" },
];

export function DoubleHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Link
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={() => setActive(index)}
    >
      {item.label}
    </Link>
  ));

  const secondaryItems = userLinks.map((item) => (
    <Link href={item.link} key={item.label} className={classes.secondaryLink} target="_blank" rel="noopener noreferrer">
      {item.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Link href="/">
            <Image
              src="/cg-logo.png"
              width={120}
              height={40}
              alt="UMass Club Golf"
              className={classes.logoImage}
            />
        </Link>
        <Box className={classes.links} visibleFrom="sm">
          <Group justify="flex-end">{secondaryItems}</Group>
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
        <Menu opened={opened} onClose={toggle}>
          <Menu.Target>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="sm"
            />
          </Menu.Target>
          <Menu.Dropdown>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {secondaryItems}
              {mainItems}
            </div>
          </Menu.Dropdown>
        </Menu>
      </Container>
    </header>
  );
}
