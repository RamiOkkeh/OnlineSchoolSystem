import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(
  name: any,
  eight: any,
  nine: any,
  ten: any,
  eleven: any,
  twelve: any,
  one: any,
  two: any
) {
  return { name, eight, nine, ten, eleven, twelve, one, two };
}

const rows = [
  createData(
    "Sunday",
    "Arbic",
    "English",
    "Math",
    "physics",
    "Break",
    "chimestery",
    "religon"
  ),
  createData(
    "Mounday",
    "English",
    "chimestery",
    "religon",
    "physics",
    "Break",
    "Arbic",
    "sport"
  ),
  createData(
    "tuesday",
    "Math",
    "religon",
    "English",
    "chimestery",
    "Break",
    "physics",
    "Arbic"
  ),
  createData(
    "wednesday",
    "Arbic",
    "physics",
    "Math",
    "religon",
    "Break",
    "English",
    "chimestery"
  ),
  createData(
    "thursday",
    "Arbic",
    "Math",
    "chimestery",
    "physics",
    "Break",
    "religon",
    "English"
  ),
];

const useStyles = makeStyles({
  table: {
    // minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        style={{ width: "800px", marginLeft: "20rem", marginTop: "12rem" }}
        aria-label="customized table"
      >
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
              </StyledTableCell>
              <StyledTableCell align="right">{row.eight}</StyledTableCell>
              <StyledTableCell align="right">{row.nine}</StyledTableCell>
              <StyledTableCell align="right">{row.ten}</StyledTableCell>
              <StyledTableCell align="right">{row.eleven}</StyledTableCell>
              <StyledTableCell align="right">{row.twelve}</StyledTableCell>
              <StyledTableCell align="right">{row.one}</StyledTableCell>
              <StyledTableCell align="right">{row.two}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// createData('Sunday', <TextField/>, 6.0, 24, 4.0, 5, 6, 7),
