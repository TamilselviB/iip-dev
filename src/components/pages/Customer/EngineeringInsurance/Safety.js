import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Safety(){
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <h5>Please select Safety measures which you have already</h5>
            <div class="row" style={{ marginTop: '-11px' }}>
            <Checkbox /><label style={{marginTop:'10px'}}>Safety and Security</label>
            </div>
            <div class="row" style={{ marginTop: '-11px' }}>
              <Checkbox /><label style={{ marginTop: '10px' }}>Fire Alarm</label>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
