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
import Assignment from '@material-ui/icons/Assignment';
import ErrorIcon from '@material-ui/icons/Error';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import HistoryIcon from '@material-ui/icons/History';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useSelector, useDispatch } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Insure from './InsureInfo/InsureInfo';
import Risk from './Risk/Risk';
import Property from './Property/Property';
import CoverInfo from './CoverInfo/CoverInfo';
import Safety from './Safety/Safety';
// import CustDocs from './CustDocs/CustDocs';
import Summary from './Summary/Summary';
import EndorseModal from '../../../components/Modal/EndorseModal';
import TimeLineView from './TimelineView';
import * as getQuoteService from '../../../Services/getQuoteService';
import { fetchPolicy } from '../../../actions/userPolicy';
import ClaimModal from '../../../components/Modal/ClaimModal';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: 10,
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
  modal: {
    marginBottom: theme.spacing(2),
  },
}));

function Viewpolicy(props) {
  const id = props.computedMatch.params.id;
  const [value, setValue] = React.useState(false);
  const tableData = useSelector(state => state.policyReducer.activePolicy);
  const userId = useSelector(state => state.authReducer.userId);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const radioChange = value => {
    // if(typeof(event)=='string')
    //   setValue(event);
    // else
    //   setValue(event.target.value);
    setValue(value);
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
      <Grid container justify="flex-end" className={classes.modal}>
        <Tooltip title="Request Endorsement">
          <Button
            onClick={() => {
              radioChange(true);
            }}
            style={{ marginRight: '5px' }}
            variant="contained"
            color="primary"
          >
            Request Endorsement
          </Button>
        </Tooltip>
        <ClaimModal
          id={id}
          userId={userId}
          companyId={tableData.companyId}
          riskDetails={tableData.riskDetails}
        />
      </Grid>
      <Grid xs={12}>
        {/* <Alert severity="info">
          <AlertTitle>Do you like this <strong>Yes</strong> or <strong>No</strong></AlertTitle>
        </Alert> */}
        {/* <Paper className={classes.alert} elevation={3}> */}
        {/* <Grid container spacing={6} style={{ marginLeft: 10 }}> */}
        {/* <Typography style={{ margin: 8 }}> Do you want to endorse this policy ?</Typography>
            <RadioGroup value={value} onChange={radioChange} style={{display: 'inline-block'}}>
            <FormControlLabel
              value="Yes"
              control={<Radio style={{ color: '#fff' }} />}
              label="Yes"
            />
            <FormControlLabel value="No" control={<Radio style={{ color: '#fff' }} />} label="No" />
            </RadioGroup> */}
        {value ? <EndorseModal id={id} radioChange={radioChange} /> : null}
        {/* </Grid> */}
        {/* </Paper> */}
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
          <Risk data={tableData} />
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
          <Property data={tableData} />
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
          <CoverInfo data={tableData} />
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
          <Safety data={tableData} />
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
            Policy Documents
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{/* <CustDocs /> */}</AccordionDetails>
      </Accordion>

      {/* Summary */}
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} elevation={8}>
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
          {Object.keys(tableData).length > 0 && <Summary data={tableData} />}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} elevation={8}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            <HistoryIcon />
            {'  '}
            History
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TimeLineView />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Viewpolicy;
