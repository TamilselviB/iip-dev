import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, FieldArray } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, FormControlLabel, Radio } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faEnvelope,
  faUser,
  faPhone,
  faCheckCircle,
  faCheck,
  faFilePdf,
  faArrowCircleUp,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import S3 from 'react-aws-s3';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import moment from 'moment';
import * as ProjectConstants from '../../../utils/dropdownValues';
import IIPNumberFormat from '../../IIPNumberFormat/IIPNumberFormat';
import * as propertyInsuranceService from '../../../Services/propertyInsuranceService';
import { config } from '../../../Services/Config';
import CoverModal from '../../util/CoverModal';
import { RadioGroup } from '@material-ui/core';
import './FormPropertyDetails.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
  },
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
    width: '500px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    height: '40px !important',
  },
}));

const currencies = ProjectConstants.CURRENCIES;
const countries = ProjectConstants.COUNTRIES;
const occupancy = ProjectConstants.OCCUPANCY;
const constType = ProjectConstants.CONSTRUCTIONTYPE;
const rate = ProjectConstants.RATETYPE;
const termsTypes = ProjectConstants.TERMSTYPE;

const validationSchema = yup.object({
  propertyName: yup.string().required('Property Name is required'),
  propertyGovernate: yup.string().required('Governate is required'),
  propertyStreet: yup.string().required('Street is required'),
  propertyCity: yup.string().required('City is required'),
  propertyCountry: yup.string().required('Country is required'),
  occupancyType: yup.string().required('Occupancy is required'),
  constructionType: yup.string().required('Construction Type is required'),
  yearBuilt: yup.number().required('Year Built is required'),
  geoCode: yup.string().required('Geo Code is required'),
  noOfFloors: yup.number().required('Number of floors is required'),
  buildingHeight: yup.number().required('Building height is required'),
  // startDate: yup.string().required("Tentative Start Date is required"),
  // endDate: yup.string().required("Tentative End Date is required"),
  // expectedCoverage: yup.string().required("Expected Coverage is required"),
});

