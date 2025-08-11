'use client';

import cx from 'clsx';
import { useState, useMemo } from 'react';
import { Table, ScrollArea, UnstyledButton, Center, Text, rem } from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import classes from './TournamentTable.module.css';
import tournamentData from '@/data/tournaments.json';

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Center gap={5}>
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        </Center>
      </UnstyledButton>
    </Table.Th>
  );
}

type SortKey = 'name' | 'course' | 'location' | 'startDate' | 'finishNumeric' | 'toPar';

export function TournamentTable() {
  const [scrolled, setScrolled] = useState(false);
  const [sortBy, setSortBy] = useState<SortKey>('startDate');
  const [reverseSortDirection, setReverseSortDirection] = useState(true); // Start with newest first

  const setSorting = (field: SortKey) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
  };

  const sortedData = useMemo(() => {
    const sorted = [...tournamentData].sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'course':
          aValue = a.course.toLowerCase();
          bValue = b.course.toLowerCase();
          break;
        case 'location':
          aValue = a.location.toLowerCase();
          bValue = b.location.toLowerCase();
          break;
        case 'startDate':
          aValue = a.startDate;
          bValue = b.startDate;
          break;
        case 'finishNumeric':
          aValue = a.finishNumeric;
          bValue = b.finishNumeric;
          break;
        case 'toPar':
          aValue = a.toPar;
          bValue = b.toPar;
          break;
        default:
          aValue = a.startDate;
          bValue = b.startDate;
      }

      if (typeof aValue === 'string') {
        return reverseSortDirection ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
      } else {
        return reverseSortDirection ? bValue - aValue : aValue - bValue;
      }
    });

    return sorted;
  }, [sortBy, reverseSortDirection]);

  const rows = sortedData.map((row) => (
    <Table.Tr key={`${row.name}-${row.startDate}`}>
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
              <Th
                sorted={sortBy === 'startDate'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('startDate')}
              >
                Date
              </Th>
              <Th
                sorted={sortBy === 'finishNumeric'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('finishNumeric')}
              >
                Finish
              </Th>
              <Th
                sorted={sortBy === 'toPar'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('toPar')}
              >
                Team Score
              </Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </div>
  );
}