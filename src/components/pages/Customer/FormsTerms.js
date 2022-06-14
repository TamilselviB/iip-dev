import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { Formik, Form, Field, FieldArray } from 'formik';
import Card from '@material-ui/core/Card';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Terms from '../../../pages/EndorsementPage/Terms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faEdit,
  faEnvelope,
  faUser,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import CoverModal from '../../util/CoverModal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as propertyInsuranceService from '../../../Services/propertyInsuranceService';
import Typography from '@material-ui/core/Typography';

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

export default function FormsTerms({ formData, setFormData, nextStep, prevStep }) {
  const [termsValue, setTermsValue] = useState([]);
  const [direction, setDirection] = useState('back');
  const [submitType, setSubmitType] = useState('');
  const setTermsValueFromModal = data => {
    setTermsValue(data);
  };

  const handleSubmit = type => {
    setSubmitType(type);
    if (type === 'save') {
      setDirection('next');
    }
  };

  return (
    <Formik
      initialValues={formData}
      enableReinitialize
      onSubmit={values => {
        console.log(values);
        values.terms= {
          Inclusion: values.termsInclusion,
            Exclusion: values.termsExclusion,
            Warranty: values.termsWarranty,
            Subjectivity: values.termsSubjectivity
        }
        const obj = {
          id: values.id,
          statusId: 'draft',
          terms: {
            Inclusion: values.termsInclusion,
            Exclusion: values.termsExclusion,
            Warranty: values.termsWarranty,
            Subjectivity: values.termsSubjectivity,
          },
        };
        console.log(obj);
        propertyInsuranceService
          .savePropertyInsurance(obj)
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.log(error);
          });
          setFormData(values)
        direction === 'back' ? prevStep() : nextStep();
      }}
      render={({ values }) => (
        <Form>
          <Grid container>
            <Grid item xs={2}>
              <div className="circleAlign">
                <div id="circleInsuredSuccess1">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{
                      color: 'green',
                      fontSize: '24px',
                      marginLeft: '-3px',
                      width: '20px',
                      height: '20px',
                    }}
                  />
                </div>
                <div id="tit">
                  <h5
                    style={{
                      marginLeft: '18px',
                      color: 'green',
                      marginTop: '35px',
                      fontWeight: 'bold',
                    }}
                  >
                    INSURED DETAILS
                      </h5>
                </div>

                <div className="lineInsuredSuccess" />
                <div id="circleInsuredSuccess">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{
                      color: 'green',
                      fontSize: '24px',
                      marginLeft: '-3px',
                      width: '20px',
                      height: '20px',
                    }}
                  />
                </div>
                <div>
                  <h5 className="titInsuredSuccess1 ">PROPERTY DETAILS</h5>
                </div>
                <div className="lineProperty" />
                <div id="circleNext" />
                <div>
                  <h5 className="titProperty">TERMS&CONDITIONS</h5>
                </div>
                <div className="lineProperty" />
                <div id="circleNext" />
                <div>
                  <h5 className="titProperty">CONFIRM DETAILS</h5>
                </div>
              </div>
            </Grid>
            <Grid item xs={8}>
              <Typography className="typo">Terms and Conditions</Typography>
              <Card className="infocard">
                <CardContent>
                  <div style={{ marginLeft: '24px' }}>
                    <Typography>Inclusion</Typography>
                    <FieldArray name="termsInclusion">
                      {fieldArrayProps => {
                        const { push, form } = fieldArrayProps;
                        const { values } = form;
                        const { termsInclusion } = values;
                        const updateValue = (idx, value) => {
                          termsInclusion[idx] = value;
                        };
                        return (
                          <div>
                            {termsInclusion.map((data, index) => (
                              <div>
                                <Field
                                  name={`termsInclusion[${index}]`}
                                  defaultValue={data}
                                  className="form-control terms"
                                  value={data}
                                />
                                <div className='modalTerms'>
                                  <CoverModal
                                    name="Inclusion"
                                    attrValue={data}
                                    fieldIndex={index}
                                    handleReplace={updateValue}
                                    setValueInparentComponent={setTermsValueFromModal}
                                  />
                                </div>
                              </div>
                            ))}
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => push('')}
                              className="btn btn-primary addRow"
                            >
                              <AddIcon />
                              Add Row{' '}
                            </Button>
                          </div>
                        );
                      }}
                    </FieldArray>


                    <Typography>Exclusion</Typography>
                    <FieldArray name="termsExclusion">
                      {fieldArrayProps => {
                        const { push, form } = fieldArrayProps;
                        const { values } = form;
                        const { termsExclusion } = values;
                        const updateValue = (idx, value) => {
                          termsExclusion[idx] = value;
                        };
                        return (
                          <div>
                            {termsExclusion.map((data, index) => (
                              <div>
                                <Field
                                  name={`termsExclusion[${index}]`}
                                  defaultValue={data}
                                  className="form-control terms"
                                />
                                <div className="modalTerms">
                                  <CoverModal
                                    name="Exclusion"
                                    attrValue={data}
                                    fieldIndex={index}
                                    handleReplace={updateValue}
                                    setValueInparentComponent={setTermsValueFromModal}
                                  />
                                </div>
                              </div>
                            ))}
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => push('')}
                              className="btn btn-primary addRow"
                            >
                              <AddIcon />Add Row {' '}
                            </Button>
                          </div>
                        );
                      }}
                    </FieldArray>



                    <Typography>Warranty</Typography>
                    <FieldArray name="termsWarranty">
                      {fieldArrayProps => {
                        const { push, form } = fieldArrayProps;
                        const { values } = form;
                        const { termsWarranty } = values;
                        const updateValue = (idx, value) => {
                          termsWarranty[idx] = value;
                        };
                        return (
                          <div>
                            {termsWarranty.map((data, index) => (
                              <div>
                                <Field
                                  name={`termsWarranty[${index}]`}
                                  defaultValue={data}
                                  className="form-control terms"
                                  value={data}
                                />
                                <div className="modalTerms">
                                  <CoverModal
                                    name="Warranty"
                                    attrValue={data}
                                    fieldIndex={index}
                                    handleReplace={updateValue}
                                    setValueInparentComponent={setTermsValueFromModal}
                                  />
                                </div>
                              </div>
                            ))}
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => push('')}
                              className="btn btn-primary addRow"
                            >
                              Add Row
                              </Button>
                          </div>
                        );
                      }}
                    </FieldArray>



                    <Typography>Subjectivity</Typography>
                    <FieldArray name="termsSubjectivity">
                      {fieldArrayProps => {
                        const { push, form } = fieldArrayProps;
                        const { values } = form;
                        const { termsSubjectivity } = values;
                        const updateValue = (idx, value) => {
                          termsSubjectivity[idx] = value;
                        };
                        return (
                          <div>
                            {termsSubjectivity.map((data, index) => (
                              <div>
                                <Field
                                  name={`termsSubjectivity[${index}]`}
                                  defaultValue={data}
                                  className="form-control terms"
                                  value={data}
                                />
                                <div className="modalTerms">
                                  <CoverModal
                                    name="Subjectivity"
                                    attrValue={data}
                                    fieldIndex={index}
                                    handleReplace={updateValue}
                                    setValueInparentComponent={setTermsValueFromModal}
                                  />
                                </div>
                              </div>
                            ))}
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => push('')}
                              className="btn btn-primary addRow"
                            >
                              Add Row
                              </Button>
                          </div>
                        );
                      }}
                    </FieldArray>

                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>

              <Typography className="sideHead">Insured Details</Typography>
              <Button className="editBtn">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="editIcon"
                />
              </Button>
              <Typography className="details1">
                <FontAwesomeIcon icon={faUser} className="userIcon" />{' '}
                {formData.insuredName}
            </Typography>
              <Typography className="details">
                <FontAwesomeIcon icon={faPhone} className="userIcon" />{' '}
                {formData.mobileNumber}
            </Typography>
              <Typography className="details">
                <FontAwesomeIcon icon={faEnvelope} className="userIcon" />{' '}
                {formData.emailId}
             </Typography>
              <Typography className="sideHead">Property Details </Typography>
              {formData?.riskDetails?.map((data) =>(
                <div>
                <Typography className="sideHead1">{data.propertyName} </Typography>
                <Button className="editBtn">
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="editIcon"
                  />
                </Button>
                <Typography className="details2">
                {data.address.propertyArea}
              </Typography>
                <Typography className="details">
                {data.address.propertyCity}
               </Typography>
                <Typography className="details">
                {data.address.geoCode}
              </Typography></div>)
              )}
              
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            className="btnSave"
            onClick={() => handleSubmit('save')}
          >
            Save & Continue&nbsp;
              <ArrowForwardIcon />
          </Button>
        </Form>
      )}
    />
  );
}
