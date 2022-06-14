import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import './Info.css';
import Terms from './Terms';
import { Formik, Form, Field, FieldArray } from 'formik';

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

export default function AddTerms({data,submit}) {
  let terms = data.terms;
  let value={}
  const [termsValue, setTermsValue] = useState([]);
  const setTermsValueFromModal = data => {
    setTermsValue(data);
  };
  let initialValues ={
    'Inclusion':[],
    'Exclusion':[],
    'Warranty':[],
    'Subjectivity':[]
}
  Object.keys(data.terms).map((term) => { initialValues[term] = data.terms[term] })
  console.log(initialValues)
  // let initialValues = pick(riskDetails, ['startDate', 'endDate', 'yearBuilt', 'noOfFloors', 'propertyName', 'occupancyType', 'buildingHeight', 'constructionType', 'subsidiaryCompany', 'locationDescription',])
  // // let initialValues = pick(riskDetails.covers, [ 'startDate',])
  // // let initialValues = pick(riskDetails.terms, [ 'startDate',])
  // let initialValues_address = pick(riskDetails.address, ['geoCode', "propertyArea", "propertyCity", "propertyBlock", "propertyStreet", "propertyCountry", "propertyGovernate"])
  // let value = Object.assign({}, initialValues, initialValues_address);
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={values => {
        let reqObj={'terms':{}}
        Object.keys(values).map((value)=>{reqObj['terms'][value]=values[value]})
        console.log("🚀 ~ file: RiskInfo.js ~ line 31 ~ RiskInfo ~ values", reqObj)
        submit(reqObj)
      }}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off" >
    <div>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={9}>

          <Card className="infocard">
            <CardContent>
              <div style={{ marginLeft: "68px" }}>
                <Terms setTermsValueFromModal={setTermsValueFromModal} disabled={false}/>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Button type='submit' variant="contained" className="btnSave">
        Submit
      </Button>
    </div>
    </Form>
      )}
    </Formik>

  );
}
