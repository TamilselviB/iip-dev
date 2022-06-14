import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Governate'),
  createData('Street'),
  createData('Block'),
  createData('Area'),
  createData('City'),
];

export default function ConfirmNewLocation() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="headclr">Subsidiary Company, Property</TableCell>
                  <TableCell align="center" className="headclr">Property1</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="rowField">
                <TableRow
                >
                  <TableCell component="th"
                    scope="row" className="cellclr">
                    Risk Info
                </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="listclr">
                    Governate
                </TableCell>
                  <TableCell align="center">
                    Gov1
                </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="listclr">
                    Street
                </TableCell>
                  <TableCell align="center">
                    Netaji Street
                </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="cellclr">
                    Property Info
                </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="listclr">
                    Occupancy
                </TableCell>
                  <TableCell align="center">
                    Commercial Building
                </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="listclr">
                    Year Built
                </TableCell>
                  <TableCell align="center">
                    2011
                </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="cellclr">
                    Coverage Details
                </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="listclr">
                    Covers
                </TableCell>
                  <TableCell align="center">
                    View Covers
                </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="listclr">
                    Total Exposure
                </TableCell>
                  <TableCell align="center">
                    View Total Exposure
                </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="cellclr">
                    Safety Measures
                </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="listclr">
                    Safety measures which you have already
                </TableCell>
                  <TableCell align="center">
                    View Safety Measures
                </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="cellclr">
                    Terms and conditions
                </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="listclr">
                    Inclusion
                </TableCell>
                  <TableCell align="center">
                    1
                </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="listclr">
                    Exclusion
                </TableCell>
                  <TableCell align="center">
                    exclusion are near by the 1st locations
                </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="cellclr">
                    Uploaded Documents
                </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th"
                    scope="row" className="listclr">
                    Document1
                </TableCell>
                  <TableCell align="center">
                    ping.jpeg
                </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid item xs={2}>
      </Grid>
      <Button variant="contained" className="btnConfirm">
        Confirm & Submit&nbsp;
       <ArrowForwardIcon />
      </Button>
    </div>
  );
}
