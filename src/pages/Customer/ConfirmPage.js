import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { push as routerPush } from 'connected-react-router';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  faEdit,
  faCheckCircle,
  faCheck,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import makeAnimated from 'react-select/animated';
import * as getQuoteService from '../../Services/getQuoteService';
import * as propertyInsuranceService from '../../Services/propertyInsuranceService';

import MultiSelectItem from '../../components/pages/Customer/MultiSelectItem';
import { numberFormatUSFormat } from '../../utils/utils';

import { totalExposure, types, nameRisk, propertyInfo } from '../../utils/utils';
import { head } from 'lodash';

const useStyles = makeStyles(theme => ({
  textCenter: {
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
}));
const animatedComponents = makeAnimated();
// Sample table
function HeadDataRisk(descriptionNameRisk) {
  return { descriptionNameRisk };
}
function HeadDataProperty(descriptionNameProperty) {
  return { descriptionNameProperty };
}
function HeadDataCover(descriptionNameCover) {
  return { descriptionNameCover };
}
function HeadDataMeasures(descriptionNameMeasures) {
  return { descriptionNameMeasures };
}

function HeadDataTerms(descriptionTerms) {
  return { descriptionTerms };
}

function HeadDataDocument(descriptionNameDocument) {
  return { descriptionNameDocument };
}
const rowHeadRisk = [HeadDataRisk('Risk Info')];
const rowHeadProperty = [HeadDataProperty('Property Info')];
const rowHeadCover = [HeadDataCover('Cover Info')];
const rowHeadMeasures = [HeadDataMeasures('Safety Measures')];
const rowHeadTerms = [HeadDataTerms('Terms and Conditions')];
const rowHeadDocument = [HeadDataDocument('Uploaded Documents')];
// End sample
const ConfirmPage = ({ formData, prevStep, nextStep, props }) => {
  let insuranceResult = '';
  console.log(formData);
  const insuranceCompanies = [];
  const coverArray = formData.product.covers;
  const dispatch = useDispatch();
  let userid = useSelector(state => state.authReducer.userid) || sessionStorage.getItem('userid');
  const [companies, setCompanies] = React.useState([]);
  let obj = {};
  if (formData.products) {
    obj = {
      productId: formData.product,
    };
  } else {
    obj = {
      productId: `${formData.product.productId}`,
    };
  }
  useEffect(() => {
    getQuoteService.getProduct(obj).then(data => {
      console.log(data);
      insuranceResult = data;
      insuranceResult.map(result => {
        insuranceCompanies.push({
          value: result.companyId,
          label: result.company.companyName,
        });
      });
      setCompanies(insuranceCompanies);
    });
  }, []);
  let rowsRisk = [];
  let rowsProperty = [];
  let terms = [];
  let coverDetails = [];
  let coversInfo = [];
  let safetyMeasures = [];

  let documents = [];
  formData.riskDetails.map(result => {
    rowsRisk.push({
      Governate: result.address.propertyGovernate,
      Street: result.address.propertyStreet,
      Block: result.address.propertyBlock,
      Area: result.address.propertyArea,
      City: result.address.propertyCity,
      Country: result.countryValue,
      Geocode: result.address.geoCode,
    });

    rowsProperty.push({
      Occupancy: result.occupancyTypeValue,
      'Construction Type': result.constructionTypeValue,
      'Year Built': result.yearBuilt,
      'No of Floors': result.noOfFloors,
      'Location Description': result.locationDescription,
    });

    coverDetails.push({
      covers: [...result.covers,...formData.policyLevelCover],
      deductible: result.deductible,
      remarks: result.remarks,
      expectedCoverage: result.expectedCoverage,
    });
    if (result.safetyMeasures !== undefined) {
      safetyMeasures.push(result.safetyMeasures);
    } else {
      safetyMeasures.push(['No safety measures selected.']);
    }

    documents.push(result.document);

    result.covers.map(cover => {
      coversInfo.push(cover);
    });
  });
  ;
  let policyCover = [];
  formData.policyLevelCover.map(policy => {
    policyCover.push(policy);
  })
  console.log(policyCover)
  coversInfo.push.apply(coversInfo,policyCover);
  coversInfo.map(value => {
    if (value.sumAssured === '' || !value.sumAssured) {
      value.sumAssured = 0;
    }
    if (value.rate === '' || !value.rate) {
      value.rate = 0;
    }
  });
  console.log(coversInfo,coverDetails)
  console.log(documents);
  if(formData.terms !== null){
    terms = [
      {
        type: 'Inclusion',
        value: formData.terms.Inclusion,
      },
      {
        type: 'Exclusion',
        value: formData.terms.Exclusion,
      },
      {
        type: 'Warranty',
        value: formData.terms.Warranty,
      },
      {
        type: 'Subjectivity',
        value: formData.terms.Subjectivity,
      },
    ];
  } else {
    terms = [{
      type: 'Inclusion',
      value: [''],
    },
    {
      type: 'Exclusion',
      value: [''],
    },
    {
      type: 'Warranty',
      value: [''],
    },
    {
      type: 'Subjectivity',
      value: [''],
    },]
  }
  

  const classes = useStyles();
  const [direction, setDirection] = useState('back');
  // const formData = formData;
  const companiesArray = [];
  const [companiesDetail, setCompaniesDetail] = useState([]);

  const addInsuranceCompany = companiesList => {
    var selectedCompanies = [];

    companiesList.forEach(insuranceCompany => {
      selectedCompanies.push(insuranceCompany.value);
    });

    setCompaniesDetail(selectedCompanies);
  };

  const handleInsuranceAdd = selectedCompany => {
    selectedCompany.map(company => {
      companiesArray.push(company.value);
    });
    setCompaniesDetail(companiesArray);
  };
  function confirmAlert(quoteNumber) {
    Swal.fire({
      title: 'Confirmation',
      text: `Your Request Id  ${quoteNumber}  has been posted to the Insurance Companies / Brokers you have chosen, We will get back to you as soon as possible.`,
      icon: 'success',
    }).then(() => dispatch(routerPush('/Customer')));
  }
  return (
    <Formik
      initialValues={formData}
      enableReinitialize
      onSubmit={values => {
        console.log('insuranceCompanies', values.insuranceCompanies);
        console.log('values', values);
        const payload = {
          id: values.id,
          userId: userid,
          productId: values.product,
          insuredType: values.insuredType,
          contactPerson: values.contactPerson,
          insuredName: values.insuredName,
          mobileNumber: values.mobileNumber,
          alternateContact: values.alternateContact,
          email: values.emailId,
          address: {
            street: values.address,
            city: values.city,
            state: values.state,
            zip: values.pincode,
          },
          riskDetails: values.riskDetails,
          statusId: 'submitted',
          companiesDetail: companiesDetail,
          notes: values.notes,
        };
        propertyInsuranceService
          .savePropertyInsurance(payload)
          .then(data => {
            console.log('finaldata: response', data);
            confirmAlert(data.requestId);
          })
          .catch(error => {
            console.log('error', error);
          });
      }}
    >
      {({ errors, touched }) => (
        <Form className={classes.form}>
          <div className={classes.textCenter} style={{ backgroundColor: 'whiteSmoke' }}>
            <Grid
              container
              spacing={3}
              style={{
                margin: 0,
                width: '100%',
                marginTop: '80px',
              }}
            >
              <Grid item xs={2}>
                {!formData.requestId ? (
                  <div style={{ marginLeft: '30px' }}>
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
                      <h5 className="titInsuredSuccess1 ">TERMS&CONDITIONS</h5>
                    </div>
                    <div className="lineProperty" />
                    <div id="circleNext" />
                    <div>
                      <h5 className="titProperty">CONFIRM DETAILS</h5>
                    </div>
                  </div>
                ) : null}
              </Grid>

              <Grid item xs={4}>
                <h3 id="heading3" style={{ marginBottom: '-10px' }}></h3>
                <br></br>
                <h4
                  style={{
                    marginLeft: '-277px',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    marginTop: '12px',
                    color: '#4b4a4a',
                  }}
                >
                  Insured Details &nbsp;&nbsp;{' '}
                  <button
                    style={{
                      marginLeft: '-15px',
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'whitesmoke',
                      border: 'none',
                    }}
                    onClick={() => {
                      prevStep();
                      prevStep();
                    }}
                    type="button"
                  >
                    {!formData.requestId ? (
                      <FontAwesomeIcon
                        icon={faEdit}
                        style={{ color: '#F04763', marginTop: '57px' }}
                      />
                    ) : null}
                  </button>
                </h4>
                <div
                  className="insuredCard"
                  id="cardins"
                  style={{
                    width: '60%',
                    backgroundColor: 'white',
                    boxShadow: '0px 0px 3px rgba(31, 30, 47, 0.05)',
                    borderRadius: '4px',
                    marginTop: '-1px',
                  }}
                >
                  <div class="card-body">
                    <div class="container3" style={{ padding: '12px' }}>
                      <div class="row" style={{ marginTop: '-7px' }}>
                        <div class="card-cont" style={{ marginLeft: '13px' }}>
                          <p className="confirmLabel" style={{ marginBottom: '23px' }}>
                            Product
                          </p>
                          {formData.productValue ? (
                            <p className="confirmLabel2">{formData.productValue}</p>
                          ) : (
                            <p className="confirmLabel2">{formData.product.productName}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <div class="card-cont" style={{ marginLeft: '13px' }}>
                          <p className="confirmLabel" style={{ marginBottom: '23px' }}>
                            Insured Name
                          </p>
                          <p className="confirmLabel2">{formData.insuredName}</p>
                        </div>

                        <div class="card-cont" style={{ marginLeft: '13px' }}>
                          <p className="confirmLabel" style={{ marginBottom: '23px' }}>
                            Contact Person
                          </p>
                          <p className="confirmLabel2">{formData.contactPerson}</p>
                        </div>

                        <div class="card-cont" style={{ marginLeft: '13px' }}>
                          <p className="confirmLabel" style={{ marginBottom: '23px' }}>
                            E-mail Id
                          </p>
                          {!formData.requestId ? (
                            <p className="confirmLabel2">{formData.emailId}</p>
                          ) : (
                            <p className="confirmLabel2">{formData.email}</p>
                          )}
                        </div>

                        <div class="card-cont" style={{ marginLeft: '13px' }}>
                          <p className="confirmLabel" style={{ marginBottom: '23px' }}>
                            License Id
                          </p>
                          <p className="confirmLabel2">{formData.licenceId}</p>
                        </div>

                        <div class="card-cont" style={{ marginLeft: '13px' }}>
                          <p className="confirmLabel" style={{ marginBottom: '23px' }}>
                            Address
                          </p>
                          {formData.city ? (
                            <p className="confirmLabel2">
                              {formData.address}, {formData.city}, {formData.state}
                            </p>
                          ) : (
                            <p className="confirmLabel2">
                              {formData.address.street}, {formData.address.city},{' '}
                              {formData.address.state}
                            </p>
                          )}
                        </div>
                        <div class="card-cont" style={{ marginLeft: '13px' }}>
                          <p className="confirmLabel" style={{ marginBottom: '23px' }}>
                            Contact
                          </p>
                          <p className="confirmLabel2">{formData.mobileNumber}</p>

                          <p className="confirmLabel2" style={{ marginTop: '-8px' }}>
                            {formData.alternateContact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{ marginLeft: '-662px' }}>
                  <h3 id="heading3">
                    {!formData.requestId ? (
                      <p style={{ fontSize: '23px' }}>
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ fontSize: '30px', color: '#F04763' }}
                        />
                        &nbsp; You are in last step.Please confirm your details
                      </p>
                    ) : null}
                  </h3>
                </div>

                <h4
                  style={{
                    marginLeft: '-911px',
                    fontSize: '15px',
                    marginTop: '-2px',
                    fontWeight: 'bold',
                    color: '#4b4a4a',
                  }}
                  id="detheading"
                >
                  Property Details
                </h4>

                <div
                  class="cardProperty"
                  id="cardtable"
                  style={{
                    marginLeft: '-188px',
                    boxShadow: '0px 0px 3px rgba(31, 30, 47, 0.05)',
                    backgroundColor: 'white',
                  }}
                >
                  <TableContainer
                    component={Paper}
                    style={{
                      marginLeft: '22px',
                      borderTopWidth: '10px',
                      paddingTop: '20px',
                      paddingBottom: '20px',
                      width: '95%',
                    }}
                  >
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell
                            style={{
                              backgroundColor: '#efefef',
                              color: '#27273E',
                            }}
                          >
                            Subsidiary Company,Property
                            <ArrowForwardIcon
                              style={{
                                fontSize: '21px',
                                marginLeft: '15px',
                                marginBottom: '1px',
                                color: '#F04763',
                              }}
                            />
                          </TableCell>
                          {formData.riskDetails.map(result => (
                            <TableCell
                              align="center"
                              style={{
                                backgroundColor: '#efefef',
                                color: '#27273E',
                              }}
                            >
                              {result.subsidiaryCompany}, {result.propertyName}{' '}
                              {!formData.requestId ? (
                                <FontAwesomeIcon
                                  icon={faEdit}
                                  style={{
                                    color: '#F04763',
                                    marginLeft: '13px',
                                  }}
                                />
                              ) : null}
                              <FontAwesomeIcon
                                icon={faArrowCircleRight}
                                style={{
                                  color: '#F04763',
                                  fontSize: '26px',
                                  float: 'right',
                                }}
                              />
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rowHeadRisk.map(row => (
                          <TableRow
                            key={row.descriptionNameRisk}
                            style={{ backgroundColor: 'whitesmoke' }}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              style={{
                                color: '#27273E',
                                fontSize: '16px',
                                fontWeight: 'bold',
                              }}
                              colspan={formData.riskDetails.length + '1'}
                            >
                              <AddIcon style={{ marginTop: '-5px' }} /> {row.descriptionNameRisk}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableBody>
                        {nameRisk.map(names => (
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              style={{
                                color: 'black',
                                backgroundColor: 'whitesmoke',
                              }}
                            >
                              {names}
                            </TableCell>

                            {rowsRisk.map(row => (
                              <TableCell align="center">{row[names]}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableBody>
                        {rowHeadProperty.map(row => (
                          <TableRow
                            key={row.descriptionNameProperty}
                            style={{ backgroundColor: 'whitesmoke' }}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              style={{
                                color: '#27273E',
                                fontSize: '16px',
                                fontWeight: 'bold',
                              }}
                              colspan={propertyInfo.length + '1'}
                            >
                              <AddIcon style={{ marginTop: '-5px' }} />{' '}
                              {row.descriptionNameProperty}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableBody>
                        {propertyInfo.map(row => (
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              style={{
                                color: 'black',
                                backgroundColor: 'whitesmoke',
                              }}
                            >
                              {row}
                            </TableCell>
                            {rowsProperty.map(props => (
                              <TableCell align="center">{props[row]}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableBody>
                        {rowHeadCover.map(row => (
                          <TableRow
                            key={row.descriptionNameCover}
                            style={{ backgroundColor: 'whitesmoke' }}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              style={{
                                color: '#27273E',
                                fontSize: '16px',
                                fontWeight: 'bold',
                              }}
                              colspan={coverDetails.length + '1'}
                            >
                              <AddIcon style={{ marginTop: '-5px' }} /> {row.descriptionNameCover}
                            </TableCell>
                          </TableRow>
                        ))}
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            style={{
                              color: 'black',
                              backgroundColor: 'whitesmoke',
                            }}
                          >
                            Covers
                          </TableCell>
                          {coverDetails.map((result, index) => (
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                              style={{
                                color: 'black',
                                backgroundColor: 'whitesmoke',
                              }}
                            >
                              <a
                                data-tip
                                data-for={'fire' + index}
                                style={{ fontSize: '0.875rem', color: 'darkblue' }}
                              >
                                View Cover Info
                              </a>

                              <ReactTooltip
                                place="left"
                                id={'fire' + index}
                                data-type="primary"
                                effect="solid"
                                backgroundColor="#f04763"
                                textColor="black"
                                style={{ height: '400px' }}
                              >
                                <div>
                                  <h5
                                    style={{
                                      fontWeight: '600',
                                      textAlign: 'left',
                                      color: 'rgba(0, 0, 0, 0.87)',
                                    }}
                                  >
                                    Covers
                                  </h5>
                                  <Table
                                    className={classes.table}
                                    aria-label="simple table"
                                    style={{
                                      minWidth: '500px',
                                      backgroundColor: 'white',
                                    }}
                                  >
                                    <TableHead style={{ border: '1px solid lightgrey' }}>
                                      <TableRow
                                        style={{
                                          border: '1px solid lightgrey',
                                        }}
                                      >
                                        <TableCell
                                          align="left"
                                          style={{
                                            color: 'rgba(0, 0, 0, 0.87)',
                                            border: '1px solid lightgrey',
                                          }}
                                        >
                                          Cover Name
                                        </TableCell>
                                        <TableCell
                                          align="left"
                                          style={{
                                            color: 'rgba(0, 0, 0, 0.87)',
                                            border: '1px solid lightgrey',
                                          }}
                                        >
                                          Sum Insured ({result.covers[index].currencyName})
                                        </TableCell>
                                        <TableCell
                                          align="left"
                                          style={{
                                            color: 'rgba(0, 0, 0, 0.87)',
                                            border: '1px solid lightgrey',
                                          }}
                                        >
                                          Expected Rate
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    {result.covers.map(covers => (
                                      <TableBody
                                        style={{
                                          border: '1px solid lightgrey',
                                        }}
                                      >
                                        {covers.isPolicyLevel === false ? (
                                          <TableRow
                                            style={{
                                              border: '1px solid lightgrey',
                                            }}
                                          >
                                            <TableCell
                                              align="left"
                                              style={{
                                                color: '#000000c7',
                                                border: '1px solid lightgrey',
                                              }}
                                            >
                                              {covers.coverName}
                                            </TableCell>
                                            <TableCell
                                              align="left"
                                              style={{
                                                color: '#000000c7',
                                                border: '1px solid lightgrey',
                                              }}
                                            >
                                              {numberFormatUSFormat(covers.sumAssured)}
                                            </TableCell>
                                            <TableCell
                                              align="left"
                                              style={{
                                                color: '#000000c7',
                                                border: '1px solid lightgrey',
                                              }}
                                            >
                                              {numberFormatUSFormat(covers.rate)}
                                            </TableCell>
                                          </TableRow>
                                        ) : null}
                                      </TableBody>
                                    ))}
                                    <tr>
                                      <h5 style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
                                        Policy Level Coverage
                                      </h5>
                                    </tr>
                                    {result.covers.map(covers => (
                                      <TableBody
                                        style={{
                                          border: '1px solid lightgrey',
                                        }}
                                      >
                                        {covers.isPolicyLevel === true ? (
                                          <TableRow
                                            style={{
                                              border: '1px solid lightgrey',
                                            }}
                                          >
                                            <TableCell
                                              align="left"
                                              style={{
                                                color: '#000000c7',
                                                border: '1px solid lightgrey',
                                              }}
                                            >
                                              {covers.coverName}
                                            </TableCell>
                                            <TableCell
                                              align="left"
                                              style={{
                                                color: '#000000c7',
                                                border: '1px solid lightgrey',
                                              }}
                                            >
                                              {numberFormatUSFormat(covers.sumAssured)}
                                            </TableCell>
                                            <TableCell
                                              align="left"
                                              style={{
                                                color: '#000000c7',
                                                border: '1px solid lightgrey',
                                              }}
                                            >
                                              {numberFormatUSFormat(covers.rate)}
                                            </TableCell>
                                          </TableRow>
                                        ) : null}
                                      </TableBody>
                                    ))}
                                  </Table>
                                  <h4
                                    style={{
                                      fontSize: '15px',
                                      textAlign: 'left',
                                      fontWeight: '600',
                                      color: 'rgba(0, 0, 0, 0.87)',
                                    }}
                                  >
                                    Expected Coverage
                                  </h4>
                                  <p
                                    style={{
                                      textAlign: 'left',
                                      fontSize: '13px',
                                      marginTop: '-5px',
                                      color: 'white',
                                    }}
                                  >
                                    {result.expectedCoverage}
                                  </p>
                                  <h4
                                    style={{
                                      fontSize: '15px',
                                      textAlign: 'left',
                                      fontWeight: '600',
                                      marginTop: '-10px',
                                      color: 'rgba(0, 0, 0, 0.87)',
                                    }}
                                  >
                                    Deductible
                                  </h4>
                                  <p
                                    style={{
                                      textAlign: 'left',
                                      fontSize: '13px',
                                      marginTop: '-5px',
                                      color: 'white',
                                    }}
                                  >
                                    {result.deductible}
                                  </p>
                                  <h4
                                    style={{
                                      fontSize: '15px',
                                      textAlign: 'left',
                                      fontWeight: '600',
                                      marginTop: '-10px',
                                      color: 'rgba(0, 0, 0, 0.87)',
                                    }}
                                  >
                                    Remarks
                                  </h4>
                                  <p
                                    style={{
                                      textAlign: 'left',
                                      fontSize: '13px',
                                      marginTop: '-5px',
                                      color: 'white',
                                    }}
                                  >
                                    {result.remarks}
                                  </p>
                                  {/* <h4
                                      style={{
                                        fontSize: "18px",
                                        textAlign: "left",
                                      }}
                                    >
                                      {covers.coverName}
                                    </h4>
                                    <p style={{ textAlign: "left" }}>
                                      Sum Assured-{covers.sumAssured}
                                    </p>
                                    <p
                                      style={{
                                        textAlign: "left",
                                        marginTop: "-12px",
                                      }}
                                    >
                                      Expected Rate-{covers.expectedRate}
                                    </p> */}
                                </div>
                              </ReactTooltip>
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableBody>
                      <TableBody>
                        <TableRow>
                          <TableCell
                            align="left"
                            component="th"
                            scope="row"
                            style={{
                              color: 'black',
                              backgroundColor: 'whitesmoke',
                            }}
                          >
                            Total Exposure
                          </TableCell>
                          <TableCell
                            align="center"
                            component="td"
                            scope="row"
                            style={{
                              color: 'black',
                              backgroundColor: 'whitesmoke',
                            }}
                            colspan={coverDetails.length + '1'}
                          >
                            <a
                              data-tip="React-tooltip"
                              style={{ fontSize: '0.875rem', color: 'darkblue' }}
                            >
                              View Total Exposure
                            </a>
                            <ReactTooltip
                              place="left"
                              data-type="primary"
                              effect="solid"
                              backgroundColor="#f04763"
                              textColor="black"
                              style={{ height: '400px' }}
                            >
                              <div>
                                <h5
                                  style={{ fontWeight: '600', textAlign: 'left', color: 'black' }}
                                >
                                  Total Exposure
                                </h5>
                                <Table
                                  className={classes.table}
                                  aria-label="simple table"
                                  style={{ minWidth: '500px', backgroundColor: 'white' }}
                                >
                                  <TableHead style={{ border: '1px solid lightgrey' }}>
                                    <TableRow style={{ border: '1px solid lightgrey' }}>
                                      <TableCell
                                        align="left"
                                        style={{
                                          color: 'rgba(0, 0, 0, 0.87)',
                                          border: '1px solid lightgrey',
                                        }}
                                      >
                                        Cover Name
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{
                                          color: 'rgba(0, 0, 0, 0.87)',
                                          border: '1px solid lightgrey',
                                        }}
                                      >
                                        Sum Insured
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>
                                  {totalExposure(coversInfo).map(cover => (
                                    <TableBody>
                                      <TableRow>
                                        <TableCell align="left" style={{ color: '#000000c7' }}>
                                          {cover.coverName}
                                        </TableCell>
                                        <TableCell align="left" style={{ color: '#000000c7' }}>
                                          {numberFormatUSFormat(cover.sumAssured)}
                                        </TableCell>
                                      </TableRow>
                                    </TableBody>
                                  ))}
                                  {formData.totalSumAssured ? 
                                  <TableRow>
                                  <TableCell align="left" style={{ color: '#000000c7' }}>
                                    Total
                                  </TableCell>
                                  <TableCell>
                                    {numberFormatUSFormat(formData.totalSumAssured)}
                                  </TableCell>
                                  </TableRow>: null}
                                </Table>
                              </div>
                            </ReactTooltip>
                          </TableCell>
                        </TableRow>
                      </TableBody>

                      <TableBody>
                        {rowHeadMeasures.map(row => (
                          <TableRow
                            key={row.descriptionNameMeasures}
                            style={{ backgroundColor: 'whitesmoke' }}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              style={{
                                color: '#27273E',
                                fontSize: '16px',
                                fontWeight: 'bold',
                              }}
                              colspan={safetyMeasures.length + '1'}
                            >
                              <AddIcon style={{ marginTop: '-5px' }} />{' '}
                              {row.descriptionNameMeasures}
                            </TableCell>
                          </TableRow>
                        ))}

                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            style={{
                              color: 'black',
                              backgroundColor: 'whitesmoke',
                            }}
                          >
                            Safety measures You have
                          </TableCell>
                          {safetyMeasures.map((data, index) => (
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                              style={{
                                color: 'black',
                                backgroundColor: 'whitesmoke',
                              }}
                            >
                              <a
                                data-tip
                                data-for={'safetyMeasures' + index}
                                style={{ fontSize: '0.875rem', color: 'darkblue' }}
                              >
                                View Safety Measures
                              </a>

                              <ReactTooltip
                                place="top"
                                id={'safetyMeasures' + index}
                                data-type="primary"
                                backgroundColor="#f04763"
                                effect="solid"
                              >
                                {data.map(measure => (
                                  <h4
                                    style={{
                                      fontSize: '15px',
                                      textAlign: 'left',
                                      fontWeight: '600',
                                      color: 'rgba(0, 0, 0, 0.87)',
                                    }}
                                  >
                                    {measure}
                                  </h4>
                                ))}
                              </ReactTooltip>
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableBody>
                      <TableBody>
                        {rowHeadTerms.map(row => (
                          <TableRow
                            key={row.descriptionTerms}
                            style={{ backgroundColor: 'whitesmoke' }}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              style={{
                                color: '#27273E',
                                fontSize: '16px',
                                fontWeight: 'bold',
                              }}
                              colspan={terms.length + '1'}
                            >
                              <AddIcon style={{ marginTop: '-5px' }} /> {row.descriptionTerms}
                            </TableCell>
                          </TableRow>
                        ))}

                        {terms.map(term => (
                          <TableRow style={{ backgroundColor: 'whitesmoke' }}>
                            <TableCell>{term.type}</TableCell>
                            <TableCell
                              colspan={coverDetails.length + '1'}
                              style={{ padding: '0px', border: '1px solid #ddd' }}
                            >
                              <Table>
                                <TableBody>
                                  {term.value.map(data => (
                                    <TableRow>
                                      <TableCell style={{ textAlign: 'center' }}>{data}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableBody>
                        {rowHeadDocument.map(row => (
                          <TableRow key={row.descriptionNameDocument} class="confirmTable">
                            <TableCell
                              component="th"
                              scope="row"
                              style={{
                                color: '#27273E',
                                fontSize: '16px',
                                fontWeight: 'bold',
                              }}
                              colspan={documents.length + '1'}
                            >
                              <AddIcon style={{ marginTop: '-5px' }} />{' '}
                              {row.descriptionNameDocument}
                            </TableCell>
                          </TableRow>
                        ))}

                        <TableRow>
                          <TableCell
                            style={{
                              color: 'black',
                              backgroundColor: 'whitesmoke',
                            }}
                          >
                            Document
                          </TableCell>

                          {documents.map(doc => (
                            <TableCell align="center">
                              <Table>
                                <TableBody>
                                  {doc.map(data => (
                                    <TableRow>
                                      <TableCell>
                                        <a href={data.location} target="_blank">
                                          {data.name}
                                        </a>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableCell>
                          ))}
                        </TableRow>

                        <TableRow></TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                {!formData.requestId ? (
                  <div style={{ marginLeft: '-674px' }}>
                    <h4
                      style={{
                        color: '#27273E',
                        fontSize: '20px',
                        marginLeft: '-40px',
                      }}
                    >
                      Please select Insurance Company
                    </h4>
                    {/* <Dropdown placeholder='Skills' fluid multiple selection options={options} /> */}
                    {/*
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    name="insuranceCompany"
                    options={companies}
                    onChange={(e) => handleInsuranceAdd(e)}
                  />
                  */}
                    <MultiSelectItem company={companies} addSelectedCompany={addInsuranceCompany} />
                    {/* <Field
                            id="outlined-select-type-native"
                            as="select"
                            name="insuranceCompanies"
                            label="Insurance Company"
                            SelectProps={{
                              native: true,
                            }}
                            variant="outlined"
                            className="selectInsuranceCompany"
                          >
                              <option defaultValue>Select Company</option>
                             {companies.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </Field> */}
                  </div>
                ) : (
                  <div style={{ marginLeft: '-674px' }}>
                    <h4
                      style={{
                        color: '#27273E',
                        fontFamily: 'Open sans',
                        fontSize: '20px',
                        marginLeft: '-40px',
                      }}
                    >
                      Selected Insurance companies :
                    </h4>
                    {formData.company.map(res => (
                      <h5 style={{ marginLeft: '-280px' }}>{res.companyName}</h5>
                    ))}
                  </div>
                )}

                <div style={{ marginLeft: '201px', marginTop: '-76px' }}>
                  <h5
                    style={{
                      marginLeft: '-340px',
                      fontSize: '17px',
                      color: '#27273E',
                    }}
                  >
                    Notes:
                  </h5>
                  {!formData.requestId ? (
                    <Field
                      component="textarea"
                      rows="3"
                      class="form-control"
                      name="notes"
                      placeholder="Notes"
                      id="note"
                      style={{
                        height: '100px!important',
                        width: '400px',
                        marginLeft: '19px',
                      }}
                    />
                  ) : (
                    formData.notes
                  )}
                </div>
              </Grid>
              {!formData.requestId ? (
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.button}
                  style={{
                    marginLeft: '1130px',
                    width: '200px',
                    height: '40px',
                    borderRadius: '34px',
                    backgroundColor: '#27273E',
                    color: 'white',
                  }}
                >
                  Confirm & Submit
                </Button>
              ) : (
                <Link
                  to={{
                    pathname: '/Customer',
                    aboutProps: {
                      details: {
                        id: formData.userId,
                      },
                    },
                  }}
                >
                  <Button
                    type="button"
                    variant="contained"
                    className={classes.button}
                    style={{
                      marginLeft: '1130px',
                      width: '200px',
                      height: '40px',
                      borderRadius: '34px',
                      backgroundColor: '#27273E',
                      color: 'white',
                    }}
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              )}
            </Grid>
          </div>
        </Form>
      )}
    </Formik>
  );
};

ConfirmPage.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default ConfirmPage;
