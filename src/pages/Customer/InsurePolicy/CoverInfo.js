import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // marginLeft: theme.spacing(12)
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
    fontSize: 14,
    width: 110,
    padding: 0,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'soild',
  },
  tablerow1: {
    fontWeight: 'bold',
    fontSize: 14,
    width: 110,
    padding: 0,
    backgroundColor: '#e9e9e9',
    borderStyle: 'hidden',
    textAlign: 'center',
  },
  tablerow2: {
    fontSize: 16,
    width: 110,
    borderStyle: 'hidden',
  },
  tablerow3: {
    fontSize: 12,
    borderStyle: 'hidden',
    backgroundColor: '#fff',
    padding: 0,
  },
  submit: {
    marginLeft: theme.spacing(140),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  input: {
    width: 600,
  },
  icon: {
    marginLeft: theme.spacing(12),
  },
}));

function createData(covername, sum_insured, expected_Rate, premium) {
  return { covername, sum_insured, expected_Rate, premium };
}

const rows = [
  createData('Fire & Lightning', 20000, '3434', 0),
  createData('Water Damage', 20000, '3434', 0),
  createData('Storm Tempest Flood', 2020, '3434', 0),
  createData('Earthquake', 10000, 20000, 0),
  createData('Sprinkler Leakage', 20000, '3434', 0),
  createData('Impact Damage', 20000, '3434', 0),
];

const CoverInfo = ({ setValues, props }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container xs={12}>
        <TableContainer component={Paper} elevation={12}>
          <Table className={classes.table} stickyHeader={true} aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colspan={3} className={classes.tablerow}>
                  Subsidiary Company, Property
                </TableCell>
                <TableCell align="center" colSpan={7} className={classes.tablerow}>
                  ABI Company, Lenov Property
                </TableCell>
                <TableCell align="center" colSpan={7} className={classes.tablerow}>
                  ABI Company, Lenov Property
                </TableCell>
              </TableRow>
            </TableHead>

            <TableHead>
              <TableRow>
                <TableCell align="center" colspan={3} className={classes.tablerow}>
                  Cover Name
                </TableCell>
                <TableCell align="center" className={classes.tablerow}>
                  Sum Insured
                </TableCell>
                <TableCell align="center" className={classes.tablerow}>
                  Expected Rate
                </TableCell>
                <TableCell align="center" className={classes.tablerow}>
                  Premium
                </TableCell>

                <TableCell align="center" colSpan={5} className={classes.tablerow}>
                  Sum Insured
                </TableCell>
                <TableCell align="center" className={classes.tablerow}>
                  Expected Rate
                </TableCell>
                <TableCell align="center" className={classes.tablerow}>
                  Premium
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell className={classes.tablerow1} colspan={3}>
                    {row.covername}
                  </TableCell>
                  <TableCell align="center" className={classes.tablerow2}>
                    <TextField
                      id="outlined-basic"
                      label="Amount"
                      variant="outlined"
                      value={row.sum_insured}
                    />
                  </TableCell>
                  <TableCell align="center" className={classes.tablerow2}>
                    <TextField
                      id="outlined-basic"
                      label="Amount"
                      variant="outlined"
                      value={row.expected_Rate}
                    />
                  </TableCell>
                  <TableCell align="center" colSpan={5} className={classes.tablerow2}>
                    <TextField
                      id="outlined-basic"
                      label="Amount"
                      variant="outlined"
                      value={row.premium}
                    />
                  </TableCell>
                  <TableCell align="center" className={classes.tablerow2}>
                    <TextField
                      id="outlined-basic"
                      label="Amount"
                      variant="outlined"
                      value={row.sum_insured}
                    />
                  </TableCell>
                  <TableCell align="center" className={classes.tablerow2}>
                    <TextField
                      id="outlined-basic"
                      label="Amount"
                      variant="outlined"
                      value={row.expected_Rate}
                    />
                  </TableCell>
                  <TableCell align="center" colSpan={5} className={classes.tablerow2}>
                    <TextField
                      id="outlined-basic"
                      label="Amount"
                      variant="outlined"
                      value={row.premium}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.tablerow} colSpan={3}>
                  Policy Level Coverage
                </TableCell>
                <TableCell align="center" className={classes.tablerow}>
                  Sum Insured
                </TableCell>
                <TableCell align="center" className={classes.tablerow}>
                  Expected Rate
                </TableCell>
                <TableCell align="center" colSpan={5} className={classes.tablerow}>
                  Premium
                </TableCell>

                <TableCell align="center" className={classes.tablerow}>
                  Sum Insured
                </TableCell>
                <TableCell align="center" className={classes.tablerow}>
                  Expected Rate
                </TableCell>
                <TableCell align="center" colSpan={5} className={classes.tablerow}>
                  Premium
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.tablerow1} colSpan={3}>
                  BI
                </TableCell>
                <TableCell align="center" className={classes.tablerow2}>
                  <TextField id="outlined-basic" label="Amount" variant="outlined" value="4345" />
                </TableCell>
                <TableCell align="center" className={classes.tablerow2}>
                  <TextField id="outlined-basic" label="Amount" variant="outlined" value="345" />
                </TableCell>
                <TableCell align="center" colSpan={5} className={classes.tablerow2}>
                  <TextField id="outlined-basic" label="Amount" variant="outlined" value="3" />
                </TableCell>

                <TableCell align="center" className={classes.tablerow2}>
                  <TextField id="outlined-basic" label="Amount" variant="outlined" value="4345" />
                </TableCell>
                <TableCell align="center" className={classes.tablerow2}>
                  <TextField id="outlined-basic" label="Amount" variant="outlined" value="4" />
                </TableCell>
                <TableCell align="center" colSpan={5} className={classes.tablerow2}>
                  <TextField id="outlined-basic" label="Amount" variant="outlined" value="45" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tablerow1} colSpan={3}>
                  Legal Liability
                </TableCell>
                <TableCell align="center" className={classes.tablerow2}>
                  <TextField id="outlined-basic" label="Amount" variant="outlined" value="4345" />
                </TableCell>
                <TableCell align="center" className={classes.tablerow2}>
                  <TextField id="outlined-basic" label="Amount" variant="outlined" value="32" />
                </TableCell>
                <TableCell align="center" colSpan={5} className={classes.tablerow2}>
                  <TextField id="outlined-basic" label="Amount" variant="outlined" value="5" />
                </TableCell>

                <TableCell align="center" className={classes.tablerow2}>
                  <TextField id="outlined-basic" label="Amount" variant="outlined" value="4345" />
                </TableCell>
                <TableCell align="center" className={classes.tablerow2}>
                  <TextField id="outlined-basic" label="Amount" variant="outlined" value="324" />
                </TableCell>
                <TableCell align="center" colSpan={5} className={classes.tablerow2}>
                  <TextField id="outlined-basic" label="Amount" variant="outlined" value="2" />
                </TableCell>
              </TableRow>
            </TableBody>

            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3} className={classes.tablerow}>
                  Deductible
                </TableCell>
                <TableCell align="center" colSpan={3} className={classes.tablerow3}>
                  <OutlinedInput className={classes.input} variant="outlined" value="4345" />
                </TableCell>
              </TableRow>
            </TableHead>

            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3} className={classes.tablerow}>
                  Remarks
                </TableCell>
                <TableCell align="center" colSpan={3} className={classes.tablerow3}>
                  <OutlinedInput className={classes.input} variant="outlined" value="4345" />
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
          <Button variant="contained" color="secondary" className={classes.submit}>
            Save
          </Button>
        </TableContainer>
      </Grid>
    </div>
  );
};

export default CoverInfo;