const FormPropertyDetails = ({ formData, setFormData, nextStep, prevStep, props }) => {
  console.log('formData', formData);
  const classes = useStyles();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [documents, setDocument] = useState([]);
  const [StartDate, setStartDate] = useState();
  const [Enddate, setEnddate] = useState();
  const [standard, setStandard] = useState(false);
  const [special, setSpecial] = useState(false);
  const [inputKey, setInputKey] = useState('');
  const productSafetyMeasures = formData.safetyMeasures[formData.product];
  const productValue = formData.products.filter(e => e.value.toString() === formData.product);
  const insuredTypeValue = formData.insuredTypes.filter(e => e.value === formData.insuredType);
  const date = new Date();
  let today = moment(date, 'yyyy-mm-dd').format();
  let enddate = moment(date, 'yyyy-mm-dd').add(1, 'year').format();
  let userid = useSelector(state => state.authReducer.userid) || sessionStorage.getItem('userid');

  today = today.split('T');
  today = today[0];
  enddate = enddate.split('T');
  enddate = enddate[0];

  useEffect(() => {
    setStartDate(today);
    setEnddate(enddate);
  }, []);

  const standardCvg = event => {
    const val = event.target.value;
    if (val === 'standard') {
      setStandard(true);
      setSpecial(false);
    } else if (val === 'special') {
      setSpecial(true);
      setStandard(false);
    }
  };

  const onDateChange = value => {
    if (value) {
      console.log('value', value);
      setStartDate(value);
      enddate = moment(value).add(1, 'year').format();
      enddate = enddate.split('T');
      enddate = enddate[0];
      setEnddate(enddate);
      console.log(Enddate);
    }
  };

  const [direction, setDirection] = useState('back');
  const [expanded, setExpanded] = React.useState('panel1');
  const [submitType, setSubmitType] = useState('');
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [insured, setInsured] = React.useState('USD');
  const [expectedCoverageValue, setExpectedCoverageValue] = React.useState('');
  const [deductibleValue, setDeductibleValue] = React.useState('');
  const [termsValue, setTermsValue] = React.useState('');
  const [remarksValue, setRemarksValue] = React.useState('');
  const [currencyName, setCurrencyName] = React.useState('USD');
  const [countryName, setCountryName] = React.useState('Dubai');
  const [occupancyType, setOccupancyType] = React.useState('Schools');
  const [constructionType, setConstructionType] = React.useState('Concrete');
  const [exRate, setExRate] = React.useState('%');
  const [policyCovers, setPolicyCovers] = useState([]);

  const handleCountryChange = event => {
    setCountryName(event.target.value);
  };
  const handleExpectedCoverageChange = event => {
    setExpectedCoverageValue(event.target.value);
  };

  const handleDeductibleValueChange = event => {
    setDeductibleValue(event.target.value);
  };

  const handleRemarksValueChange = event => {
    setRemarksValue(event.target.value);
  };
  const setExpectedCoverageFromModal = data => {
    setExpectedCoverageValue(data);
    formData.expectedCoverage = data;
  };
  const setDeductibleValueFromModal = data => {
    setDeductibleValue(data);
    formData.deductible = data;
  };
  const setTermsValueFromModal = data => {
    setTermsValue(data);
  };
  const setRemarksValueFromModal = data => {
    setRemarksValue(data);
    formData.remarks = data;
  };
  const handleInsuredChange = event => {
    setInsured(event.target.value);
    setCurrencyName(event.target.label);
    var idx = event.nativeEvent.target.selectedIndex;
    setCurrencyName(event.nativeEvent.target[idx].text);
    console.log('currency name is' + currencyName);
  };
  const handleOccupancyChange = event => {
    setOccupancyType(event.target.value);
  };
  const handleConstructionChange = event => {
    setConstructionType(event.target.value);
  };

  const openNextAccordian = event => {
    if (event.key === 'Tab') {
      setExpanded('panel2');
    }
  };

  const handleExRateChange = event => {
    setExRate(event.target.value);
  };
  const handleSubmit = type => {
    setSubmitType(type);
    if (type === 'save') {
      setDirection('next');
    } else {
      setExpanded('panel1');
    }
  };
  const handlePropertyEdit = (index, values) => {
    console.log('values', addedValues[index]);
    setEditIndex(index);
    setExpanded('panel1'); // this is to make the first accordian open by default
    setFormData(addedValues[index]);

    var selectedSafetyMeasuresElem = document.getElementsByName('selectedSafetyMeasures');

    const safetyMeasuresSelectedIndex = addedValues[index].selectedSafetyMeasures;

    if (safetyMeasuresSelectedIndex && safetyMeasuresSelectedIndex.length > 0) {
      selectedSafetyMeasuresElem.forEach(safetyMeasure => {
        if (safetyMeasuresSelectedIndex.lastIndexOf(safetyMeasure.value) != -1) {
          safetyMeasure.checked = true;
        }
      });
    }

    console.log('formData', formData);
  };
  const handleInsuranceEdit = values => {
    console.log('values.productCovers', values.productCovers);
    setFormData(values);
    prevStep();
  };

  function multipleFileChangeHandler(event) {
    setSelectedFiles(event.target.files);
    console.log(event.target.files);
  }

  async function multipleFileUploadHandler() {
    const ReactS3Client = new S3(config);
    let files = selectedFiles;
    let file = [];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        await ReactS3Client.uploadFile(files[i], files[i].name).then(data => {
          console.log(data);
          file.push({
            name: files[i].name,
            location: data.location,
          });
        });
      }
      documents.push.apply(documents, file);
      console.log(documents);

      setInputKey(Date.now());
    }

    console.log(documents);
  }
  const [riskDetails, setRiskDetails] = React.useState([]);
  const [addedValues, setAddedValues] = React.useState([]);
  const [editIndex, setEditIndex] = React.useState(-1);
  return (
    <>
      <Formik
        initialValues={formData}
        enableReinitialize
        onSubmit={(values, { resetForm }) => {
          console.log('vals', values);
          const propertyCountry = countries.filter(
            e => e.value.toString() === values.propertyCountry,
          );
          const occupancyTypeValue = occupancy.filter(
            e => e.value.toString() === values.occupancyType,
          );
          const constructionTypeValue = constType.filter(
            e => e.value.toString() === values.constructionType,
          );
          const covers = [];
          const policyCover = [];
          values.productCovers.forEach(cover => {
            if ((cover.isDefault || cover.isMandatory) && !cover.isPolicyLevel) {
              cover.currencyName = currencyName;
              covers.push(cover);
            }
          });
          if(policyCovers.length === 0){
            values.productCovers.forEach(cover => {
              if ((cover.isDefault || cover.isMandatory) && cover.isPolicyLevel) {
                cover.currencyName = currencyName;
                policyCover.push(cover);
              }
            });
          }else{
            console.log('out')
          }
          setPolicyCovers(policyCover)
          console.log('policy covers',policyCovers, policyCover)
          values.policyLevelCover = policyCover
          console.log(policyCover,values)
          formData.policyLevelCover = values.policyLevelCover;
          console.log(formData)

          values.covers = covers;
          console.log(editIndex);
          if (editIndex !== -1) {
            const updatedValues = {
              subsidiaryCompany: values.subsidiaryCompany,
              propertyName: values.propertyName,
              address: {
                propertyStreet: values.propertyStreet,
                propertyCity: values.propertyCity,
                propertyGovernate: values.propertyGovernate,
                propertyBlock: values.propertyBlock,
                propertyArea: values.propertyArea,
                propertyCountry: values.propertyCountry,
                geoCode: values.geoCode,
              },
              occupancyType: values.occupancyType,
              constructionType: values.constructionType,
              yearBuilt: values.yearBuilt,
              noOfFloors: values.noOfFloors,
              buildingHeight: values.buildingHeight,
              locationDescription: values.locationDescription,
              startDate: StartDate,
              endDate: Enddate,
              covers: values.covers,
              expectedCoverage: expectedCoverageValue,
              deductible: deductibleValue,
              currencyName: currencyName,
              remarks: remarksValue,
              safetyMeasures: values.selectedSafetyMeasures,
              document: documents,
              countryValue: propertyCountry.length > 0 ? propertyCountry[0].label : '',
              occupancyTypeValue: occupancyTypeValue.length > 0 ? occupancyTypeValue[0].label : '',
              constructionTypeValue:
                constructionTypeValue.length > 0 ? constructionTypeValue[0].label : '',
            };
            riskDetails[editIndex] = updatedValues;
            addedValues[editIndex] = values;
            console.log('addedValues', addedValues);
            setAddedValues(addedValues);
            setFormData(values);
          } else {
            riskDetails.push({
              subsidiaryCompany: values.subsidiaryCompany,
              propertyName: values.propertyName,
              address: {
                propertyStreet: values.propertyStreet,
                propertyCity: values.propertyCity,
                propertyGovernate: values.propertyGovernate,
                propertyBlock: values.propertyBlock,
                propertyArea: values.propertyArea,
                propertyCountry: values.propertyCountry,
                geoCode: values.geoCode,
              },
              occupancyType: values.occupancyType,
              constructionType: values.constructionType,
              yearBuilt: values.yearBuilt,
              noOfFloors: values.noOfFloors,
              buildingHeight: values.buildingHeight,
              locationDescription: values.locationDescription,
              startDate: StartDate,
              endDate: Enddate,
              covers: values.covers,
              currencyName: currencyName,
              expectedCoverage: expectedCoverageValue,
              deductible: deductibleValue,
              remarks: remarksValue,
              safetyMeasures: values.selectedSafetyMeasures,
              document: documents,
              countryValue: propertyCountry.length > 0 ? propertyCountry[0].label : '',
              occupancyTypeValue: occupancyTypeValue.length > 0 ? occupancyTypeValue[0].label : '',
              constructionTypeValue:
                constructionTypeValue.length > 0 ? constructionTypeValue[0].label : '',
            });
            addedValues.push(values);
            setAddedValues(addedValues);
            
          }
          
          setRiskDetails(riskDetails);
          setEditIndex(-1);
          if (submitType === 'save') {
            values.policyLevelCover = policyCovers;
            console.log(values,formData)
            const payload = {
              id: formData.id,
              userId: formData.userId,
              productId: values.product,
              insuredType: values.insuredType,
              contactPerson: values.contactPerson,
              insuredName: values.insuredName,
              mobileNumber: values.mobileNumber,
              alternateContact: values.alternateContact,
              email: values.emailId,
              policyLevelCover: values.policyLevelCover.length>0?values.policyLevelCover:formData.policyLevelCover,
              address: {
                street: values.address,
                city: values.city,
                state: values.state,
                zip: values.pincode,
              },
              riskDetails: riskDetails,
              statusId: 'draft',
            };
            console.log(payload);
            propertyInsuranceService
              .savePropertyInsurance(payload)
              .then(data => {
                console.log('response data', data);
                values.id = data.id;
                values.totalSumAssured = data.totalSumAssured;
                values.policyLevelCover = data.policyLevelCover;
              })
              .catch(error => {
                console.log('error', error);
              });
            values.productValue = productValue[0].label;
            values.riskDetails = riskDetails;
            setFormData(values);
            direction === 'back' ? prevStep() : nextStep();
          } else {
            resetForm({});
            setDocument([]);
            setInputKey(Date.now());
            var selectedSafetyMeasures = document.getElementsByName('selectedSafetyMeasures');
            selectedSafetyMeasures.forEach(safetyMeasure => {
              safetyMeasure.checked = false;
            });
            setDeductibleValue('');
            setRemarksValue('');
            setPolicyCovers(policyCover);
          }

          resetForm({});
        }}
        validationSchema={validationSchema}
        render={({ values, errors, touched }) => (
          <Form
            className={classes.form}
            style={{
              backgroundColor: 'whiteSmoke',
            }}
          >
            <Grid
              container
              spacing={3}
              style={{
                margin: 0,
                width: '100%',
                fontFamily: 'Open sans',
              }}
            >
              <Grid item xs={2}>
                <div style={{ marginLeft: '-2px' }}>
                  <div id="circleInsuredSuccess" style={{ marginTop: '70px' }}>
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
                    <h5 className="titInsuredSuccess">INSURED DETAILS</h5>
                  </div>

                  <div className="lineInsured4" />
                  <div id="circleNext" />
                  <div>
                    <h5 className="titProperty">PROPERTY DETAILS</h5>
                  </div>
                  <div className="lineProperty" />
                  <div id="circleProperty" />
                  <div>
                    <h5 className="titProperty4">TERMS&CONDITIONS</h5>
                  </div>
                  <div className="lineProperty" />
                  <div id="circleProperty" />
                  <div>
                    <h5 className="titProperty4">CONFIRM DETAILS</h5>
                  </div>
                </div>
              </Grid>
              <Grid item xs={8} style={{ marginLeft: '-55px' }}>
                <div>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{
                      fontSize: '30px',
                      color: '#F04763',
                      marginLeft: '-4px',
                      marginBottom: '-42px',
                    }}
                  />
                  <h3 id="heading2"> Provide your property Details</h3>
                  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        className={classes.heading}
                        style={{
                          color: '#27273E',
                          fontWeight: 'bold',
                          fontSize: '16px',
                        }}
                      >
                        Risk / Location Information
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div style={{ marginTop: '-9px' }}>
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
                        {errors.propertyName && touched.propertyName ? (
                          <div
                            style={{
                              color: 'red',
                              marginLeft: '338px',
                              marginTop: '-11px',
                              fontSize: '14px',
                            }}
                          >
                            {errors.propertyName}
                          </div>
                        ) : null}
                        <br></br>
                        <div style={{ marginTop: '-20px' }}>
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
                        {errors.propertyStreet && touched.propertyStreet ? (
                          <div
                            style={{
                              color: 'red',
                              marginLeft: '338px',
                              marginTop: '-11px',
                              fontSize: '14px',
                            }}
                          >
                            {errors.propertyStreet}
                          </div>
                        ) : null}
                        {errors.propertyGovernate && touched.propertyGovernate ? (
                          <div
                            style={{
                              color: 'red',
                              marginLeft: '-40px',
                              marginTop: '-13px',
                              fontSize: '14px',
                            }}
                          >
                            {errors.propertyGovernate}
                          </div>
                        ) : null}
                        <br></br>
                        <div style={{ marginTop: '-20px' }}>
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
                        <p style={{ marginBottom: '-6px', marginLeft: '-41px', color: '#27273E' }}>
                          Country
                        </p>
                        {errors.propertyCity && touched.propertyCity ? (
                          <div
                            style={{
                              color: 'red',
                              marginLeft: '460px',
                              marginTop: '-26px',
                              fontSize: '14px',
                            }}
                          >
                            {errors.propertyCity}
                          </div>
                        ) : null}
                        <br></br>

                        <div style={{ marginTop: '-20px' }}>
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
                            onKeyDown={openNextAccordian}
                          />
                        </div>
                        {errors.propertyCountry && touched.propertyCountry ? (
                          <div
                            style={{
                              color: 'red',
                              marginLeft: '-41px',
                              marginTop: '-11px',
                              fontSize: '14px',
                            }}
                          >
                            {errors.propertyCountry}
                          </div>
                        ) : null}
                        {errors.geoCode && touched.geoCode ? (
                          <div
                            style={{
                              color: 'red',
                              marginLeft: '200px',
                              marginTop: '-11px',
                              fontSize: '14px',
                            }}
                          >
                            {errors.geoCode}
                          </div>
                        ) : null}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography
                        className={classes.heading}
                        style={{
                          color: '#27273E',
                          fontWeight: 'bold',
                          fontSize: '16px',
                        }}
                      >
                        Property Info
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div style={{ marginTop: '-10px' }}>
                          <p
                            style={{
                              marginBottom: '3px',
                              marginTop: '-3px',
                              marginLeft: '-41px',
                              color: '#27273E',
                            }}
                          >
                            Occupancy
                          </p>
                          <p
                            style={{
                              marginBottom: '-4px',
                              marginTop: '-22px',
                              marginLeft: '351px',
                              color: '#27273E',
                            }}
                          >
                            Construction Type
                          </p>
                          <Field
                            id="outlined-select-type-native"
                            as="select"
                            name="occupancyType"
                            label="Occupancy"
                            // value={occupancyType}
                            // onChange={handleOccupancyChange}
                            SelectProps={{
                              native: true,
                            }}
                            variant="outlined"
                            className="selectOccupancy"
                          >
                            <option defaultValue>Choose Your Occupancy</option>
                            {occupancy.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </Field>

                          <Field
                            id="outlined-select-type-native"
                            as="select"
                            name="constructionType"
                            label="Construction Type"
                            // value={constructionType}
                            // onChange={handleConstructionChange}
                            SelectProps={{
                              native: true,
                            }}
                            variant="outlined"
                            className="selectConstructionType"
                          >
                            <option defaultValue>Choose Your Construction Type</option>
                            {constType.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </Field>
                        </div>
                        {errors.constructionType && touched.constructionType ? (
                          <div className="constructionType">{errors.constructionType}</div>
                        ) : null}
                        {errors.occupancyType && touched.occupancyType ? (
                          <div className="occupancyType">{errors.occupancyType}</div>
                        ) : null}
                        <br></br>
                        <div style={{ marginTop: '-10px' }}>
                          <Field
                            id="outlined-secondary"
                            as={TextField}
                            name="yearBuilt"
                            label="Year Built"
                            style={{ width: '230px', marginLeft: '-43px' }}
                            variant="outlined"
                            color="secondary"
                          />
                          <Field
                            id="outlined-secondary"
                            as={TextField}
                            name="noOfFloors"
                            label="No of Floors"
                            variant="outlined"
                            color="secondary"
                            style={{ width: '230px', marginLeft: '28px' }}
                          />
                          <Field
                            id="outlined-secondary"
                            as={TextField}
                            name="buildingHeight"
                            label="Building Height (Meters)"
                            variant="outlined"
                            color="secondary"
                            style={{ width: '230px', marginLeft: '25px' }}
                          />
                        </div>
                        {errors.yearBuilt && touched.yearBuilt ? (
                          <div className="yearBuilt">{errors.yearBuilt}</div>
                        ) : null}
                        {errors.noOfFloors && touched.noOfFloors ? (
                          <div className="noOfFloors">{errors.noOfFloors}</div>
                        ) : null}
                        {errors.buildingHeight && touched.buildingHeight ? (
                          <div className="buildingHeight">{errors.buildingHeight}</div>
                        ) : null}
                        <br></br>
                        <div style={{ marginTop: '-20px' }}>
                          <Field
                            id="outlined-secondary"
                            as={TextField}
                            name="locationDescription"
                            label="Location Description"
                            variant="outlined"
                            color="secondary"
                            style={{ marginLeft: '-43px', width: '744px' }}
                          />
                        </div>{' '}
                        <div style={{ marginTop: '15px', marginLeft: '-40px' }}>
                          <Field
                            id="date"
                            as={TextField}
                            name="startDate"
                            label="Tentative Start Date "
                            type="date"
                            defaultValue={today}
                            variant="outlined"
                            color="secondary"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            style={{ width: '350px' }}
                            validate={onDateChange.bind(today)}
                          />

                          <Field
                            id="date"
                            as={TextField}
                            name="endDate"
                            label="Tentative End Date "
                            type="date"
                            defaultValue={enddate}
                            variant="outlined"
                            color="secondary"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            style={{ width: '350px', marginLeft: '40px' }}
                            value={Enddate}
                          />
                        </div>
                        {/* {errors.startDate && touched.startDate ? (
                          <div
                            style={{
                              color: "red",
                              marginLeft: "354px",
                              marginTop: "-1px",
                              fontSize: "14px",
                            }}
                          >
                            {errors.startDate}
                          </div>
                        ) : null}
                        {errors.endDate && touched.endDate ? (
                          <div
                            style={{
                              color: "red",
                              marginLeft: "-40px",
                              marginTop: "-1px",
                              fontSize: "14px",
                            }}
                          >
                            {errors.endDate}
                          </div>
                        ) : null} */}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography
                        className={classes.heading}
                        style={{
                          color: '#27273E',
                          fontWeight: 'bold',
                          fontSize: '16px',
                        }}
                      >
                        Coverage Details
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div>
                          <RadioGroup name="coverageType" onChange={standardCvg}>
                            <FormControlLabel
                              value="standard"
                              control={<Radio />}
                              label="Template"
                              color="primary"
                            />
                            <FormControlLabel
                              value="special"
                              control={<Radio />}
                              label="Free Text"
                              color="primary"
                              className="specialRadio"
                            />
                          </RadioGroup>
                        </div>
                        {standard ? (
                          <div>
                            <div>
                              <label style={{ marginLeft: '-75px', color: '#27273E' }}>
                                Coverage
                              </label>

                              <label style={{ marginLeft: '211px', color: '#27273E' }}>
                                Sum Insured
                              </label>
                              <Field
                                id="outlined-select-type-native"
                                as="select"
                                name="clSumInsured"
                                value={insured}
                                onChange={handleInsuredChange}
                                SelectProps={{
                                  native: true,
                                }}
                                variant="outlined"
                                className="selectSi"
                              >
                                {currencies.map(option => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </Field>

                              <label style={{ marginLeft: '25px', color: '#27273E' }}>
                                Expected Rate
                              </label>
                              <Field
                                id="outlined-select-type-native"
                                as="select"
                                name="clExpectedRate"
                                value={exRate}
                                onChange={handleExRateChange}
                                SelectProps={{
                                  native: true,
                                }}
                                variant="outlined"
                                className="selectEr"
                              >
                                {rate.map(option => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </Field>
                            </div>
                            <br></br>
                            <FieldArray
                              name="productCovers"
                              render={arrayHelpers => (
                                <div>
                                  <Button
                                    variant="contained"
                                    style={{
                                      color: 'black',
                                      backgroundColor: 'white',
                                      marginLeft: '10px',
                                      marginTop: '-82px',
                                      marginBottom: '28px',
                                    }}
                                    onClick={() =>
                                      arrayHelpers.push({
                                        isNewCover: true,
                                        coverName: '',
                                        defaultLimit: '',
                                        rate: '',
                                        ratePer: '',
                                        isDefault: false,
                                        isMandatory: false,
                                        isPolicyLevel: false,
                                        liabilities: false,
                                        sumAssured: '',
                                      })
                                    }
                                  >
                                    Add Cover &nbsp;
                                    <AddIcon />
                                  </Button>
                                  {values.productCovers && values.productCovers.length > 0
                                    ? values.productCovers.map(
                                        (productCover, index) =>
                                          !productCover.isPolicyLevel && (
                                            <div key={index} style={{ marginTop: '-8px' }}>
                                              <Field
                                                type="checkbox"
                                                checked={
                                                  productCover.isDefault || productCover.isMandatory
                                                }
                                                disabled={productCover.isMandatory}
                                                name={`productCovers.${index}.isDefault`}
                                                color="primary"
                                                inputProps={{
                                                  'aria-label': 'secondary checkbox',
                                                }}
                                                style={{
                                                  marginLeft: '-85px',
                                                }}
                                                onClick={event => {
                                                  console.log(event.target.checked);
                                                  if (!event.target.checked) {
                                                    productCover.isDefault = false;
                                                  }
                                                }}
                                              />
                                              <Field
                                                id="outlined-secondary"
                                                as={TextField}
                                                disabled={!productCover.isNewCover}
                                                name={`productCovers.${index}.coverName`}
                                                value={productCover.coverName}
                                                variant="outlined"
                                                color="secondary"
                                                style={{
                                                  width: '255px',
                                                  marginLeft: '13px',
                                                  fontSize: '15px',
                                                  marginTop: '2px',
                                                }}
                                              />

                                              <Field
                                                id="outlined-secondary"
                                                as={TextField}
                                                name={`productCovers.${index}.sumAssured`}
                                                component={IIPNumberFormat}
                                                variant="outlined"
                                                class="form-control"
                                                color="secondary"
                                                style={{
                                                  width: '200px',
                                                  marginLeft: '27px',
                                                  textAlign: 'right',
                                                }}
                                              />
                                              <Field
                                                id="outlined-secondary"
                                                as={TextField}
                                                name={`productCovers.${index}.rate`}
                                                component={IIPNumberFormat}
                                                variant="outlined"
                                                class="form-control"
                                                color="secondary"
                                                style={{
                                                  width: '200px',
                                                  marginLeft: '28px',
                                                  textAlign: 'right',
                                                }}
                                              />
                                            </div>
                                          ),
                                      )
                                    : ''}
                                  <br></br>
                                </div>
                              )}
                            />

                            <div style={{ marginTop: '-13px' }}>
                              <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                style={{ marginLeft: '-85px', marginTop: '-2px' }}
                              />
                              <label style={{ color: '#27273E' }}>
                                Policy Level Coverage(Common across location)
                              </label>
                            </div>
                            <div>
                              <label style={{ marginLeft: '-75px', color: '#27273E' }}>
                                Coverage
                              </label>

                              <label style={{ marginLeft: '211px', color: '#27273E' }}>
                                Sum Insured
                              </label>
                              <Field
                                id="outlined-select-type-native"
                                as="select"
                                name="clSumInsured"
                                value={insured}
                                onChange={handleInsuredChange}
                                SelectProps={{
                                  native: true,
                                }}
                                variant="outlined"
                                className="selectSi"
                              >
                                {currencies.map(option => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </Field>

                              <label style={{ marginLeft: '25px', color: '#27273E' }}>
                                Expected Rate
                              </label>
                              <Field
                                id="outlined-select-type-native"
                                as="select"
                                name="clExpectedRate"
                                onChange={handleExRateChange}
                                SelectProps={{
                                  native: true,
                                }}
                                variant="outlined"
                                className="selectEr"
                              >
                                {rate.map(option => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </Field>
                            </div>
                            <br></br>
                            <FieldArray
                              name="productCovers"
                              render={arrayHelpers => (
                                <div>
                                  <Button
                                    variant="contained"
                                    style={{
                                      color: 'black',
                                      backgroundColor: 'white',
                                      marginLeft: '20px',
                                      marginTop: '-114px',
                                    }}
                                    onClick={() =>
                                      arrayHelpers.push({
                                        isNewCover: true,
                                        coverName: '',
                                        defaultLimit: '',
                                        rate: '',
                                        ratePer: '',
                                        isDefault: false,
                                        isMandatory: false,
                                        isPolicyLevel: true,
                                        liabilities: false,
                                        sumAssured: '',
                                      })
                                    }
                                  >
                                    Add Cover &nbsp;
                                    <AddIcon />
                                  </Button>
                                  {values.policyLevelCover && values.policyLevelCover.length > 0
                                    ? values.policyLevelCover.map(
                                        (data, index) =>
                                          data.isPolicyLevel && (
                                            <div key={index} style={{ marginTop: '-8px' }}>
                                              <Field
                                                type="checkbox"
                                                checked={data.isDefault || data.isMandatory}
                                                disabled={data.isMandatory}
                                                name={`policyLevelCover.${index}.isDefault`}
                                                color="primary"
                                                inputProps={{
                                                  'aria-label': 'secondary checkbox',
                                                }}
                                                style={{
                                                  marginLeft: '-85px',
                                                }}
                                                onClick={event => {
                                                  console.log(values.policyLevelCover);
                                                  if (!event.target.checked) {
                                                    data.isDefault = false;
                                                  }
                                                }}
                                              />
                                              <Field
                                                id="outlined-secondary"
                                                as={TextField}
                                                disabled={!data.isNewCover}
                                                name={`policyLevelCover.${index}.coverName`}
                                                variant="outlined"
                                                color="secondary"
                                                style={{
                                                  width: '255px',
                                                  marginLeft: '13px',
                                                  fontSize: '15px',
                                                  marginTop: '2px',
                                                }}
                                              />
                                              <Field
                                                id="outlined-secondary"
                                                as={TextField}
                                                name={`policyLevelCover.${index}.sumAssured`}
                                                component={IIPNumberFormat}
                                                variant="outlined"
                                                class="form-control"
                                                color="secondary"
                                                style={{
                                                  width: '200px',
                                                  marginLeft: '27px',
                                                  textAlign: 'right',
                                                }}
                                              />
                                              <Field
                                                id="outlined-secondary"
                                                as={TextField}
                                                name={`policyLevelCover.${index}.rate`}
                                                component={IIPNumberFormat}
                                                variant="outlined"
                                                class="form-control"
                                                color="secondary"
                                                style={{
                                                  width: '200px',
                                                  marginLeft: '28px',
                                                  textAlign: 'right',
                                                }}
                                              />
                                            </div>
                                          ),
                                      )
                                    : values.productCovers && values.productCovers.length > 0
                                    ? values.productCovers.map(
                                        (productCover, index) =>
                                          productCover.isPolicyLevel && (
                                            <div key={index} style={{ marginTop: '-8px' }}>
                                              <Field
                                                type="checkbox"
                                                checked={
                                                  productCover.isDefault || productCover.isMandatory
                                                }
                                                disabled={productCover.isMandatory}
                                                name={`productCovers.${index}.isDefault`}
                                                color="primary"
                                                inputProps={{
                                                  'aria-label': 'secondary checkbox',
                                                }}
                                                style={{
                                                  marginLeft: '-85px',
                                                }}
                                                onClick={event => {
                                                  if (!event.target.checked) {
                                                    productCover.isDefault = false;
                                                  }
                                                }}
                                              />
                                              <Field
                                                id="outlined-secondary"
                                                as={TextField}
                                                disabled={!productCover.isNewCover}
                                                name={`productCovers.${index}.coverName`}
                                                value={productCover.coverName}
                                                variant="outlined"
                                                color="secondary"
                                                style={{
                                                  width: '255px',
                                                  marginLeft: '13px',
                                                  fontSize: '15px',
                                                  marginTop: '2px',
                                                }}
                                              />
                                              <Field
                                                id="outlined-secondary"
                                                as={TextField}
                                                name={`productCovers.${index}.sumAssured`}
                                                component={IIPNumberFormat}
                                                variant="outlined"
                                                class="form-control"
                                                color="secondary"
                                                style={{
                                                  width: '200px',
                                                  marginLeft: '27px',
                                                  textAlign: 'right',
                                                }}
                                              />
                                              <Field
                                                id="outlined-secondary"
                                                as={TextField}
                                                name={`productCovers.${index}.rate`}
                                                value={productCover.rate}
                                                component={IIPNumberFormat}
                                                variant="outlined"
                                                class="form-control"
                                                color="secondary"
                                                style={{
                                                  width: '200px',
                                                  marginLeft: '28px',
                                                  textAlign: 'right',
                                                }}
                                              />
                                            </div>
                                          ),
                                      )
                                    : null}
                                  <br></br>
                                </div>
                              )}
                            />
                          </div>
                        ) : null}
                        <br></br>
                        {special ? (
                          <div style={{ marginLeft: '-63px', marginTop: '-9px' }}>
                            <br></br>
                            <Field
                              id="outlined-secondary"
                              as={TextField}
                              name="expectedCoverage"
                              variant="outlined"
                              label="Expected Coverage"
                              value={expectedCoverageValue}
                              onChange={handleExpectedCoverageChange}
                              color="secondary"
                              style={{
                                width: '730px',
                                marginLeft: '1px',
                                marginBottom: '0px',
                              }}
                            />
                            <CoverModal
                              attrValue={expectedCoverageValue}
                              name="Expected Coverage"
                              setValueInparentComponent={setExpectedCoverageFromModal}
                            />
                            {/* {errors.expectedCoverage && touched.expectedCoverage ? (
                              <div
                                style={{
                                  color: "red",
                                  marginLeft: "2px",
                                  marginTop: "-11px",
                                  fontSize: "14px",
                                }}
                              >
                                {errors.expectedCoverage}
                              </div>
                            ) : null} */}
                          </div>
                        ) : null}
                        <div style={{ marginLeft: '-63px', marginTop: '-9px' }}>
                          <br></br>
                          <Field
                            id="outlined-secondary"
                            as={TextField}
                            name="deductible"
                            variant="outlined"
                            label="Deductible"
                            value={deductibleValue}
                            onChange={handleDeductibleValueChange}
                            color="secondary"
                            style={{ width: '730px', marginLeft: '1px' }}
                          />
                          <CoverModal
                            name="Deductible"
                            attrValue={deductibleValue}
                            setValueInparentComponent={setDeductibleValueFromModal}
                          />
                        </div>
                        <div style={{ marginLeft: '-63px', marginTop: '-9px' }}>
                          <br></br>

                          <Field
                            id="outlined-secondary"
                            as={TextField}
                            name="remarks"
                            value={remarksValue}
                            onChange={handleRemarksValueChange}
                            variant="outlined"
                            label="Remarks"
                            color="secondary"
                            style={{ width: '730px', marginLeft: '1px' }}
                          />
                          <CoverModal
                            name="Remarks"
                            attrValue={remarksValue}
                            setValueInparentComponent={setRemarksValueFromModal}
                          />
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      <Typography
                        className={classes.heading}
                        style={{
                          color: '#27273E',
                          fontWeight: 'bold',
                          fontSize: '16px',
                        }}
                      >
                        Safety Measures
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <h5
                          style={{
                            marginLeft: '-43px',
                            marginTop: '-8px',
                            fontWeight: '600',
                            fontSize: '15px',
                          }}
                          id="safetymeasures"
                        >
                          Please select safety measures which you have already
                        </h5>

                        <div class="row" style={{ marginTop: '-11px' }}>
                          <FieldArray
                            name="selectedSafetyMeasures"
                            render={arrayHelpers => (
                              <div>
                                {productSafetyMeasures.map(safetyMeasure => (
                                  <div>
                                    <label key={safetyMeasure} style={{ color: '#27273E' }}>
                                      <input
                                        name="selectedSafetyMeasures"
                                        type="checkbox"
                                        value={safetyMeasure}
                                        onChange={e => {
                                          if (e.target.checked) {
                                            arrayHelpers.push(safetyMeasure);
                                          } else {
                                            arrayHelpers.remove(safetyMeasure);
                                          }
                                        }}
                                      />
                                      <span className="safety">{safetyMeasure}</span>
                                    </label>
                                    <br></br>
                                  </div>
                                ))}
                              </div>
                            )}
                          />
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5bh-content"
                      id="panel5bh-header"
                    >
                      <Typography
                        className={classes.heading}
                        style={{
                          color: '#27273E',
                          fontWeight: 'bold',
                          fontSize: '16px',
                        }}
                      >
                        Upload Documents
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div class="row" style={{ marginLeft: '-195px' }}>
                          <div class="col-5">
                            <div class="card-body">
                              <div
                                class="container"
                                style={{
                                  border: '1px dashed gray',
                                  height: '265px',
                                  fontWeight: 'bold',
                                  backgroundColor: '#efefef',
                                  width: '310px',
                                  textAlign: 'center',
                                  marginLeft: '110px',
                                }}
                              >
                                <div class="header" />
                                <div class="file upload">
                                  <FontAwesomeIcon icon={faArrowCircleUp} className="uploadDocs" />
                                  <div
                                    class=" box"
                                    style={{
                                      border: '1px dashed gray',
                                      textAlign: 'center',
                                      marginLeft: '67px',
                                      marginTop: '20px',
                                      width: '286px',
                                      backgroundColor: 'white',
                                    }}
                                  >
                                    <h6>Choose or Drag files to Upload</h6>

                                    <div>
                                      <input
                                        type="file"
                                        id="myfile"
                                        name="myfile"
                                        style={{
                                          textAlign: 'center',
                                          marginTop: '-33px',
                                          position: 'absolute',
                                          marginLeft: '-93px',
                                          opacity: '0',
                                        }}
                                      />
                                    </div>
                                    <div></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-7">
                            <div class="card-body" style={{ marginLeft: '86px' }}>
                              <div
                                class="container"
                                style={{
                                  border: '0px dashed gray',
                                  height: '271px',
                                  width: '513px',
                                }}
                              >
                                <div class="row">
                                  <input
                                    type="file"
                                    style={{ marginLeft: '-24px', marginTop: '5px' }}
                                    defaultValue={''}
                                    key={inputKey}
                                    multiple
                                    onChange={multipleFileChangeHandler}
                                  />
                                  <button
                                    type="button"
                                    class="btn btn-primary"
                                    onClick={multipleFileUploadHandler}
                                    style={{ width: '97px', height: '40px', marginTop: '-4px' }}
                                  >
                                    Upload
                                  </button>
                                </div>
                                <br></br>

                                <div
                                  class="wrapper"
                                  style={{
                                    marginLeft: '-71px',
                                    width: '475px',
                                  }}
                                >
                                  <ul>
                                    <li style={{ listStyle: 'none' }}>
                                      <div class="fileprogress">
                                        {document ? (
                                          <div>
                                            {documents.map(doc => (
                                              <div class="fileitem">
                                                <FontAwesomeIcon
                                                  icon={faFilePdf}
                                                  style={{
                                                    color: 'red',
                                                    backgroundColor: 'white',
                                                    fontSize: '22px',
                                                  }}
                                                />
                                                <div class="fileinfo">
                                                  <div>
                                                    <Link
                                                      href={doc.location}
                                                      class="filename"
                                                      target="__blank"
                                                    >
                                                      {doc.name}
                                                    </Link>
                                                  </div>
                                                  <div class="filesize">
                                                    <div class="fileclose">X</div>
                                                  </div>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        ) : null}
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
              <Grid item xs={2} style={{ marginTop: '85px' }}>
                <button
                  style={{
                    marginTop: '0px',
                    marginLeft: '162px',
                    width: '40px',
                    backgroundColor: 'whitesmoke',
                    border: 'none',
                  }}
                  onClick={() => handleInsuranceEdit(values)}
                  type="button"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ color: '#27273E', marginBottom: '7px' }}
                  />
                </button>
                <h4 id="sideHead" style={{ fontSize: '20px', color: '#27273E' }}>
                  Insured Detail&nbsp;&nbsp;
                </h4>

                <p style={{ fontSize: '14px', color: '#333' }}>
                  <FontAwesomeIcon icon={faUser} style={{ color: '#F04763' }} />{' '}
                  {formData.insuredName}
                </p>

                <p style={{ fontSize: '14px', color: '#333' }}>
                  <FontAwesomeIcon icon={faPhone} style={{ color: '#F04763' }} />{' '}
                  {formData.mobileNumber}
                </p>
                <p style={{ fontSize: '14px', color: '#333' }}>
                  {' '}
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: '#F04763' }} />
                  {formData.emailId}
                </p>

                <h4 id="sideHead1" style={{ fontSize: '20px', color: '#27273E' }}>
                  Property Detail&nbsp;&nbsp;
                </h4>
                {riskDetails.map((riskDetail, index) => (
                  <div>
                    <div>
                      <button
                        style={{
                          marginTop: '10px',
                          marginLeft: '132px',
                          width: '40px',
                          backgroundColor: 'whitesmoke',
                          border: 'none',
                        }}
                        type="button"
                        onClick={() => handlePropertyEdit(index, values)}
                      >
                        <FontAwesomeIcon
                          icon={faEdit}
                          style={{ color: '#27273E', marginBottom: '39px' }}
                        />
                      </button>
                      <h5
                        style={{
                          fontSize: '14px',
                          marginTop: '-56px',
                          fontWeight: 'bold',
                          color: '#27273E',
                        }}
                      >
                        {riskDetail.propertyName}
                      </h5>
                    </div>
                    <p style={{ fontSize: '14px', color: '#333' }}>
                      {riskDetail.address.propertyArea}
                    </p>
                    <p style={{ fontSize: '14px', marginTop: '-14px', color: '#333' }}>
                      {riskDetail.address.propertyCity}
                    </p>
                    <p style={{ fontSize: '14px', marginTop: '-14px', color: '#333' }}>
                      {riskDetail.address.geoCode}
                    </p>
                  </div>
                ))}
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              onClick={() => handleSubmit('add')}
              style={{
                marginLeft: '740px',
                width: '180px',
                height: '40px',
                borderRadius: '34px',
                backgroundColor: '#F04763',
                color: 'white',
              }}
            >
              <AddIcon />
              &nbsp; Add Property
            </Button>
            &nbsp;&nbsp;
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              onClick={() => handleSubmit('save')}
              style={{
                width: '193px',
                height: '40px',
                borderRadius: '34px',
                backgroundColor: '#27273E',
                color: 'white',
              }}
            >
              Save & Continue &nbsp;
              <ArrowForwardIcon />
            </Button>
          </Form>
        )}
      />
    </>
  );
};

FormPropertyDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default FormPropertyDetails;
