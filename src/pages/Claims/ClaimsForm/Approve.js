import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import { Typography } from '@material-ui/core';
import { withRouter } from 'react-router';
import ClaimDetails from '../ClaimDetails';
import AssesorForm from './AssessorForm';
import SwitchComponent from './SwitchComponent';
import ReserveReadOnly from '../ClaimTabs/ReserveReadOnly';
import { updateClaimStatus } from '../../../Services/claimService';

import { opentoast } from '../../../actions/common';
import ClaimTabs from '../ClaimTabs/ClaimTabs';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  font: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: '#fff',
    margin: 8,
    fontSize: 16,
  },
  gridContainer: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(14),
  },
  paper: {
    padding: 35,
    paddingBottom: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    color: '#fff',
    marginTop: 22,
  },
  approve: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'green',
    },
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    fontSize: 16,
    marginLeft: theme.spacing(3),
  },
  reject: {
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'red',
    },
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    fontSize: 16,
    marginLeft: theme.spacing(3),
  },
}));

function Approve(props) {
  const { claim, updatePage } = props;
  const { id } = claim;
  const dispatch = useDispatch();
  const [showResults, setShowResults] = React.useState(false);
  const [closeResults, setCloseResults] = React.useState(true);
  const userType = useSelector(state => state.authReducer.userType);

  const ApproveClaim = async () => {
    setShowResults(true);
    setCloseResults(false);
    try {
      const data = await updateClaimStatus(id, { status: 'acknowledgeClaim' });
      dispatch(opentoast('success', `Your claim no is :${data.claimNumber}`));
      updatePage();
    } catch (err) {
      dispatch(opentoast('error', `Something Went Wrong ... Please Try Later`));
    }
  };

  const Reject = async () => {
    setCloseResults(false);
    try {
      await updateClaimStatus(id, { status: 'rejectClaim' });
    } catch (err) {
      dispatch(opentoast('error', `Something Went Wrong ... Please Try Later`));
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ClaimDetails claim={claim} />
      {closeResults && userType === 'Insurance' && claim.status?.name === 'verifiedByAdjuster' && (
        <ClaimTabs claim={claim} updatePage={updatePage} />
      )}
      {closeResults && userType === 'Insurance' && claim.status?.name === 'requestedClaim' && (
        <Paper className={classes.paper} elevation={3}>
          <Grid item xs={12} container spacing={6}>
            <Typography className={classes.font}>
              <InfoIcon />
              &nbsp;Do you want to approve this claim ?
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.approve}
              onClick={ApproveClaim}
              startIcon={<CheckIcon />}
            >
              Acknowledge the claim
            </Button>

            <Button
              variant="contained"
              color="secondary"
              className={classes.reject}
              onClick={Reject}
              startIcon={<CloseIcon />}
            >
              Reject
            </Button>
          </Grid>
        </Paper>
      )}

      {((showResults && userType === 'Insurance') || claim?.status?.name === 'acknowledgeClaim') &&
        userType !== 'Customer' && <SwitchComponent claim={claim} updatePage={updatePage} />}
      {userType === 'Adjuster' && claim?.status.name === 'pendingWithAdjuster' && (
        <AssesorForm claim={claim} updatePage={updatePage} />
      )}

      {claim.lossReserve && claim?.lossReserve.length > 0 && userType === 'Customer' && (
        <ReserveReadOnly lossReserve={claim.lossReserve} />
      )}
    </div>
  );
}

export default React.memo(withRouter(Approve));
