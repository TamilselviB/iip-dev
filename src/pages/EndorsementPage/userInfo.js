import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { pick, has, omit } from 'lodash';
import { diff } from 'deep-object-diff';
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

export default function UserInfo({ policieById, setUserInfoConPage, data, submit }) {
  let initialValues={}
  if (Object.keys(data).length != 0) {
    initialValues = pick(data, ['insuredType', 'insuredName', 'contactPerson', 'alternateContact', 'mobileNumber', 'email', 'licenceId']);
    initialValues.city = data.address.city
    initialValues.state = data.address.state
    initialValues.zip = data.address.zip
    initialValues.street = data.address.street
    initialValues.product = data.product.productName
  }
  const sendFormData = useCallback((values) => {
    submit(values)
    setUserInfoConPage(values);
  }, [setUserInfoConPage]);
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={values => {
        let diffObject = diff(initialValues, values);
        if (has(diffObject, ['city']) || has(diffObject, ['state']) || has(diffObject, ['zip']) || has(diffObject, ['street'])) {
          diffObject = omit(diffObject, ['city', 'state', 'zip', 'street'])
          diffObject['address'] = {};
          ['city', 'state', 'zip', 'street'].forEach(key => diffObject['address'][key] = values[key]);
        }
        sendFormData(diffObject);
      }}
    // validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off" style={{ backgroundColor: 'whiteSmoke' }}>
          <div>
            <Grid container spacing={2}>
              <Grid item xs></Grid>
              <Grid item xs={9}>
                <div style={{ marginTop: '-12px' }}>
                  <FontAwesomeIcon icon={faCheck} className="iconCheck" />
                  <h3 id="headingInfo">Edit Insured Details</h3>
                  <div>
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      disabled={true}
                      variant="outlined"
                      name="product"
                      label="Product"
                      className="alignFieldLeft"
                    />
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="insuredType"
                      label="Insured Type"
                      variant="outlined"
                      className="alignFieldRight"
                    />
                  </div>
                  <div>
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="insuredName"
                      label="Insured Name"
                      variant="outlined"
                      className="alignFieldLeft"
                    />
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="contactPerson"
                      label="Contact Person"
                      variant="outlined"
                      className="alignFieldRight"
                    />
                  </div>
                  <div>
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="alternateContact"
                      label="Phone Number"
                      variant="outlined"
                      className="alignFieldLeft"
                    />
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="mobileNumber"
                      label="Mobile Number"
                      variant="outlined"
                      className="alignFieldRight"
                    />
                  </div>
                  <div>
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="email"
                      label="E-mail Id"
                      variant="outlined"
                      className="alignFieldLeft"
                    />
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="licenceId"
                      label="Trade License#"
                      variant="outlined"
                      className="alignFieldRight"
                    />
                  </div>
                  <div>
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="street"
                      label="Address"
                      variant="outlined"
                      className="alignAddress"
                    />
                  </div>
                  <div>
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="city"
                      label="City"
                      variant="outlined"
                      className="alignThreeLeft"
                    />
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="state"
                      label="State"
                      variant="outlined"
                      className="alignThreeCenter"
                    />
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="zip"
                      label="Pincode"
                      variant="outlined"
                      className="alignThreeRight"
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" className="btnSave">
              Submit
            </Button>
          </div>{' '}
        </Form>
      )}
    </Formik>
  );
}
