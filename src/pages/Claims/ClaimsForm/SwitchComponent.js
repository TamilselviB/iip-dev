import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/Info';
import { Typography } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import AdjusterForm from './AdjusterForm';
import { getAdjuster } from '../../../Services/claimService';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  font: {
    padding: theme.spacing(0),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    margin: 8,
    fontSize: 16,
  },
  paper: {
    padding: 35,
    paddingBottom: theme.spacing(4),
    color: '#000',
    marginTop: 22,
  },
}));

function SwitchComponent({ claim, updatePage }) {
  const [check, setChecked] = useState(false);
  const [adjusters, setAdjusters] = useState([]);
  const userType = useSelector(state => state.authReducer.userType);
  const userId = useSelector(state => state.authReducer.userId);
  useEffect(() => {
    async function loadAdjusters() {
      try {
        const payload = {
          userId: userId,
        };
        const res = await getAdjuster(payload);
        setAdjusters(res);
      } catch (err) {
        throw err;
      }
    }
    loadAdjusters();
  }, [check]);

  const toggleChecked = () => {
    setChecked(prev => !prev);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid item xs={12} container spacing={6}>
          <Typography className={classes.font}>
            <InfoIcon />
            &nbsp;Adjuster Type:
          </Typography>

          <Typography component="div" style={{ marginLeft: 20 }}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>In-House Adjuster</Grid>
              <Grid item>
                <Switch checked={check} onChange={toggleChecked} />
              </Grid>
              <Grid item>External Adjuster</Grid>
            </Grid>
          </Typography>
        </Grid>
      </Paper>
      {userType === 'Insurance' && claim?.status?.name === 'acknowledgeClaim' && (
        <AdjusterForm adjusters={adjusters} claim={claim} updatePage={updatePage} />
      )}
    </div>
  );
}

export default SwitchComponent;
