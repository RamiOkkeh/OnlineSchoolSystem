import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Paper, TextField} from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#4caf50',
    color: theme.palette.common.white,
    textAlign: 'center'
  },
  body: {
    fontSize: 14,
    textAlign: 'center'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name:any, eight:any, nine :any, ten :any, eleven:any, twelve :any, one :any ,two:any) {
  return { name, eight, nine, ten,eleven,twelve,one,two };
}

const rows = [
  createData('Sunday', <TextField/>, <TextField/>, <TextField/>, <TextField/>, <TextField/>, <TextField/>, <TextField/>),
  createData('Mounday', <TextField/>, <TextField/>, <TextField/>, <TextField/>, <TextField/>, <TextField/>, <TextField/>),
  createData('tuesday', <TextField/>, <TextField/>, <TextField/>,<TextField/>, <TextField/>, <TextField/>, <TextField/>),
  createData('wednesday', <TextField/>, <TextField/>, <TextField/>, <TextField/>,<TextField/>,<TextField/>,<TextField/>),
  createData('thursday', <TextField/>, <TextField/>, <TextField/>, <TextField/>, <TextField/>, <TextField/>, <TextField/>),
];

const useStyles = makeStyles({
  table: {
    // minWidth: 700,
  },
});

export default function SchedulePrincipal() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} style={{backgroundColor:"#20A10630", width:"800px" , marginLeft:"20rem" , marginTop:"6rem"}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Day </StyledTableCell>
            <StyledTableCell align="right">8-9</StyledTableCell>
            <StyledTableCell align="right">9-10</StyledTableCell>
            <StyledTableCell align="right">10-11</StyledTableCell>
            <StyledTableCell align="right">11-12</StyledTableCell>
            <StyledTableCell align="right">12-1</StyledTableCell>
            <StyledTableCell align="right">1-2</StyledTableCell>
            <StyledTableCell align="right">2-3</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell >
              <StyledTableCell align="right" style={{paddingBottom:"3rem"}}>{row.eight}</StyledTableCell>
              <StyledTableCell align="right" style={{paddingBottom:"3rem"}}>{row.nine}</StyledTableCell>
              <StyledTableCell align="right" style={{paddingBottom:"3rem"}}>{row.ten}</StyledTableCell>
              <StyledTableCell align="right" style={{paddingBottom:"3rem"}}>{row.eleven}</StyledTableCell>
              <StyledTableCell align="right" style={{paddingBottom:"3rem"}}>{row.twelve}</StyledTableCell>
              <StyledTableCell align="right" style={{paddingBottom:"3rem"}}>{row.one}</StyledTableCell>
              <StyledTableCell align="right" style={{paddingBottom:"3rem"}}>{row.two}</StyledTableCell>


            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



// createData('Sunday', <TextField/>, 6.0, 24, 4.0, 5, 6, 7),