import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './engineering.css';


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

export default function MachineryInfo() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="No Of Machinery"
              variant="outlined"
              color="secondary"
              className="riskAlign"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Type of Machinery"
              variant="outlined"
              color="secondary"
              className="riskRightAlign"
            />
          </div>
          <div>

            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Description of Item"
              variant="outlined"
              color="secondary"
              className="riskLocation"
            />
          </div>
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Make"
              className="riskAlign1"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Model"
              variant="outlined"
              color="secondary"
              style={{ width: '230px', marginLeft: '15px' }}
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Country of Origin"
              variant="outlined"
              color="secondary"
              style={{ width: '230px', marginLeft: '23px' }}
            />
          </div>
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Manufacturer"
              variant="outlined"
              color="secondary"
              className="riskAlign"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Chasis No"
              variant="outlined"
              color="secondary"
              className="riskRightAlign"
            />
          </div>

          <div>

            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Regn No"
              variant="outlined"
              color="secondary"
              className="riskAlign"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
