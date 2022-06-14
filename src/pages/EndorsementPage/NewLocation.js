import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RiskInfo from './RiskInfo';
import PropertyInfo from './PropertyInfo';
import Coverage from './Coverage';
import SafetyMeasures from './SafetyMeasures';
import Terms from './Terms';
import Upload from './Upload';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import * as ProjectConstants from '../../utils/dropdownValues';
import { Formik, Form, Field } from 'formik';
import { pick, has, omit } from 'lodash';
import Button from '@material-ui/core/Button';
import * as getQuoteService from '../../../src/Services/getQuoteService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faEnvelope,
  faUser,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';


const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: 30,
    marginLeft: theme.spacing(10),
  },
  alert: {
    padding: 30,
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    color: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.palette.background.default,
    fontFamily: 'sans-serif',
  },
}));

const countries = ProjectConstants.COUNTRIES;
const occupancy = ProjectConstants.OCCUPANCY;
const constType = ProjectConstants.CONSTRUCTIONTYPE;

export default function NewLocation({ data, submit ,endorsementEffectiveDate}) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = useState({
    'deductible': '',
    'expectedCoverage': '',
    'remarks': '',
    'sm': [],
    "document": [],
    'covers': [],
    'Inclusion': ['', '', '', ''],
    'Exclusion': ['', '', '', ''],
    'Warranty': ['', '', '', ''],
    'Subjectivity': ['', '', '', ''],
    'endDate':data.endDate.slice(0,10),
    'startDate':endorsementEffectiveDate,
    policyLevelCover:data.policyLevelCover
  })
  const [Values,setValues]=useState(value.covers)
    useEffect(() => { 
      if(value.productCovers)
        setValues([...value.productCovers]) }, [value])
  // let safetyMeasures =["Fire Alarm","Electrical Installation","Automatic Sprinkler"]
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [termsValue, setTermsValue] = useState([]);

  const setTermsValueFromModal = data => {
    setTermsValue(data);
  };

  useEffect(() => {
    let covers = [];
    let safetyMeasures = [];
    let initialValues = {
      'Inclusion': [],
      'Exclusion': [],
      'Warranty': [],
      'Subjectivity': []
    }
    Object.keys(data.terms).map((term) => { initialValues[term] = data.terms[term] })
    const payload = {
      lineOfBusinessId: 6,
    };
    getQuoteService
      .getMotorInsurance(payload)
      .then(res => {
        console.log(data)
        res.forEach(e => {
          if (e.id == data.product.id) {
            covers = e.covers;
            safetyMeasures = e.safetyMeasures;
          }
        });
        setValue({
          ...value,
          productCovers: covers,
          sm: safetyMeasures,
          'Inclusion': initialValues.Inclusion,
          'Exclusion': initialValues.Exclusion,
          'Warranty': initialValues.Warranty,
          'Subjectivity': initialValues.Subjectivity
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);

  return (
    <Formik
      initialValues={value}
      enableReinitialize
      onSubmit={values => {
        try {
          let reqObj = {}
          reqObj['address'] = {};
          ['geoCode', "propertyArea", "propertyCity", "propertyBlock", "propertyStreet", "propertyCountry", "propertyGovernate"].forEach(key => reqObj['address'][key] = values[key]);
          Object.assign(reqObj, values)
          const propertyCountry = countries.filter(e => e.value.toString() === values.propertyCountry);
          const occupancyTypeValue = occupancy.filter(e => e.value.toString() === values.occupancyType);
          const constructionTypeValue = constType.filter(e => e.value.toString() === values.constructionType);
          reqObj.countryValue= propertyCountry.length > 0 ? propertyCountry[0].label : '';
          reqObj.occupancyTypeValue= occupancyTypeValue.length > 0 ? occupancyTypeValue[0].label : '';
          reqObj.constructionTypeValue=constructionTypeValue.length > 0 ? constructionTypeValue[0].label : '';
          reqObj = omit(reqObj, ['geoCode', "propertyArea", "propertyCity", "propertyBlock", "propertyStreet", "propertyCountry", "propertyGovernate", 'Inclusion', 'Exclusion', 'Warranty', 'Subjectivity', 'sm','policyLevelCover'])
          reqObj['covers'] = [];
          console.log()
          
          values.productCovers.map((pc) => { 
            if (pc.hasOwnProperty('isclicked'))
             { 
               pc.isDefault = pc.isclicked;
                delete pc.isclicked } })
          reqObj['covers']  = values.productCovers.filter((element) => element.isDefault)
          reqObj.isAdded=true
          // reqObj['covers'] = [...values.productCovers];
          delete reqObj['productCovers']

          console.log('-----------------------bs', { 'riskDetails': [...data.riskDetails, reqObj] })
          submit({ 'riskDetails': [...data.riskDetails, reqObj] })
        } catch (error) {
          console.log("🚀 ~ file: NewLocation.js ~ line 134 ~ NewLocation ~ error", error)
        }

      }}
    >
      {({ values, errors, touched }) => (
        <Form autoComplete="off" >
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={1}>
              </Grid>
              <Grid item xs={9}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={8}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>
                      {' '}
           Risk/Location Information
          </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <RiskInfo />
                  </AccordionDetails>
                </Accordion>

                {/* Risk */}
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={8}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>
                      Property Info
          </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <PropertyInfo />
                  </AccordionDetails>
                </Accordion>

                {/* Property */}
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={8}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>
                      Coverage Details
          </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Coverage formData={value} values={values} Values={Values} setValues={setValues} selectedPolicy={'Location Cover'}/>
                  </AccordionDetails>
                </Accordion>

                {/* Cover */}
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={8}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>

                      Safety Measures
          </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <SafetyMeasures safetyMeasures={value.sm} />
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} elevation={8}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>
                      Terms and Conditions
                  </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Terms setTermsValueFromModal={setTermsValueFromModal} disabled={true} />
                  </AccordionDetails>
                </Accordion>
                {/* CostDocs */}
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} elevation={8}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>
                      Upload Documents
          </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Upload values={values}/>
                  </AccordionDetails>
                </Accordion>
                {/* Summary */}
              </Grid>
              {/* <Grid item xs={2}>
                <Typography className="sideHead">Insured Details</Typography>
                <Button className="editBtn">
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="editIcon"
                  />
                </Button> */}
                {/* <Typography className="details1">
                  <FontAwesomeIcon icon={faUser} className="userIcon" />{' '}
              Tamil
            </Typography>
                <Typography className="details">
                  <FontAwesomeIcon icon={faPhone} className="userIcon" />{' '}
              9965240540
            </Typography>
                <Typography className="details">
                  <FontAwesomeIcon icon={faEnvelope} className="userIcon" />{' '}
             abc@gmail.com
             </Typography>
                <Typography className="sideHead">Property Details </Typography>
                <Typography className="sideHead1">Tamil Property </Typography>
                <Button className="editBtn">
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="editIcon"
                  />
                </Button>
                <Typography className="details2">
                  Pallipalayam
            </Typography>
                <Typography className="details">
                  Erode
             </Typography>
                <Typography className="details">
                  +989768
            </Typography> */}
              {/* </Grid> */}
            </Grid>
            <Button type='submit' variant="contained" className="btnSave1">
              Submit&nbsp;
       {/* <ArrowForwardIcon /> */}
            </Button>
            {/* <Button variant="contained" className="btnProperty">
              <AddIcon />
          Add Property&nbsp;
      </Button> */}
          </div>
        </Form>
      )}
    </Formik>

  );
}

