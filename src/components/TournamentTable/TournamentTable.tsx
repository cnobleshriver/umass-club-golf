'use client';

import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea } from '@mantine/core';
import classes from './TournamentTable.module.css';

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
  {
    name: 'New England Regional Tournament 1',
    course: 'North Kingstown Golf Course',
    location: 'North Kingstown, RI',
    date: 'Mar 23-24, 2024',
    finish: '1st',
    score: '762(+62)',
    url: 'https://nccga.org/app/golf-tournaments/6620/team-leaderboard'
  },
  {
    name: 'New England Regional Tournament 2',
    course: 'Wentworth Hills Golf Club',
    location: 'Plainville, MA',
    date: 'Mar 30, 2024',
    finish: '1st',
    score: '376(+21)',
    url: 'https://nccga.org/app/golf-tournaments/6621/team-leaderboard'
  },
  {
    name: 'New England Regional Tournament 3',
    course: 'Easton Country Club',
    location: 'South Easton, MA',
    date: 'Apr 6-7, 2024',
    finish: '1st',
    score: '372(+17)',
    url: 'https://nccga.org/app/golf-tournaments/6539/team-leaderboard'
  },
  {
    name: 'New England Regional Tournament 4',
    course: 'Acushnet River Valley Golf Course',
    location: 'Acushnet, MA',
    date: 'Apr 13-14, 2024',
    finish: '1st',
    score: '739(+19)',
    url: 'https://nccga.org/app/golf-tournaments/6539/team-leaderboard'
  },
  {
    name: 'NCCGA Nationals Spring 2024',
    course: 'WinStar World Casino and Resort, Redbud Course',
    location: 'Thackerville, OK',
    date: 'Apr 27-28, 2024',
    finish: 'T7',
    score: '380(+20)',
    url: 'https://nccga.org/app/golf-tournaments/6539/team-leaderboard'
  },
  {
    name: 'New England Regional Tournament 1',
    course: 'The Woods of Westminster',
    location: 'Westminster, MA',
    date: 'Sep 28-29, 2024',
    finish: '2nd',
    score: '723(+3)',
    url: 'https://nccga.org/app/golf-tournaments/6871/team-leaderboard'
  },
  {
    name: 'New England Regional Tournament 2',
    course: 'Hazelton Golf Club',
    location: 'Rehoboth, MA',
    date: 'Oct 19-20, 2024',
    finish: '2nd',
    score: '708(+8)',
    url: 'https://nccga.org/app/golf-tournaments/6868/team-leaderboard'
  },
  {
    name: 'New England Regional Tournament 3',
    course: 'Acushnet River Valley Golf Course',
    location: 'Acushnet, MA',
    date: 'Oct 26-27, 2024',
    finish: '2nd',
    score: '753(+33)',
    url: 'https://nccga.org/app/golf-tournaments/6867/team-leaderboard'
  },
];

const reversedData = [...data].reverse();

export function TournamentTable() {
  const [scrolled, setScrolled] = useState(false);

  const rows = reversedData.map((row) => (
    <Table.Tr key={row.date}>
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