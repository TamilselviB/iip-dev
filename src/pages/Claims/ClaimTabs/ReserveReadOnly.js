import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderColor: 'black',
  },
  tablerow: {
    backgroundColor: '#35baf6',
    color: theme.palette.common.white,
    fontSize: 16,
    padding: 0,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'soild',
  },
  tablerow1: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 20,
    backgroundColor: '#e9e9e9',
    borderStyle: 'hidden',
  },
  tablerow2: {
    fontSize: 16,
    borderStyle: 'hidden',
  },
}));

function ReserveReadOnly({ lossReserve }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container xs={12}>
        <TableContainer component={Paper} elevation={12} style={{ display: 'inline-grid' }}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.tablerow}>
                  ID
                </TableCell>
                <TableCell align="center" className={classes.tablerow}>
                  Cover Name
                </TableCell>
                <TableCell align="center" className={classes.tablerow}>
                  Parties
                </TableCell>
                <TableCell align="center" className={classes.tablerow}>
                  Amount
                </TableCell>
                <TableCell align="center" className={classes.tablerow}>
                  Deductibles
                </TableCell>
                <TableCell align="center" className={classes.tablerow} sortDirection="desc">
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lossReserve.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className={classes.tablerow2}>{index + 1}</TableCell>
                  <TableCell className={classes.tablerow1}>{row.cover}</TableCell>
                  <TableCell align="center" className={classes.tablerow2}>
                    {row.parties}
                  </TableCell>
                  <TableCell align="center" className={classes.tablerow2}>
                    {row.amount}
                  </TableCell>
                  <TableCell align="center" className={classes.tablerow2}>
                    {row.payamount}
                  </TableCell>
                  <TableCell align="center" className={classes.tablerow2} sortDirection="desc">
                    {row.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}

export default ReserveReadOnly;
