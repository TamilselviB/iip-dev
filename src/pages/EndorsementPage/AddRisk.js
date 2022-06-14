import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import './Info.css';
import RiskInfo from './RiskInfo';
import PropertyInfo from './PropertyInfo';
import { Formik, Form, Field } from 'formik';
import { pick, has ,omit} from 'lodash';
import EndorseLocation from "../../components/Modal/EndorseLocation";
import * as ProjectConstants from '../../utils/dropdownValues';

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
const countries = ProjectConstants.COUNTRIES;
const occupancy = ProjectConstants.OCCUPANCY;
const constType = ProjectConstants.CONSTRUCTIONTYPE;

export default function AddRisk({ data, submit }) {
  const [open, setOpen] = React.useState(false);
  const [locationIndex, setLocationIndex] = React.useState(0);
  const [locations, setLocations] = React.useState([]);

  useEffect(() => {
    if(data.riskDetails.length>1){
      setOpen(true)
      let locationArray=[]
      data.riskDetails.map((location)=>{
        locationArray.push(`${location.subsidiaryCompany} , ${location.propertyName}`)
      })
      setLocations(locationArray)
    }
  },[])
  let riskDetails = data.riskDetails[locationIndex];
  let initialValues = pick(riskDetails, ['startDate', 'endDate', 'yearBuilt', 'noOfFloors', 'propertyName', 'occupancyType', 'buildingHeight', 'constructionType', 'subsidiaryCompany', 'locationDescription',])
  let initialValues_address = pick(riskDetails.address, ['geoCode', "propertyArea", "propertyCity", "propertyBlock", "propertyStreet", "propertyCountry", "propertyGovernate"])
  let value = Object.assign({}, initialValues, initialValues_address);

  return (
    <div>
      {open ? <EndorseLocation openDialog={open} locations={locations} locationIndex={locationIndex} setLocationIndex={setLocationIndex}/> : null}
      <Formik
        initialValues={value}
        enableReinitialize
        onSubmit={values => {
          let reqObj={}
          Object.assign(reqObj,data.riskDetails[locationIndex])
          console.log(reqObj)
          reqObj['address'] = {};
          ['geoCode', "propertyArea", "propertyCity", "propertyBlock", "propertyStreet", "propertyCountry", "propertyGovernate"].forEach(key => reqObj['address'][key] = values[key]);
          console.log(reqObj)
          Object.assign(reqObj,values)
          const propertyCountry = countries.filter(
            e => e.value.toString() === values.propertyCountry,
          );
          const occupancyTypeValue = occupancy.filter(
            e => e.value.toString() === values.occupancyType,
          );
          const constructionTypeValue = constType.filter(
            e => e.value.toString() === values.constructionType,
          );
          reqObj.countryValue= propertyCountry.length > 0 ? propertyCountry[0].label : '';
          reqObj.occupancyTypeValue= occupancyTypeValue.length > 0 ? occupancyTypeValue[0].label : '';
          reqObj.constructionTypeValue=constructionTypeValue.length > 0 ? constructionTypeValue[0].label : '';
          reqObj=omit(reqObj,['geoCode', "propertyArea", "propertyCity", "propertyBlock", "propertyStreet", "propertyCountry", "propertyGovernate"])
          data.riskDetails[locationIndex]=reqObj
          submit({'riskDetails':data.riskDetails})
        }}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off" >
            <div>
              <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={9}>
                  <h4 style={{ marginLeft: "59px" }}>Risk/Location Information</h4>
                  <Card className="infocard">
                    <CardContent>
                      <div style={{ marginLeft: "68px" }}>
                        <RiskInfo />
                      </div>
                    </CardContent>
                  </Card>
                  <br />
                  <h4 style={{ marginLeft: "59px" }}>Property Information</h4>
                  <Card className="infocard">
                    <CardContent>
                      <div style={{ marginLeft: "68px" }}>
                        <PropertyInfo />
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Button  type="submit" variant="contained" className="btnSave">
                Submit
      </Button>
            </div>
          </Form>
        )}
      </Formik>

    </div>
  );
}
