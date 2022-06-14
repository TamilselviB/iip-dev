import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './Info.css';
import * as ProjectConstants from '../../utils/dropdownValues';
import moment from 'moment';

import { Formik, Form, Field } from 'formik';

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
const occupancy = ProjectConstants.OCCUPANCY;
const constType = ProjectConstants.CONSTRUCTIONTYPE;
export default function RiskInfo() {
  // const [Enddate, setEnddate] = useState();
  // const date = new Date();
  // let enddate = moment(date, 'yyyy-mm-dd').add(1, 'year').format();
  // enddate = enddate.split('T');
  // enddate = enddate[0];
  // useEffect(() => {
  //   setEnddate(enddate);
  // }, []);
  // const onDateChange = value => {
  //   if (value) {
  //     console.log('value', value);
  //     setStartDate(value);
  //     enddate = moment(value).add(1, 'year').format();
  //     enddate = enddate.split('T');
  //     enddate = enddate[0];
  //     setEnddate(enddate);
  //   }
  // };
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div >
            <div style={{ marginTop: '-10px' }}>
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
                className="selectOccupancy" >
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
                className="selectConstructionType" >
                <option defaultValue>Choose Your Construction Type</option>
                {constType.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
            </div>
            <div style={{ marginTop: '10px' }}>
              <Field
                id="outlined-secondary"
                as={TextField}
                name="yearBuilt"
                label="Year Built"
                style={{ width: '230px', marginLeft: '-43px' }}
                variant="outlined"
                color="secondary"  />
              <Field
                id="outlined-secondary"
                as={TextField}
                name="noOfFloors"
                label="No of Floors"
                style={{ width: '230px', marginLeft: '28px' }}
                variant="outlined"
                color="secondary" />
              <Field
                id="outlined-secondary"
                as={TextField}
                name="buildingHeight"
                label="Building Height (Meters)"
                variant="outlined"
                style={{ width: '230px', marginLeft: '25px' }}
                color="secondary"  />
            </div>
            <div >
              <Field
                id="outlined-secondary"
                as={TextField}
                name="locationDescription"
                label="Location Description"
                variant="outlined"
                color="secondary"
                style={{ marginLeft: '-43px', width: '744px' }}
                />
            </div>
            <div style={{ marginLeft: '-40px' }}>

              <Field
                id="date"
                as={TextField}
                name="startDate"
                label="Tentative Start Date "
                type="date"
                disabled
                // defaultValue={endorsementEffectiveDate}
                variant="outlined"
                color="secondary"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: '350px' }}
                // value={endorsementEffectiveDate}
                 />
              <Field
                id="date"
                as={TextField}
                name="endDate"
                label="Tentative End Date "
                type="date"
                disabled
                variant="outlined"
                color="secondary"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: '350px', marginLeft: '40px' }}
                // value={enddate} 
                 />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
