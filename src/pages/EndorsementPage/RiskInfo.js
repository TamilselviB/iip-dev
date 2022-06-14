import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Formik, Form, Field } from 'formik';
import * as ProjectConstants from '../../utils/dropdownValues';

import './Info.css';

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

export default function RiskInfo() {
const countries = ProjectConstants.COUNTRIES;
  let initialValues={
    subsidiaryCompany:'',
    propertyName:'',
    propertyGovernate:'',
    propertyStreet:'',
    propertyBlock:'',
    propertyArea:'',
    propertyCity:'',
    propertyCountry:'',
    geoCode:''

  }
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ marginTop: '-12px' }}>
            <div>
              <Field
                id="outlined-secondary"
                as={TextField}
                name="subsidiaryCompany"
                // value={riskDetailEdit.subsidiaryCompany}
                label="Subsidiary Company"
                variant="outlined"
                color="secondary"
                style={{ marginLeft: '-43px', width: '350px' }}
              />
              <Field
                id="outlined-secondary"
                as={TextField}
                name="propertyName"
                // value={values.propertyName}
                label="Property/Villa Name"
                variant="outlined"
                color="secondary"
                style={{ marginLeft: '29px', width: '350px' }}
              />
            </div>
            <div>
              <Field
                id="outlined-secondary"
                as={TextField}
                name="propertyGovernate"
                label="Governate"
                variant="outlined"
                color="secondary"
                style={{ marginLeft: '-43px', width: '350px' }}
              />
              <Field
                id="outlined-secondary"
                as={TextField}
                name="propertyStreet"
                label="Street"
                variant="outlined"
                color="secondary"
                style={{ marginLeft: '29px', width: '350px' }}
              />
            </div>
            <div>
              <Field
                id="outlined-secondary"
                as={TextField}
                name="propertyBlock"
                label="Block"
                style={{ width: '230px', marginLeft: '-43px' }}
                variant="outlined"
                color="secondary"
              />
              <Field
                id="outlined-secondary"
                as={TextField}
                name="propertyArea"
                label="Area"
                variant="outlined"
                color="secondary"
                style={{ width: '230px', marginLeft: '15px' }}
              />
              <Field
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
              <Field
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
                className="selectCountry"
              >
                <option defaultValue>Choose Your Country</option>
                {countries.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <Field
                id="outlined-secondary"
                as={TextField}
                name="geoCode"
                label="Geo Code"
                variant="outlined"
                color="secondary"
                style={{ marginLeft: '15px', width: '230px' }}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
