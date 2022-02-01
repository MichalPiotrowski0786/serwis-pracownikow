import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontSize: 20
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  },
}));

function List({lastEntry}) {
  const employees = [
    {n: "John",s: "Wilcox",j: "CEO", l: "DE"},
    {n: "Jack",s: "Captain",j: "MG", l: "CZ"},
    {n: "Artur",s: "Kowalski",j: "SC", l: "PL"},
    {n: "Anna",s: "Falarowska",j: "INT", l: "UK"},
    {n: "Pierre",s: "Buchet",j: "C", l: "FR"},
  ];
  return (
    <TableContainer component={Paper} sx={{ mt: 5}}>
      <Table sx={{ minWidth: 700}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"><b>Name</b></StyledTableCell>
            <StyledTableCell align="center"><b>Surname</b>&nbsp;</StyledTableCell>
            <StyledTableCell align="center"><b>Title</b>&nbsp;</StyledTableCell>
            <StyledTableCell align="center"><b>Location</b>&nbsp;</StyledTableCell>
            <StyledTableCell align="center"><b>Edit</b>&nbsp;</StyledTableCell>
            <StyledTableCell align="center"><b>Delete</b>&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((e) => (
            <TableRow
              key={e.n}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{e.n}</TableCell>
              <TableCell align="center">{e.s}</TableCell>
              <TableCell align="center">{e.j}</TableCell>
              <TableCell align="center">{e.l}</TableCell>
              <TableCell align="center"><EditIcon/></TableCell>
              <TableCell align="center"><ClearIcon
                onClick={() => {
                  let selectedRecord = employees.indexOf(e);
                  console.log(selectedRecord);
                  employees.splice(selectedRecord,1);
                  alert(`Removed employee from database: ${e.n} ${e.s}`);
                  window.location.reload(false);
                }}
                >
                </ClearIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;