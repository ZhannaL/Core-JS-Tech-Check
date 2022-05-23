import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { useState } from 'react';
import './eventDelegation.css';

const tableCellStyle = {
  width: '90px',
  height: '90px',
  border: '2px solid #afd3e1',
} as const;

function createData(calories: number, fat: number, carbs: number, protein: number) {
  return { calories, fat, carbs, protein };
}

const rows = [
  createData(159, 60, 24, 893),
  createData(237, 90, 371, 43),
  createData(262, 160, 24, 60),
  createData(305, 37, 67, 43),
];

const eventDelegation = (event: Element, prevTarget: Element) => {
  function highlight(td: Element) {
    if (prevTarget) {
      prevTarget.classList.remove('highlight');
    }
    td.classList.add('highlight');
  }

  const target = event.target;
  if (target.tagName != 'TD') return;
  highlight(target);
};

export const EventDelegation = () => {
  const [prevTarget, setPrevTarget] = useState<EventTarget | null>(null);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography component="div" color="primary" variant="h5" align="center">
        <Box lineHeight={2} fontWeight="fontWeightBold" pb={3}>
          Event Delegation
        </Box>
      </Typography>
      <Table
        sx={{ width: 'fit-content' }}
        onClick={(event) => {
          setPrevTarget(event.target);
          eventDelegation(event, prevTarget);
        }}
      >
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={tableCellStyle} align="center">
                {row.calories}
              </TableCell>
              <TableCell sx={tableCellStyle} align="center">
                {row.fat}
              </TableCell>
              <TableCell sx={tableCellStyle} align="center">
                {row.carbs}
              </TableCell>
              <TableCell sx={tableCellStyle} align="center">
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
