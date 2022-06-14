import React from 'react';
import TableCovers from '../../../../components/pages/Customer/TableCovers';
import '../../../../components/pages/Customer/TableSub.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { dateStringFormat, numberFormatUSFormat } from '../../../../utils/utils';

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
    padding: 0,
    backgroundColor: '#e9e9e9',
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'soild',
  },
  tablerow2: {
    fontSize: 16,
    borderStyle: 'hidden',
    backgroundColor: '#fff',
    color: '#000',
    marginLeft: -22,
  },
  tablerow3: {
    fontSize: 16,
    borderStyle: 'hidden',
    backgroundColor: '#fff',
    padding: 0,
  },
  tablerow4: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 0,
    backgroundColor: '#e9e9e9',
    borderWidth: 0,
    borderColor: '#e9e9e9',
  },
  icon: {
    marginLeft: theme.spacing(12),
  },
}));

const Summary = data => {
  console.log(data);
  const policyNumber = data?.data?.policyNumber;
  const quotationNumber = data?.data?.quotationNumber;
  const startdate = data?.data?.startDate;
  const enddate = data?.data?.endDate;
  const discount = data?.data?.premiumAmount?.discount;
  const fees = data?.data?.premiumAmount?.fees;
  const gstax = data?.data?.premiumAmount?.gstVatTax;

  const netPremium = data?.data?.premiumAmount?.netPremium;

  let combArray = [];
  const riskDetails = data?.data?.riskDetails;
  riskDetails.map(array => {
    console.log('array', array);
    combArray = combArray.concat(array.covers);
  }, {});
  console.log('combArray', combArray);
  if (discount === null) {
    discount = 0;
  }
  if (gstax === null) {
    gstax = 0;
  }
  if (netPremium === null) {
    netPremium = 0;
  }

  var dict = Object.create(null);

  var result = combArray.reduce(function (arr, o) {
    var current = dict[o.coverName];
    if (!o.isPolicyLevel) {
      if (!current) {
        current = Object.assign({}, o);
        current.isDefault = current.isDefault || o.isDefault ? true : false;
        arr.push(current);

        dict[o.coverName] = current;
      } else if (!current.isPolicyLevel) {
        current.sumAssured = (parseInt(current.sumAssured) || 0) + (parseInt(o.sumAssured) || 0);
        current.coverPremium =
          (parseInt(current.coverPremium) || 0) + (parseInt(o.coverPremium) || 0);
        current.isDefault = current.isDefault || o.isDefault ? true : false;
        dict[o.coverName] = current;
      }
    }
    return arr;
  }, []);
  result = [...result, ...data?.data?.policyLevelCover];
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container xs={12}>
        <TableContainer component={Paper} elevation={12}>
          <Table className={classes.table} stickyHeader={true} aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell colSpan={12} className={classes.tablerow}>
                  &nbsp;&nbsp;Summary
                </TableCell>
              </TableRow>
            </TableHead>

            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.tablerow1}>
                  Policy Number
                </TableCell>
                <TableCell align="center" className={classes.tablerow2}>
                  {policyNumber}
                </TableCell>
                <TableCell align="center" className={classes.tablerow1}>
                  Quotation Number
                </TableCell>
                <TableCell align="center" colSpan={5} className={classes.tablerow2}>
                  {quotationNumber}
                </TableCell>
                <TableCell align="center" className={classes.tablerow1}>
                  Start Date
                </TableCell>

                <TableCell align="center" className={classes.tablerow2}>
                  {dateStringFormat(startdate)}
                </TableCell>
                <TableCell align="center" className={classes.tablerow1}>
                  End Date
                </TableCell>
                <TableCell align="center" className={classes.tablerow2}>
                  {dateStringFormat(enddate)}
                </TableCell>
              </TableRow>
            </TableHead>

            <TableHead>
              <TableRow>
                <TableCell colSpan={12} className={classes.tablerow}>
                  &nbsp;&nbsp;Premium Summary
                </TableCell>
              </TableRow>
            </TableHead>

            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3} className={classes.tablerow}>
                  Coverage
                </TableCell>
                <TableCell align="center" colSpan={7} className={classes.tablerow}>
                  Sum Insured
                </TableCell>

                <TableCell align="center" colSpan={2} className={classes.tablerow}>
                  Premium
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {result.map(array => {
                return array.isDefault ? (
                  <TableRow>
                    <TableCell colSpan={3} className={classes.tablerow1}>
                      &nbsp;&nbsp;{array.coverName}
                    </TableCell>
                    <TableCell colSpan={7} align="center" className={classes.tablerow2}>
                      {numberFormatUSFormat(array.sumAssured)}
                    </TableCell>
                    <TableCell colSpan={5} align="center" className={classes.tablerow2}>
                      {numberFormatUSFormat(array.coverPremium)}
                    </TableCell>
                  </TableRow>
                ) : null;
              })}

              {/* Gross */}
              <TableRow>
                <TableCell colSpan={4} align="center" className={classes.tablerow4}></TableCell>
                <TableCell align="center" className={classes.tablerow4} colSpan={6}>
                  <Typography style={{ fontWeight: 'bold' }}>Gross Premium</Typography>
                </TableCell>
                <TableCell colSpan={8} align="center" className={classes.tablerow2}>
                  {numberFormatUSFormat(data.data.grossPremium)}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={4} align="center" className={classes.tablerow4}></TableCell>
                <TableCell align="center" className={classes.tablerow4} colSpan={6}>
                  <Typography style={{ fontWeight: 'bold', marginRight: 45 }}>Discount</Typography>
                </TableCell>

                <TableCell colSpan={8} align="center" className={classes.tablerow2}>
                  {discount}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={4} align="center" className={classes.tablerow4}></TableCell>
                <TableCell align="center" className={classes.tablerow4} colSpan={6}>
                  <Typography style={{ fontWeight: 'bold', marginLeft: 56 }}>
                    Loading/Charges/Fees
                  </Typography>
                </TableCell>

                <TableCell colSpan={8} align="center" className={classes.tablerow2}>
                  {fees}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={4} align="center" className={classes.tablerow4}></TableCell>
                <TableCell align="center" className={classes.tablerow4} colSpan={6}>
                  <Typography style={{ fontWeight: 'bold', marginRight: 12 }}>
                    GST/VAT/Tax
                  </Typography>
                </TableCell>

                <TableCell colSpan={8} align="center" className={classes.tablerow2}>
                  {gstax}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={4} align="center" className={classes.tablerow4}></TableCell>
                <TableCell align="center" className={classes.tablerow4} colSpan={6}>
                  <Typography style={{ fontWeight: 'bold', marginRight: 14 }}>
                    Net Premium
                  </Typography>
                </TableCell>
                <TableCell colSpan={8} align="center" className={classes.tablerow2}>
                  {netPremium}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
};

export default Summary;
