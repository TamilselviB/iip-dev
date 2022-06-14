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

export default function DeleteLocation({ data, submit }) {
  const [open, setOpen] = React.useState(true);
  const [locationIndex, setLocationIndex] = React.useState(0);
  const [locations, setLocations] = React.useState([]);

  useEffect(() => {
      let locationArray=[]
      data.riskDetails.map((location)=>{
        locationArray.push(`${location.subsidiaryCompany} , ${location.propertyName}`)
      setLocations(locationArray)
    })
  },[])
  const confirmDelete = () => {
    let rd=data.riskDetails.filter((element) => `${element.subsidiaryCompany} , ${element.propertyName}` != locations[locationIndex])
    let deletedlocation=data.riskDetails.filter((element) => `${element.subsidiaryCompany} , ${element.propertyName}` == locations[locationIndex])
    deletedlocation[0].isDeleted=true;
    // deletedlocation[0].isModified=true;
    console.log("🚀 ~ file: DeleteLocation.js ~ line 42 ~ confirmDelete ~ deletedlocation", deletedlocation)
    
    submit({ 'riskDetails': [...rd,...deletedlocation] })
  };

  return (
    <div>
      {open ? <EndorseLocation openDialog={open} locations={locations}  setLocationIndex={setLocationIndex} confirmDelete={confirmDelete}/> : null}
     
    </div>
  );
}
