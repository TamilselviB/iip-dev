import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import DoneIcon from '@material-ui/icons/Done';
import ClaimsTimeline from './ClaimsForm/ClaimsTimeline';
import Approve from './ClaimsForm/Approve';
import { getClaim } from '../../Services/claimService';
import { DDMMYY } from '../../utils/utils';
import { showSpinner, hideSpinner } from '../../actions/common';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: 30,
    marginLeft: theme.spacing(10),
  },
  accordion: {
    marginBottom: 20,
    borderRadius: 5,
    border: '1px solid white',
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
    flexBasis: '90.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'bold',
  },
  secondaryContent: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accepted: {
    marginRight: theme.spacing(25),
    marginBottom: theme.spacing(4),
  },
  paper: {
    margin: 5,
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
    backgroundImage: 'linear-gradient(to right,rgb(39, 39, 62) ,#302b63 ,#24243e )',
  },
  title: {
    fontSize: 16,
    fontFamily: 'sans-serif',
    fontWeight: 700,
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#efff00',
    fontWeight: 'bold',
  },
  icon: {
    backgroundColor: theme.palette.background.iipButton,
    color: '#fff',
    borderRadius: 20,
    fontSize: 30,
    '&:hover ': {
      backgroundColor: '#000',
    },
  },
  chip: {
    backgroundColor: theme.palette.background.iipButton,
    color: '#fff',
  },
}));

function ViewClaims(props) {
  const { computedMatch } = props;
  const { params } = computedMatch;
  const dispatch = useDispatch();

  const userType = useSelector(state => state.authReducer.userType);
  const [closeResults] = React.useState(true);
  const [refresh, setRefresh] = React.useState(false);
  const [claim, setClaim] = React.useState({});
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const updatePage = () => {
    setRefresh(prev => !prev);
  };

  useEffect(() => {
    async function getData() {
      dispatch(showSpinner());
      const data = await getClaim(params.id);
      console.log('---->data', data);
      dispatch(hideSpinner());
      setClaim(data);
    }

    getData();
  }, [params.id, refresh]);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {Object.keys(claim).length > 10 && claim && (
        <>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={3} className={classes.grid}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item xs>
                    <Typography className={classes.title}>Request ID</Typography>
                    <Typography className={classes.description}>
                      {claim?.policy?.requestId}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={3} className={classes.grid}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item xs>
                    <Typography className={classes.title}>Insured Name</Typography>
                    <Typography className={classes.description}>
                      {claim?.policy?.insuredName}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={3} className={classes.grid}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item xs>
                    <Typography className={classes.title}>Policy Period (from - to)</Typography>
                    <Typography className={classes.description}>
                      {' '}
                      {DDMMYY(claim.policy?.startDate)}- {DDMMYY(claim.policy?.endDate)}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={3} className={classes.grid}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item xs>
                    <Typography className={classes.title}>Risk Details</Typography>
                    <Typography className={classes.description}>Property All Risks</Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={3} className={classes.grid}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item xs>
                    <Typography className={classes.title}>Tentative Loss Date</Typography>
                    <Typography className={classes.description}>
                      {DDMMYY(claim.lossDate)}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={3} className={classes.grid}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item xs>
                    <Typography className={classes.title}>Intimation Date</Typography>
                    <Typography className={classes.description}>
                      {DDMMYY(claim.claimIntimationDate)}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

          <Grid xs={12}>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              elevation={8}
              className={classes.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.icon} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>
                  {' '}
                  {'  '}Latest Claim Request{' '}
                  {closeResults && (
                    <Chip
                      label={claim?.status?.name}
                      className={classes.chip}
                      icon={<DoneIcon style={{ color: '#fff' }} />}
                    />
                  )}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Raised Date
                  <Typography className={classes.secondaryContent}>12/09/2020</Typography>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Approve claim={claim} updatePage={updatePage} />
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
              elevation={8}
              className={classes.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.icon} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>
                  {' '}
                  {'  '}Claim History{' '}
                  <Chip
                    label={claim?.status?.name}
                    className={classes.chip}
                    icon={<DoneIcon style={{ color: '#fff' }} />}
                  />
                </Typography>{' '}
                <Typography className={classes.secondaryHeading}>
                  Raised Date
                  <Typography className={classes.secondaryContent}>12/09/2020</Typography>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {claim && Object.keys(claim).length > 0 && (
                  <ClaimsTimeline timeline={claim.claimProcess} />
                )}
              </AccordionDetails>
            </Accordion>

            {/* <ClaimTabs/> */}
          </Grid>
        </>
      )}
    </div>
  );
}

export default ViewClaims;
