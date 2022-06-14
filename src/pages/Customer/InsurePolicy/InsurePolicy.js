import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Description from '@material-ui/icons/Description';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Assignment from '@material-ui/icons/Assignment';
import ErrorIcon from '@material-ui/icons/Error';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useSelector, useDispatch } from 'react-redux';
import Insure from '../Viewpolicy/InsureInfo/InsureInfo';
import Risk from '../Viewpolicy/Risk/Risk';
import Property from '../Viewpolicy/Property/Property';
import CoverInfo from '../InsurePolicy/CoverInfo';
import Safety from '../Viewpolicy/Safety/Safety';
import UploadDocs from '../InsurePolicy/UploadDocs';
import Term from '../../EndorsementPage/Terms'
// import CustDocs from './CustDocs/CustDocs';
import Summary from '../InsurePolicy/Summary';

import * as getQuoteService from '../../../Services/getQuoteService';
import { fetchPolicy } from '../../../actions/userPolicy';
import TermsAndCond from './TermsAndCond';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: 30,
    marginLeft: theme.spacing(10),
  },
  alert: {
    padding: 30,
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    color: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.palette.background.default,
    fontFamily: 'sans-serif',
  },
}));

function InsurePolicy(props) {
  const id = props.computedMatch.params.id;
  const [value, setValue] = React.useState('');
  const tableData = useSelector(state => state.policyReducer.activePolicy);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const radioChange = (event) => {
    setValue(event.target.value);
  };

  const dispatch = useDispatch();
  const userType = 'Customer';
  useEffect(() => {
    dispatch(fetchPolicy(id));
  }, []);

  const setValues = () => {
    let tableData;
    getQuoteService.getQuoteSubscription(id).then(res => {
      tableData = res;
    });
  };

  return (
    <div className={classes.root}>
      <Grid xs={12}>
        {/* <Alert severity="info">
          <AlertTitle>Do you like this <strong>Yes</strong> or <strong>No</strong></AlertTitle>
        </Alert> */}
        <Paper className={classes.alert} elevation={3}>
          <Grid container spacing={6} style={{ marginLeft: 10 }}>
            <Typography style={{ margin: 8 }}> Do you want to endorse this policy ?</Typography>
            <RadioGroup value={value} onChange={radioChange} style={{display: 'inline-block'}}>
            <FormControlLabel
              value="Yes"
              control={<Radio style={{ color: '#fff' }} />}
              label="Yes"
            />
            <FormControlLabel value="No" control={<Radio style={{ color: '#fff' }} />} label="No" />
            </RadioGroup>
          </Grid>
        </Paper>
      </Grid>

      {/* insure */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={8}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            {' '}
            <HowToRegIcon /> {'  '}Insured Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Insure data={tableData} />
        </AccordionDetails>
      </Accordion>

      {/* Risk */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={8}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            {' '}
            <ErrorIcon />
            {'  '}Risk Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Risk />
        </AccordionDetails>
      </Accordion>

      {/* Property */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={8}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            {' '}
            <AccountBalanceIcon />
            {'  '}Property Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Property />
        </AccordionDetails>
      </Accordion>

      {/* Cover */}
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={8}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            {' '}
            <MenuBookIcon /> Cover Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {Object.keys(tableData).length > 0 && (
            <CoverInfo setValues={setValues} props={tableData} />
          )}
        </AccordionDetails>
      </Accordion>

      {/* SafetyMeasures */}
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} elevation={8}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            {' '}
            <FingerprintIcon />
            {'  '}Safety Measures
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Safety />
        </AccordionDetails>
      </Accordion>

      {/* CostDocs */}
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} elevation={8}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            <Description />
            {'  '}
            Customer Documents
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <CustDocs /> */}
        </AccordionDetails>
      </Accordion>

          {/* Terms and Conditions */}
          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} elevation={8}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            <GroupWorkIcon />
            {'  '}
            Terms and Conditions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Term />
        </AccordionDetails>
      </Accordion>

         {/* Upload Docs */}
         <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} elevation={8}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            <CloudUploadIcon />
            {'  '}
            Upload Docs
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <UploadDocs data={tableData}/>
        </AccordionDetails>
      </Accordion>

      {/* Summary */}
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} elevation={8}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            <Assignment /> {'  '}
            Policy Summary
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {Object.keys(tableData).length > 0 && (
            <Summary summaryData={tableData} setValues={setValues} mode={userType} props={props} />
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default InsurePolicy;
