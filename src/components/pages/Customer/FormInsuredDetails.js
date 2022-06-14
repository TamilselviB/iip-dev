import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import * as yup from 'yup';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import * as ProjectConstants from '../../../utils/dropdownValues';
import * as propertyInsuranceService from '../../../Services/propertyInsuranceService';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
const insuredTypes = ProjectConstants.INSUREDTYPE;
const validationSchema = yup.object({
  product: yup.string().required('Product is required'),
  insuredType: yup.string().required('Insured Type is required'),
  insuredName: yup.string().required('Insured Name is required'),
  mobileNumber: yup.number().required('Mobile Number is required'),
  emailId: yup.string().required('E-mail Id is required').email(),
  // regNo: yup
  //   .string()
  //   .required('Registration Number is required'),
  address: yup.string().required('Address is required'),
  // city: yup
  //   .string()
  //   .required('City is required'),
  // state: yup
  //   .string()
  //   .required('State is required'),
  pincode: yup.number().required('Pincode is required'),
});

const FormInsuredDetails = ({ formData, nextStep, setFormData, props }) => {
  console.log(formData);
  const products = formData.products;
  const covers = formData.covers;
  const safetyMeasures = formData.safetyMeasures;
  const classes = useStyles();
  let userid = useSelector(state => state.authReducer.userid) || sessionStorage.getItem('userid');
  return (
    <Formik
      initialValues={formData}
      onSubmit={values => {
        const payload = {
          userId: userid,
          productId: values.product,
          insuredType: values.insuredType,
          contactPerson: values.contactPerson,
          insuredName: values.insuredName,
          mobileNumber: values.mobileNumber,
          alternateContact: values.alternateContact,
          email: values.emailId,
          licenceId: values.licenceId,
          address: {
            street: values.address,
            city: values.city,
            state: values.state,
            zip: values.pincode,
          },
          riskDetails: [],
          statusId: 'draft',
        };
        console.log('values', payload);
        propertyInsuranceService
          .savePropertyInsurance(payload)
          .then(data => {
            console.log('data', data);
            values.id = data.id;
          })
          .catch(error => {
            console.log('error', error);
          });
        values.products = products;
        values.covers = covers;
        values.productCovers =
          values.productCovers.length === 0 || formData.product !== values.product
            ? covers[values.product]
            : values.productCovers;
        values.insuredTypes = insuredTypes;
        values.safetyMeasures = safetyMeasures;
        setFormData(values);
        nextStep();
      }}
      validationSchema={validationSchema}
    >
      {({ errors, touched, values }) => {

        return (
          <Form
            className={classes.root}
            autoComplete="off"
            style={{ backgroundColor: 'whiteSmoke' }}
          >
            <Grid
              container
              spacing={3}
              style={{
                margin: 0,
                width: '100%',
              }}
            >
              <Grid item xs={2}>
                <div style={{ marginLeft: '30px' }}>
                  <div id="circle" style={{ marginTop: '65px' }} />
                  <div id="tit">
                    <h5 className="circleInsured">INSURED DETAILS</h5>
                  </div>

                  <div className="lineInsured" />
                  <div id="circleProperty" />
                  <div>
                    <h5 className="titProperty">PROPERTY DETAILS</h5>
                  </div>
                  <div className="lineProperty" />
                  <div id="circleProperty" />
                  <div>
                    <h5 className="titProperty">TERMS&CONDITIONS</h5>
                  </div>
                  <div className="lineProperty" />
                  <div id="circleProperty" />
                  <div>
                    <h5 className="titProperty">CONFIRM DETAILS</h5>
                  </div>
                </div>
              </Grid>
              <Grid item xs={8} style={{ marginLeft: '-41px' }}>
                <div style={{ marginTop: '-12px' }}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{
                      fontSize: '30px',
                      color: '#F04763',
                      marginLeft: '79px',
                      marginBottom: '-42px',
                    }}
                  />
                  <h3 id="heading1">Enter Insured Details</h3>
                  <br></br>
                  <p
                    style={{
                      marginLeft: '75px',
                      marginTop: '-3px',
                      marginBottom: '3px',
                      color: '#27273E',
                    }}
                  >
                    Product
                  </p>
                  <p
                    style={{
                      marginLeft: '510px',
                      marginTop: '-25px',
                      marginBottom: '3px',
                      color: '#27273E',
                    }}
                  >
                    Insured Type
                  </p>
                  <Field
                    id="outlined-select-type-native"
                    as="select"
                    name="product"
                    label="Product"
                    SelectProps={{
                      native: true,
                    }}
                    variant="outlined"
                    className="selectProduct"
                  >
                    <option defaultValue>Select Product</option>
                    {products.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>

                  <Field
                    id="outlined-select-type-native"
                    as="select"
                    name="insuredType"
                    label="Insured Type"
                    SelectProps={{
                      native: true,
                    }}
                    variant="outlined"
                    className="selectInsuredType"
                  >
                    {insuredTypes.map(option => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                </div>

                {errors.insuredType && touched.insuredType ? (
                  <div
                    style={{
                      color: 'red',
                      marginLeft: '511px',
                      marginTop: '-12px',
                      fontSize: '14px',
                    }}
                  >
                    {errors.insuredType}
                  </div>
                ) : null}
                {errors.product && touched.product ? (
                  <div
                    style={{
                      color: 'red',
                      marginLeft: '79px',
                      marginTop: '-11px',
                      fontSize: '14px',
                    }}
                  >
                    {errors.product}
                  </div>
                ) : null}

                <div>
                  <Field
                    id="outlined-secondary"
                    as={TextField}
                    name="insuredName"
                    label="Insured Name"
                    variant="outlined"
                    color="secondary"
                    style={{ marginLeft: '75px', width: '350px' }}
                  />
                  <Field
                    id="outlined-secondary"
                    as={TextField}
                    name="contactPerson"
                    label="Contact Person"
                    variant="outlined"
                    color="secondary"
                    style={{ marginLeft: '75px', width: '350px' }}
                  />
                </div>
                {errors.contactPerson && touched.contactPerson ? (
                  <div
                    style={{
                      color: 'red',
                      marginLeft: '511px',
                      marginTop: '-12px',
                      fontSize: '14px',
                    }}
                  >
                    {errors.contactPerson}
                  </div>
                ) : null}
                {errors.insuredName && touched.insuredName ? (
                  <div
                    style={{
                      color: 'red',
                      marginLeft: '79px',
                      marginTop: '-18px',
                      fontSize: '14px',
                    }}
                  >
                    {errors.insuredName}
                  </div>
                ) : null}
                <div>
                  <Field
                    id="outlined-secondary"
                    as={TextField}
                    name="alternateContact"
                    label="Phone Number"
                    variant="outlined"
                    color="secondary"
                    style={{ marginLeft: '75px', width: '350px' }}
                  />
                  <Field
                    id="outlined-secondary"
                    as={TextField}
                    name="mobileNumber"
                    label="Mobile Number"
                    variant="outlined"
                    color="secondary"
                    style={{ marginLeft: '75px', width: '350px' }}
                  />
                </div>
                {errors.mobileNumber && touched.mobileNumber ? (
                  <div
                    style={{
                      color: 'red',
                      marginLeft: '511px',
                      marginTop: '-13px',
                      fontSize: '14px',
                    }}
                  >
                    {errors.mobileNumber}
                  </div>
                ) : null}
                <div>
                  <Field
                    id="outlined-secondary"
                    as={TextField}
                    name="emailId"
                    label="E-mail Id"
                    variant="outlined"
                    color="secondary"
                    style={{ marginLeft: '75px', width: '350px' }}
                  />
                  {values.insuredType === 'Individual' ? (
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="licenceId"
                      label="Civil ID/ National ID"
                      variant="outlined"
                      color="secondary"
                      style={{ marginLeft: '75px', width: '350px' }}
                    />
                  ) : values.insuredType === 'Corporate' ? (
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="licenceId"
                      label="Trade License"
                      variant="outlined"
                      color="secondary"
                      style={{ marginLeft: '75px', width: '350px' }}
                    />
                  ) : (
                        <Field
                          id="outlined-secondary"
                          as={TextField}
                          name="licenceId"
                          label=" "
                          variant="outlined"
                          color="secondary"
                          style={{ marginLeft: '75px', width: '350px' }}
                        />
                      )}
                </div>
                {errors.regNo && touched.regNo ? (
                  <div
                    style={{
                      color: 'red',
                      marginLeft: '511px',
                      marginTop: '-12px',
                      fontSize: '14px',
                    }}
                  >
                    {errors.regNo}
                  </div>
                ) : null}
                {errors.emailId && touched.emailId ? (
                  <div
                    style={{
                      color: 'red',
                      marginLeft: '79px',
                      marginTop: '-13px',
                      fontSize: '14px',
                    }}
                  >
                    {errors.emailId}
                  </div>
                ) : null}
                <div>
                  <Field
                    id="outlined-secondary"
                    as={TextField}
                    name="address"
                    label="Address"
                    variant="outlined"
                    color="secondary"
                    style={{ marginLeft: '75px', width: '782px' }}
                  />
                </div>
                {errors.address && touched.address ? (
                  <div
                    style={{
                      color: 'red',
                      marginLeft: '79px',
                      marginTop: '-12px',
                      fontSize: '14px',
                    }}
                  >
                    {errors.address}
                  </div>
                ) : null}
                <div>
                  <Field
                    id="outlined-secondary"
                    as={TextField}
                    name="city"
                    label="City"
                    style={{ width: '230px', marginLeft: '75px' }}
                    variant="outlined"
                    color="secondary"
                  />
                  <Field
                    id="outlined-secondary"
                    as={TextField}
                    name="state"
                    label="State"
                    variant="outlined"
                    color="secondary"
                    style={{ width: '230px', marginLeft: '40px' }}
                  />
                  <Field
                    id="outlined-secondary"
                    as={TextField}
                    name="pincode"
                    label="Pincode"
                    variant="outlined"
                    color="secondary"
                    style={{ width: '230px', marginLeft: '38px' }}
                  />
                </div>
                {errors.pincode && touched.pincode ? (
                  <div
                    style={{
                      color: 'red',
                      marginLeft: '635px',
                      marginTop: '-12px',
                      fontSize: '14px',
                    }}
                  >
                    {errors.pincode}
                  </div>
                ) : null}

                <Button
                  type="submit"
                  style={{
                    marginLeft: '654px',
                    marginTop: '25px',
                    width: '200px',
                    height: '40px',
                    borderRadius: '34px',
                    backgroundColor: '#27273E',
                    color: 'white',
                  }}
                  variant="contained"
                  className={classes.button}
                >
                  Save & Continue&nbsp;
                  <ArrowForwardIcon />
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

FormInsuredDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default FormInsuredDetails;
