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
    borderWidth: 2,
    borderColor: '#0000',
    borderStyle: 'solid',
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



const rows = [
  'Occupancy',
  'Construction Type',
  'Year Built',
  'No of Floors',
  'Location Description',
];

function Property(data) {
  const classes = useStyles();
  const inputData = data?.data?.riskDetails;
  let propertyArray = [];
  if(inputData){
    inputData.map(result => {
      propertyArray.push({
      'Occupancy': result.occupancyTypeValue,
      'Construction Type': result.constructionTypeValue,
      'Year Built': result.yearBuilt,
      'No of Floors': result.noOfFloors,
      'Location Description': result.locationDescription,
      
      })
    })
  }

  return (
    <div className={classes.root}>
      <Grid container xs={10}>
        <TableContainer component={Paper} elevation={12}>
          <Table className={classes.table}>
            {inputData ? (
              <TableHead>
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
              </TableHead>
            ) : null}
            <TableBody>
              {rows.map((row,index) => (
                <TableRow key={index}>
                  <TableCell className={classes.tablerow1}>{row}</TableCell>
                  {propertyArray.map(data =>
                  <TableCell align="center" className={classes.tablerow2}>
                    {data[row]}
                  </TableCell>)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}

export default Property;
