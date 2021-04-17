import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function BasicTable({rows}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Contract Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Buy Qty</TableCell>
            <TableCell align="right">Buy Price</TableCell>
            <TableCell align="right">Sell Price</TableCell>
            <TableCell align="right">Sell Qty</TableCell>
            <TableCell align="right">LTP</TableCell>
            <TableCell align="right">Net Qty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.symbol}
              </TableCell>
              <TableCell align="right">{row.series}</TableCell>
            <TableCell align="right">{row.buyQTy || "-"}</TableCell>
            <TableCell align="right">{row.lowPrice || "-"}</TableCell>
            <TableCell align="right">{row.highPrice || "-"}</TableCell>
            <TableCell align="right">{row.sellQTy || "-"}</TableCell>
            <TableCell align="right">{row.ltp || "-"}</TableCell>
            <TableCell align="right">{row.netQTy || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
