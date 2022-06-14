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

export default function EngineeringInfo() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              name="subsidiaryCompany"
              // value={riskDetailEdit.subsidiaryCompany}
              label="Subsidiary Company"
              variant="outlined"
              color="secondary"
              className="riskAlign"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              name="propertyName"
              // value={values.propertyName}
              label="Property/Villa Name"
              variant="outlined"
              color="secondary"
              className="riskRightAlign"
            />
          </div>
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              name="propertyGovernate"
              label="Governate"
              variant="outlined"
              color="secondary"
              className="riskAlign"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              name="propertyStreet"
              label="Street"
              variant="outlined"
              color="secondary"
              className="riskRightAlign"
            />
          </div>
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              name="propertyBlock"
              label="Block"
              className="riskAlign1"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              name="propertyArea"
              label="Area"
              variant="outlined"
              color="secondary"
              style={{ width: '230px', marginLeft: '15px' }}
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              name="propertyCity"
              label="City"
              variant="outlined"
              color="secondary"
              style={{ width: '230px', marginLeft: '23px' }}
            />
          </div>
          <div>
            <TextField
              id="outlined-select-type-native"
              as="select"
              name="propertyCountry"
              label="Country"
              // value={countryName}
              // onChange={handleCountryChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              className="riskAlign1"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              name="geoCode"
              label="Geo Code"
              variant="outlined"
              color="secondary"
              style={{ marginLeft: '15px', width: '230px' }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
