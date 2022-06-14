import React, { useEffect,useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory } from "react-router-dom";
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEndorsementType } from "../../actions/endorsePolicy";
import { Formik, Form, Field, FieldArray } from 'formik';
import TextField from '@material-ui/core/TextField';
import CoverModal from '../util/CoverModal';
import { element } from "prop-types";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" style={{ color: "white" }}>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
          style={{ width: "65px" }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const EndorseModal = ({ id,radioChange }) => {
  console.log("inside EndorseModal")
  const [startDate, setStartDate] = useState();
  const date = new Date();
  let today = moment(date, 'yyyy-mm-dd').format();
  today = today.split('T');
  today = today[0];
  useEffect(() => {
    setStartDate(today);
  }, []);
  const history = useHistory();
  const [value, setValue] = React.useState('');
  const [checkBoxValue, setCheckBoxValue] = React.useState({ 'Want to Increase/Decrease the Sum Insured': false, 'Want to Add/Remove a Cover': false });

  const dispatch = useDispatch();
  const endorsementType = useSelector(state => state.endorseReducer.endorsementType);

  const handleChange = (event) => {
    let ch = { ...checkBoxValue }
    Object.keys(ch).map((element) => { ch[element] = false })
    setCheckBoxValue(ch)
    setValue(event.target.value);
  };
  const handleCheckBoxChange = (event) => {
    setValue('');
    setCheckBoxValue({ ...checkBoxValue, [event.target.name]: event.target.checked });
  };
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setValue('')
    setOpen(false);
    radioChange(false)
  };
  const onDateChange = (e) => {
    if (e.target.value) {
      setStartDate(e.target.value);
    }
  };
  const handleProceed = () => {
    if ((value != '') || (checkBoxValue['Want to Increase/Decrease the Sum Insured'] != false || checkBoxValue['Want to Add/Remove a Cover'] != false)) {
      let selectedType
      if (value != '')
         selectedType = endorsementType.filter(element => element.endorsementDescription == value)
      history.push({ pathname: '/Customer/Endorsement', state: { type: value == '' ? checkBoxValue : value, policyId: id, endorsementId: value == '' ? 5 :  selectedType[0].id, remarksValue: remarksValue ,endorsementEffectiveDate:startDate} });
    }
    setOpen(false);
  };
  useEffect(() => {
    dispatch(fetchEndorsementType());
  }, []);
  const [remarksValue, setRemarksValue] = React.useState('');
  const handleRemarksValueChange = event => {
    setRemarksValue(event.target.value);
  };
  const setRemarksValueFromModal = data => {
    setRemarksValue(data);
  };
  const check = () => {
    return (value == '') && (checkBoxValue['Want to Increase/Decrease the Sum Insured'] == false && checkBoxValue['Want to Add/Remove a Cover'] == false)
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{ backgroundColor: "rgb(39, 39, 62)" }}>
          Select your Endorsement Request
        </DialogTitle>
        <DialogContent dividers>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <h5>Do you want to make changes to the Insured Details</h5>
            {(endorsementType.filter(element => element.endorsementType == "Do you want to make changes to the Insured Details")).map((element) => {
              return (<FormControlLabel value={element.endorsementDescription} control={<Radio />} label={<p style={{ marginBottom: 0 }}>&nbsp;{element.endorsementDescription}</p>} />)
            })}
            <h5>Do you want to make changes to the Risk Information</h5>
            {(endorsementType.filter(element => element.endorsementType == "Do you want to make changes to the Risk Information")).map((element) => {
              return (<FormControlLabel value={element.endorsementDescription} control={<Radio />} label={<p style={{ marginBottom: 0 }}>&nbsp;{element.endorsementDescription}</p>} />)
            })}
            <FormGroup >
              <h5>Do you want to make changes to the Cover Details</h5>
              {(endorsementType.filter(element => element.endorsementType == "Do you want to make changes to the Cover Details")).map((element) => {
                return (<FormControlLabel control={<Checkbox checked={checkBoxValue[element.endorsementDescription]} onChange={handleCheckBoxChange} name={element.endorsementDescription} />} label={<p style={{ marginBottom: 0 }}>&nbsp;{element.endorsementDescription}</p>} />)
              })}
            </FormGroup>
            <h5>Do you want to change Policy Details</h5>
            {(endorsementType.filter(element => element.endorsementType == "Do you want to change Policy Details")).map((element) => {
              return (<FormControlLabel value={element.endorsementDescription} control={<Radio />} label={<p style={{ marginBottom: 0 }}>&nbsp;{element.endorsementDescription}</p>} />)
            })}
          </RadioGroup>
          <label>Endorsement Remarks</label>
          <br />
          <TextField
            id="outlined-secondary"
            as={TextField}
            name="remarks"
            value={remarksValue}
            onChange={handleRemarksValueChange}
            variant="outlined"
            placeholder="Endorsement Remarks"
            color="secondary"
            style={{ width: '730px', marginLeft: '1px' }}
          />
          <CoverModal
            name="Remarks"
            attrValue={remarksValue}
            setValueInparentComponent={setRemarksValueFromModal}
          />
          <label>Effective Date for Endorsement</label>
          <br/>
          <TextField
            id="date"
            type="date"
            value={startDate}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onDateChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            disabled={check()}
            autoFocus
            onClick={handleProceed}
            style={{
              fontSize: "17px",
              backgroundColor: "#F04763",
              color: "white",
              height: "40px",
              width: "100px",
              float: "right"
            }}
          >
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default EndorseModal;
