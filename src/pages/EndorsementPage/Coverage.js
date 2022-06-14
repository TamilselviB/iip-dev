import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './Info.css';
import Radio from '@material-ui/core/Radio';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
// import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import IIPNumberFormat from '../../components/IIPNumberFormat/IIPNumberFormat';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import Checkbox from '@material-ui/core/Checkbox';
import CoverModal from '../.././components/util/CoverModal';
// import { Checkbox } from "formik-material-ui";
import { Formik, Form, Field, FieldArray } from 'formik';
import * as ProjectConstants from '../../utils/dropdownValues';
import CheckboxCross from './checkbox_cross.svg';
import Icon from '@material-ui/core/Icon';
import {useField,useFormik,} from 'formik'; 

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

export default function RiskInfo({ formData,Values,setValues,setFieldValue, values, defaultType = 'freeText', disabledCoverage = '', selectedPolicy = '', cover = false, sumInsured = false }) {
  console.log("🚀 ~ file: Coverage.js ~ line 30 ~ RiskInfo ~ formData", defaultType)

  const [insured, setInsured] = React.useState('USD');
  const [exRate, setExRate] = React.useState('%');
  const [currencyName, setCurrencyName] = React.useState('USD');
  const [standard, setStandard] = useState(defaultType == 'freeText');
  const [disablePolicyCoverage, setDisablePolicyCoverage] = useState('');
  const [disableLocationCoverage, setDisableLocationCoverage] = useState('');
  console.log("🚀 ~ file: Coverage.js ~------------------ line 30 ~ RiskInfo ~ formData", values)

  // const [Values,setValues]=useState(values.productCovers)

  // const [special, setSpecial] = useState(false);
  const [expectedCoverageValue, setExpectedCoverageValue] = React.useState('');
  const [deductibleValue, setDeductibleValue] = React.useState('');
  const [remarksValue, setRemarksValue] = React.useState('');

  useEffect(() => { setStandard(defaultType == 'freeText' ? true : false) }, [defaultType])
  useEffect(() => {
    if (selectedPolicy != '') {
      setDisableLocationCoverage(selectedPolicy == 'Policy Cover' ? true : '')
      setDisablePolicyCoverage(selectedPolicy == 'Location Cover' ? true : '')
    }

  }, [selectedPolicy])
  useEffect(() => { 
    console.log(values)
    if(values.productCovers)
      setValues([...values.productCovers]) }, [values])

  const setExpectedCoverageFromModal = data => {
    setExpectedCoverageValue(data);
    values.expectedCoverage = data;
  };

  const setDeductibleValueFromModal = data => {
    setDeductibleValue(data);
    values.deductible = data;
  };

  const setRemarksValueFromModal = data => {
    setRemarksValue(data);
    values.remarks = data;
  };
  const handleInsuredChange = event => {
    setInsured(event.target.value);
    setCurrencyName(event.target.label);
    var idx = event.nativeEvent.target.selectedIndex;
    setCurrencyName(event.nativeEvent.target[idx].text);
    console.log('currency name is' + currencyName);
  };
  const handleExRateChange = event => {
    setExRate(event.target.value);
  };

  const standardCvg = () => {
    if (disabledCoverage != 'freeText')
      setStandard(true);
  };

  const specialCvg = () => {
    setStandard(false);
  };


  const currencies = ProjectConstants.CURRENCIES;
  const rate = ProjectConstants.RATETYPE;
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <Typography>
              <div>
                <Radio
                  checked={!standard}
                  color="primary"
                  name="coverageType"
                  style={{ height: '19px' }}
                  onClick={specialCvg}
                />
                <label style={{ color: '#27273E' }}>Template</label>

                <Radio
                  checked={standard}
                  color="primary"
                  name="coverageType"
                  style={{ height: '19px', marginLeft: '110px' }}
                  onClick={standardCvg}
                />
                <label style={{ color: '#27273E' }}>Free Text</label>
              </div>
              {!standard ? (
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
                          disabled={disableLocationCoverage||!cover && sumInsured}
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
                              isclicked:true
                            })
                          }
                        >
                          Add Cover &nbsp;
                                    <AddIcon />
                        </Button>
                        {Values && Values.length > 0
                          ? Values.map(
                            (productCover, index) =>
                              !productCover.isPolicyLevel && (
                                <div key={index} style={{ marginTop: '-8px' }}>
                                  <Field
                                    type="checkbox"
                                    component={Checkbox} 
                                    icon={cover&&productCover.isDefault ?
                                      <Icon>
                                        <img
                                          src={CheckboxCross}
                                          alt="aa"
                                          height="100%"
                                          className="mx-auto d-block mb-3"
                                        /></Icon>:<CheckBoxOutlineBlankIcon/>
                                    }
                                    checkedIcon={<CheckBoxIcon />}
                                    checked={
                                      // productCover.isDefault
                                      (productCover.isDefault&&!productCover.isclicked) || productCover.isMandatory ||( productCover.isclicked&&!productCover.isDefault )
                                    }
                                    disabled={
                                      productCover.isMandatory || disableLocationCoverage || (!cover && sumInsured )
                                    }
                                    // name={`Values.${index}.isDefault`}
                                    color="primary"
                                    inputProps={{
                                      'aria-label': 'secondary checkbox',
                                    }}
                                    style={{
                                      marginLeft: '-85px',
                                    }}
                                    onClick={event => {
                                      let vv=Values;
                                      // productCover.isDefault = false;
                                      if (disablePolicyCoverage && event.target.checked) {
                                        // productCover.isDefault = true;
                                        // vv[index].isclicked = true;
                                        if(vv[index].isDefault)
                                        vv[index].isclicked = false;
                                        else
                                        vv[index].isclicked = true;
                                      }
                                      else if (disablePolicyCoverage && !event.target.checked) {
                                        if(vv[index].isDefault)
                                        vv[index].isclicked = true;
                                        else
                                        vv[index].isclicked = false;

                                        // vv[index].isDefault = false;
                                        // vv[index].isDefault=false
                                      }
                                      else if (!event.target.checked) {

                                        // productCover.isDefault = false;
                                        vv[index].isclicked = false;
                                      }
                                      else if (event.target.checked) {
                                        // productCover.isDefault = true;
                                        vv[index].isclicked = true;

                                      }
                                      setValues([...vv])
                                    }}
                                  />
                                  <Field
                                    id="outlined-secondary"
                                    as={TextField}
                                    disabled={(!productCover.isNewCover)}
                                    // disabled={(!productCover.isNewCover||(disableLocationCoverage||productCover.isNewCover!=true))}
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
                                    disabled={ (productCover.isDefault&&(cover || sumInsured) && !sumInsured)||disableLocationCoverage}
                                    as={TextField}
                                    name={`productCovers.${index}.sumAssured`}
                                    onChange={(e)=>{if(cover || sumInsured)
                                      setFieldValue(`productCovers.${index}.isModified`,true)}}
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
                                    disabled={ productCover.isDefault&&(cover || sumInsured) || disableLocationCoverage}
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
                    name="policyLevelCover"
                    render={arrayHelpers => (
                      <div>
                        <Button
                          variant="contained"
                          disabled={disablePolicyCoverage}
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
                              isclicked:true
                            })
                          }
                        >
                          Add Cover &nbsp;
                                    <AddIcon />
                        </Button>
                        {values.policyLevelCover && values.policyLevelCover.length > 0
                          ? values.policyLevelCover.map(
                            (productCover, index) =>
                              productCover.isPolicyLevel && (
                                <div key={index} style={{ marginTop: '-8px' }}>
                                  <Field

                                    type="checkbox"
                                    component={Checkbox} 
                                    icon={cover&&productCover.isDefault ?
                                      <Icon>
                                        <img
                                          src={CheckboxCross}
                                          alt="aa"
                                          height="100%"
                                          className="mx-auto d-block mb-3"
                                        /></Icon>:<CheckBoxOutlineBlankIcon/>
                                    }
                                    checkedIcon={<CheckBoxIcon />}
                                    checked={
                                      // productCover.isDefault
                                      (productCover.isDefault&&!productCover.isclicked) || productCover.isMandatory ||( productCover.isclicked&&!productCover.isDefault )
                                    }
                                    disabled={
                                      productCover.isMandatory || disablePolicyCoverage || (!cover && sumInsured )
                                    }
                                    color="primary"
                                    inputProps={{
                                      'aria-label': 'secondary checkbox',
                                    }}
                                    style={{
                                      marginLeft: '-85px',
                                    }}
                                    onClick={event => {
                                      let vv=values.policyLevelCover;
                                      // productCover.isDefault = false;
                                      if (disableLocationCoverage && event.target.checked) {
                                        // productCover.isDefault = true;
                                        // vv[index].isclicked = true;
                                        if(vv[index].isDefault)
                                        vv[index].isclicked = false;
                                        else
                                        vv[index].isclicked = true;
                                      }
                                      else if (disableLocationCoverage && !event.target.checked) {
                                        if(vv[index].isDefault)
                                        vv[index].isclicked = true;
                                        else
                                        vv[index].isclicked = false;

                                        // vv[index].isDefault = false;
                                        // vv[index].isDefault=false
                                      }
                                      else if (!event.target.checked) {

                                        // productCover.isDefault = false;
                                        vv[index].isclicked = false;
                                      }
                                      else if (event.target.checked) {

                                        // productCover.isDefault = true;
                                        vv[index].isclicked = true;

                                      }
                                      setFieldValue('policyLevelCover',[...vv])
                                      // setValues([...vv])
                                    }}
                                  />
                                  <Field
                                    id="outlined-secondary"
                                    as={TextField}
                                    disabled={(!productCover.isNewCover) || (disablePolicyCoverage || productCover.isNewCover != true)}
                                    name={`policyLevelCover.${index}.coverName`}
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
                                    disabled={ productCover.isDefault&&(cover || sumInsured) && !sumInsured ||disablePolicyCoverage}
                                    // disabled={(disablePolicyCoverage||(disableLocationCoverage?productCover.isNewCover!=true?true:false:false))}
                                    name={`policyLevelCover.${index}.sumAssured`}
                                    onChange={(e)=>{if(cover || sumInsured)
                                      setFieldValue(`policyLevelCover.${index}.isModified`,true)}}
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
                                    disabled={ productCover.isDefault&&(cover || sumInsured) || disablePolicyCoverage}
                                    // disabled={(disablePolicyCoverage||(disableLocationCoverage?productCover.isNewCover!=true?true:false:false))}
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
                          : ''}
                        <br></br>
                      </div>
                    )}
                  />
                </div>
              ) : null}
              <br></br>
              {standard ? (
                <div style={{ marginLeft: '-63px', marginTop: '-9px' }}>
                  <label style={{ color: '#27273E' }}>Expected Coverage</label>
                  <br></br>
                  <Field
                    id="outlined-secondary"
                    as={TextField}
                    name="expectedCoverage"
                    variant="outlined"
                    placeholder="Expected Coverage"
                    // value={expectedCoverageValue}
                    // onChange={handleExpectedCoverageChange}
                    color="secondary"
                    style={{
                      width: '730px',
                      marginLeft: '1px',
                      marginBottom: '0px',
                    }}
                  />
                  <CoverModal
                    attrValue={values.expectedCoverage}
                    name="ExpectedCoverage"
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
                <label style={{ color: '#27273E' }}>Deductible</label>
                <br></br>
                <Field
                  id="outlined-secondary"
                  as={TextField}
                  name="deductible"
                  variant="outlined"
                  placeholder="Deductible"
                  // value={deductibleValue}
                  // onChange={handleDeductibleValueChange}
                  color="secondary"
                  style={{ width: '730px', marginLeft: '1px' }}
                />
                <CoverModal
                  name="Deductible"
                  attrValue={values.deductible}
                  setValueInparentComponent={setDeductibleValueFromModal}
                />
              </div>
              <div style={{ marginLeft: '-63px', marginTop: '-9px' }}>
                <label style={{ color: '#27273E' }}>Remarks</label>
                <br></br>

                <Field
                  id="outlined-secondary"
                  as={TextField}
                  name="remarks"
                  // value={remarksValue}
                  // onChange={handleRemarksValueChange}
                  variant="outlined"
                  placeholder="Remarks"
                  color="secondary"
                  style={{ width: '730px', marginLeft: '1px' }}
                />
                <CoverModal
                  name="Remarks"
                  attrValue={values.remarks}
                  setValueInparentComponent={setRemarksValueFromModal}
                />
              </div>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}