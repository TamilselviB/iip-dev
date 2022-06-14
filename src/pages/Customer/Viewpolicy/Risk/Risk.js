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
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { nameRisk } from '../../../../utils/utils'

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
  icon: {
    marginLeft: theme.spacing(12),
  },
}));



function Risk(data) {
  const classes = useStyles();
  const inputData = data?.data?.riskDetails;
  console.log(inputData);
  let rowRisk = [];

  if (inputData) {
    inputData.map(result => {
      rowRisk.push({
        Country: result.countryValue,
        Governate: result.address.propertyGovernate,
        Block: result.address.propertyBlock,
        Street: result.address.propertyStreet,
        Area: result.address.propertyArea,
        City: result.address.propertyCity,
        Geocode: result.address.geoCode,
      });
    });
  }

  return (
    <div className={classes.root}>
      <Grid container xs={10}>
        <TableContainer component={Paper} elevation={12} style={{ display: 'inline-grid' }}>
          <Table className={classes.table}>
            <TableHead>
              {inputData ? (
                <TableRow>
                  <TableCell align="center" className={classes.tablerow}>
                    Subsidiary Company, Property
                  </TableCell>
                  {inputData.map(data => (
                    <TableCell align="center" className={classes.tablerow}>
                      {data.subsidiaryCompany}, {data.propertyName}
                    </TableCell>
                  ))}
                </TableRow>
              ) : null}
            </TableHead>
            <TableBody>
              {nameRisk.map((row,index) => (
                <TableRow key={index}>
                  <TableCell className={classes.tablerow1}>{row}</TableCell>
                  {rowRisk.map(data => 
                  <TableCell align="center" className={classes.tablerow2}>
                    {data[row]}
                  </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}

export default Risk;
