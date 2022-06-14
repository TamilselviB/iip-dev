import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { DDMMYY } from '../../utils/utils';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: 20,
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    color: theme.palette.text.secondary,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
  },
  heading: {
    margin: 22,
    color: '#000',
  },
  link: {
    color: 'blue',
  },
  btn1: {
    color: 'white',
    margin: theme.spacing(0.5),
  },
  btn2: {
    color: 'white',
    margin: theme.spacing(0.5),
  },
  view: {
    marginLeft: theme.spacing(12),
  },
  adjusterHeader: {
    backgroundColor: theme.palette.background.default,
    color: 'white',
    padding: 0,
  },
}));

function ClaimDetails({ claim }) {
  const classes = useStyles();
  const userType = useSelector(state => state.authReducer.userType);
  const [closeResults] = React.useState(true);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={6}>
          <Grid item xs={12} className={classes.adjusterHeader}>
            <Grid>
              <Typography variant="h6" align="left">
                Claim Details
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography className={classes.title}>Risks Associated For:</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography>{claim?.riskDetails[0]} </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.view}
              startIcon={<AssignmentIcon />}
            >
              View Policy
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <Typography className={classes.title}>Claim reference no:</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography>{claim.claimRefNumber}</Typography>
          </Grid>
        </Grid>
        {claim.claimNumber && (
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.title}>Claim no:</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography>{claim.claimNumber}</Typography>
            </Grid>
          </Grid>
        )}
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <Typography className={classes.title}>Claim Intimation Date:</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography>{DDMMYY(claim.claimIntimationDate)}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <Typography className={classes.title}>Tentative Loss date:</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography>{DDMMYY(claim.lossDate)}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <Typography className={classes.title}>Description of Loss:</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography>{claim.descriptionOfLoss}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <Typography className={classes.title}>Documents uploaded by Customer:</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            {claim.documents.length > 0 &&
              claim.documents.map(c => (
                <a href={c.location} target="_blank" download>
                  {c.name}
                </a>
              ))}
          </Grid>
        </Grid>
      </Paper>

      {closeResults &&
        userType === 'Insurance' &&
        (claim.status?.name === 'verifiedByAdjuster' || claim.status?.name === 'claimApproved') && (
          <Paper className={classes.paper}>
            <Grid container spacing={6}>
              <Grid item xs={12} className={classes.adjusterHeader}>
                <Grid>
                  <Typography variant="h6" align="left">
                    Details Provided By Adjuster
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={6} style={{ paddingTop: 10 }}>
              <Grid item xs={12} sm={4}>
                <Typography className={classes.title}>Adjuster Remarks:</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography>{claim?.adjusterRemarks}</Typography>
              </Grid>
            </Grid>

            <Grid container spacing={6}>
              <Grid item xs={12} sm={4}>
                <Typography className={classes.title}>Adjuster Documents:</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                {claim.adjusterDocuments.length > 0 &&
                  claim.adjusterDocuments.map((c, index) => (
                    <Typography>
                      {' '}
                      <a href={c.location} target="_blank" download>
                        {index + 1}. {c.name}
                      </a>
                    </Typography>
                  ))}
              </Grid>
            </Grid>
          </Paper>
        )}
      {/* <ClaimTabs/> */}
    </div>
  );
}

export default React.memo(ClaimDetails);
