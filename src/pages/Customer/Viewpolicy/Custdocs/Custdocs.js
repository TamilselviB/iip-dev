import React, { useEffect } from 'react';
import TableInfo from '../../../../components/pages/Customer/TableInfo';
import RiskColumns from '../../../../columns/RiskColumns';
import '../../../../components/pages/Customer/TableSub.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: theme.spacing(12),
  },
  table: {
    minWidth: 650,
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
    fontSize: 18,
    padding: 0,
    borderWidth: 2,
    borderColor: '#0000',
    borderStyle: 'solid',
  },
  tablerow1: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 20,
    borderStyle: 'hidden',
  },
  tablerow2: {
    fontSize: 16,
    borderStyle: 'hidden',
  },
}));

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData('Property Info', '='),
  createData('Previous Policy', '='),
  createData('Property', '='),
];

function CustDocs(data) {
  const classes = useStyles();
  // const inputData = data?.data?.quote?.riskDetails;
  // const columns1 = React.useMemo(() => RiskColumns, []);
  // const tableData = React.useMemo(() => inputData, [inputData]);

  return (
    <div className={classes.root}>
      <Grid container xs={8}>
        <TableContainer component={Paper} elevation={12}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.tablerow}>
                  Subsidiary Company, Property
                </TableCell>
                <TableCell align="center" className={classes.tablerow}>
                  ABI Company, Lenov Property
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell className={classes.tablerow1}>{row.name}</TableCell>
                  <TableCell align="center" className={classes.tablerow2}>
                    {row.calories}
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

export default CustDocs;
