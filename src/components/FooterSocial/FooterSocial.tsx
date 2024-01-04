import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import Image from 'next/image';
import classes from './FooterSocial.module.css';

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image src='/umasslogo.png' width={120} height={40} alt="Swinging Sam" />
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon component="a" href='https://www.instagram.com/umassclubgolf/' size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}