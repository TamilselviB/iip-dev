import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { Formik, Form, Field } from 'formik';
import { pick, has, omit } from 'lodash';
import './Info.css';
import Coverage from './Coverage';
import * as getQuoteService from '../../../src/Services/getQuoteService';
import EndorseCover from "../../components/Modal/EndorseCover";
import { element } from 'prop-types';

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

export default function AddCover({ data, submit, cover, sumInsured }) {
  const [open, setOpen] = React.useState(true);
  const [locations, setLocations] = React.useState([]);
  const [selectedPolicy, setSelectedPolicy] = React.useState([]);
  const [defaultCoverage, setDefaultCoverage] = React.useState('');
  const [disabledCoverage, setDisabledCoverage] = React.useState('');
  const [selectedLocations, setSelectedLocations] = React.useState([]);

  const [value, setValue] = useState({
    'deductible': '',
    'expectedCoverage': '',
    'remarks': '',
    'productCovers': [],
    'policyLevelCover':[]
  })
  const [Values, setValues] = useState(value.productCovers)
  useEffect(() => {
    if (value.productCovers)
      setValues([...value.productCovers])
  }, [value])
  const confirmLocation = (policy, loc) => {
    setSelectedPolicy(policy)
    setSelectedLocations(loc)
    if (policy == 'Policy Cover') {
      setDefaultCoverage('template')
      setDisabledCoverage('freeText')
      setValue({
        ...value,
        policyLevelCover: [...data.policyLevelCover]
      })
    }
    else {
      if (!loc) {
        loc = `${data.riskDetails[0].subsidiaryCompany} , ${data.riskDetails[0].propertyName}`
        setSelectedLocations(loc)
      }
      setDefaultCoverage('freeText')
      let sL = data.riskDetails.filter((element) => `${element.subsidiaryCompany} , ${element.propertyName}` == loc)[0]
      setValue({
        productCovers: [...sL.covers],
        deductible: sL.deductible,
        expectedCoverage: sL.expectedCoverage,
        remarks: sL.remarks,
      })
    }
  };
  useEffect(() => {
    if (data.riskDetails.length > 1) {
      setOpen(true)
      let locationArray = []
      data.riskDetails.map((location) => {
        locationArray.push(`${location.subsidiaryCompany} , ${location.propertyName}`)
      })
      setLocations(locationArray)
    }
  }, [])



  return (
    <div>
      {open ? <EndorseCover openDialog={open} locations={locations} confirmLocation={confirmLocation} /> : null}
      <Formik
        initialValues={value}
        enableReinitialize
        onSubmit={values => {
          console.log("🚀 ~ file: RiskInfo.js ~ line 31 ~ RiskInfo ~ values", values)
          try {
            if (selectedPolicy == 'Location Cover') {
              let rd1 = data.riskDetails.filter((element) => `${element.subsidiaryCompany} , ${element.propertyName}` != selectedLocations)
              let rd2 = data.riskDetails.filter((element) => `${element.subsidiaryCompany} , ${element.propertyName}` == selectedLocations)[0]
              Values.map((pc) => {
                if (pc.hasOwnProperty('isclicked')) {
                  if (pc.isDefault) {
                    pc.isDefault = !pc.isclicked;
                    if (!pc.isDefault) {
                      rd2.isModified = true
                      pc.isDeleted = true
                    }
                  }
                  else {
                    pc.isDefault = pc.isclicked;
                    if (pc.isDefault) {
                      rd2.isModified = true
                      pc.isAdded = true
                    }
                  }
                  delete pc.isclicked
                }
              })
              // rd2.covers = Values.filter((element) => element.isDefault)
              rd2.covers = Values
              submit({ 'riskDetails': [...rd1, rd2] })
            } else {
              let pc = [];
              console.log(Values)
              pc = values.policyLevelCover
              pc.map((element) => {
                if (element.hasOwnProperty('isclicked')) {
                  if (element.isDefault){
                    element.isDefault = !element.isclicked;
                    if (!element.isDefault) {
                      element.isDeleted = true
                    }
                  }
                  else{
                    element.isDefault = element.isclicked;
                    if (element.isDefault) {
                      element.isAdded = true
                    }
                  }
                  delete element.isclicked
                }
              })
              // pc = pc.filter((element) => element.isDefault)
              submit({ 'policyLevelCover': [...pc] })
            }
          } catch (error) {
            console.log("🚀 ~ file: AddCover.js ~ line 114 ~ AddCover ~ error", error)
          }
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form autoComplete="off" >
            <div>
              <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={9}>

                  <Card className="infocard">
                    <CardContent>
                      <div style={{ marginLeft: "122px" }}>
                        <Coverage formData={value} values={values} selectedPolicy={selectedPolicy} defaultType={defaultCoverage} disabledCoverage={disabledCoverage} cover={cover} sumInsured={sumInsured} Values={Values} setValues={setValues} setFieldValue={setFieldValue} />
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Button type="submit" variant="contained" className="btnSave">
                Submit
       <ArrowForwardIcon />
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
