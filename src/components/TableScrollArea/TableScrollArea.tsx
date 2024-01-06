'use client';

import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea } from '@mantine/core';
import classes from './TableScrollArea.module.css';

const data = [
  {
    name: 'New England Regional Tournament 2',
    course: 'Juniper Hill Golf Course',
    location: 'Northborough, MA',
    date: 'Sep 24, 2023',
    finish: '1st',
    score: '377(+22)',
    url: 'https://nccga.org/app/golf-tournaments/6308/team-leaderboard'
  },
  {
    name: 'New England Regional Tournament 3',
    course: 'Wentworth Hills Golf Club',
    location: 'Plainville, MA',
    date: 'Sep 30, 2023',
    finish: '1st',
    score: '371(+16)',
    url: 'https://nccga.org/app/golf-tournaments/6294/team-leaderboard'
  },
  {
    name: 'New England Regional Tournament 4',
    course: 'Hazelton Golf Club',
    location: 'Rehoboth, MA',
    date: 'Oct 7-8, 2023',
    finish: '3rd',
    score: '753(+43)',
    url: 'https://nccga.org/app/golf-tournaments/6302/team-leaderboard'
  },
  {
    name: 'New England Regional Tournament 5',
    course: 'Heritage Country Club',
    location: 'Charlton, MA',
    date: 'Oct 15, 2023',
    finish: '3rd',
    score: '379(+24)',
    url: 'https://nccga.org/app/golf-tournaments/6295/team-leaderboard'
  },
  {
    name: 'NCCGA Nationals Fall 2023',
    course: 'Dancing Rabbit',
    location: 'Choctaw, MS',
    date: 'Nov 11-12, 2023',
    finish: 'T6',
    score: '758(+38)',
    url: 'https://hpe.golfgenius.com/pages/10042597319951560438'
  },
];

export function TableScrollArea() {
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>
        <a href={row.url} target="_blank" rel="noopener noreferrer">{row.name}</a>
      </Table.Td>
      <Table.Td>{row.course}</Table.Td>
      <Table.Td>{row.location}</Table.Td>
      <Table.Td>{row.date}</Table.Td>
      <Table.Td>{row.finish}</Table.Td>
      <Table.Td>{row.score}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <ScrollArea h='80vh' onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Table miw={700} verticalSpacing='lg' highlightOnHover>
          <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
            <Table.Tr>
              <Table.Th>Tournament Name</Table.Th>
              <Table.Th>Course</Table.Th>
              <Table.Th>Location</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Finish</Table.Th>
              <Table.Th>Team Score</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </div>
  );
}