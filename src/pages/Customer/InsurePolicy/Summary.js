import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginLeft: theme.spacing(12)
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
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
    width: 110,
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
    borderStyle: 'hidden',
    
  },
  tablerow2: {
    fontSize: 16,
    borderStyle: 'hidden',
    backgroundColor: '#fff',
    color: '#000',
    width: 160,
  },
  tablerow3: {
    fontSize: 16,
    borderStyle: 'hidden',
    backgroundColor: '#fff',
    padding: 0,
 
  },
  submit : {
    marginLeft: theme.spacing(140),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  input: {
      width: 500
  },
  icon: {
    marginLeft: theme.spacing(12)
  }
}));



const Summary = ({ setValues, props }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid container xs={12}>
         <TableContainer component={Paper} elevation={12}>
       <Table className={classes.table} stickyHeader={true} aria-label="sticky table">

         <TableHead>
           <TableRow>
             <TableCell colSpan={12} className={classes.tablerow}>&nbsp;&nbsp;Summary</TableCell>
           </TableRow>
         </TableHead>

         <TableHead>
           <TableRow>
             <TableCell align="center"  className={classes.tablerow1}>Quotation Number</TableCell>
             <TableCell align="center"  className={classes.tablerow2}>
             <TextField id="outlined-basic" variant="outlined" value="345"/>
             </TableCell>
            
             <TableCell align="center" className={classes.tablerow1}>Start Date</TableCell>

             <TableCell align="center"  className={classes.tablerow2}>
             <TextField id="outlined-basic" type="date" variant="outlined" value="345"/>
             </TableCell>
             <TableCell align="center"  className={classes.tablerow1}>End Date</TableCell>
             <TableCell align="center"  className={classes.tablerow2}>
             <TextField id="outlined-basic" type="date" variant="outlined" value="345"/>
             </TableCell>
           </TableRow>
         </TableHead>

         <TableHead>
           <TableRow>
           <TableCell colSpan={12} className={classes.tablerow}>&nbsp;&nbsp;Premium Summary</TableCell>
           </TableRow>
         </TableHead>

         <TableHead>
           <TableRow>
             <TableCell align="center" colSpan={3} className={classes.tablerow}>Coverage</TableCell>
             <TableCell align="center" colSpan={5} className={classes.tablerow}>Sum Insured</TableCell>

             <TableCell align="center" colSpan={7} className={classes.tablerow}>Premium</TableCell>
           </TableRow>
         </TableHead>

         <TableBody>

             <TableRow>
            
             <TableCell colSpan={3} align="center" className={classes.tablerow1}>All Risk</TableCell>
              <TableCell colSpan={7} align="center" className={classes.tablerow2}>
              <TextField label="Amount" type="text" variant="outlined" value="50000" className={classes.input}/>
              </TableCell>
              <TableCell colSpan={5} align="center" className={classes.tablerow2}>
              <TextField id="outlined-basic" label="Amount" variant="outlined" value="3"/>
              </TableCell>
             </TableRow>

             <TableRow>
           
             <TableCell colSpan={3} align="center" className={classes.tablerow1}>Machinery Breakdown</TableCell>
              <TableCell colSpan={7} align="center" className={classes.tablerow2}>
              <TextField label="Amount" type="text" variant="outlined" value="50000" className={classes.input}/>
              </TableCell>
              <TableCell colSpan={5} align="center" className={classes.tablerow2}>
              <TextField id="outlined-basic" label="Amount" variant="outlined" value="3"/>
              </TableCell>
             </TableRow>

             <TableRow>
        
             <TableCell colSpan={3} align="center" className={classes.tablerow1}>Legal Liability</TableCell>
              <TableCell colSpan={7} align="center" className={classes.tablerow2}></TableCell>
              <TableCell colSpan={5} align="center" className={classes.tablerow2}>
              <TextField id="outlined-basic" label="Amount" variant="outlined" value="8"/>
              </TableCell>
             </TableRow>

             {/* Gross */}
             <TableRow>
             <TableCell colSpan={3} align="center" className={classes.tablerow1}>Gross Premium</TableCell>
              <TableCell colSpan={7} align="center" className={classes.tablerow2}></TableCell>
              <TableCell colSpan={5} align="center" className={classes.tablerow2}>
              <TextField id="outlined-basic" label="Amount" variant="outlined" value="30"/>
              </TableCell>
             </TableRow>

             <TableRow>
             <TableCell colSpan={3} align="center" className={classes.tablerow1}>Discount</TableCell>
              <TableCell colSpan={7} align="center" className={classes.tablerow2}></TableCell>
              <TableCell colSpan={5} align="center" className={classes.tablerow2}>
              <TextField id="outlined-basic" label="Amount" variant="outlined" value="5"/>
              </TableCell>
             </TableRow>

             <TableRow>
             <TableCell colSpan={3} align="center" className={classes.tablerow1}>GST/VAT/Tax</TableCell>
              <TableCell colSpan={7} align="center" className={classes.tablerow2}></TableCell>
              <TableCell colSpan={5} align="center" className={classes.tablerow2}>
              <TextField id="outlined-basic" label="Amount" variant="outlined" value="21"/>
              </TableCell>
             </TableRow>

             <TableRow>
             <TableCell colSpan={3} align="center" className={classes.tablerow1}>Net Premium</TableCell>
              <TableCell colSpan={7} align="center" className={classes.tablerow2}></TableCell>
              <TableCell colSpan={5} align="center" className={classes.tablerow2}>
              <TextField id="outlined-basic" label="Amount" variant="outlined" value="54"/>
              </TableCell>
             </TableRow>
         </TableBody>
       </Table>
       <Button variant="contained" color="secondary" className={classes.submit}>
              Submit
            </Button>
     </TableContainer>
       </Grid>
   </div>
  );
};

export default Summary;
