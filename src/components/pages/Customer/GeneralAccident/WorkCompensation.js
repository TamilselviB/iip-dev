import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './General.css';
import CoverModal from '../../../util/CoverModal';

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

export default function WorkCompensation(formData) {
  const [descriptionValue, setDescriptionValue] = React.useState('');
  const handleDescriptionValueChange = event => {
    setDescriptionValue(event.target.value);
  };
  const setDescriptionValueFromModal = data => {
    setDescriptionValue(data);
    formData.description = data;
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="No of Employees"
              variant="outlined"
              color="secondary"
              className="riskAlign"
            />
            <TextField
              id="Estimated Monthly Wages"
              as={TextField}
              label="Contractor Name"
              variant="outlined"
              color="secondary"
              className="riskRightAlign"
            />
          </div>
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Estimated Annual Wages"
              className="riskAlign1"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Company Business activity"
              variant="outlined"
              color="secondary"
              className="busActivity"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Employer Liab Limit"
              variant="outlined"
              color="secondary"
              className="Liable"
            />
          </div>
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              variant="outlined"
              label="Description of Employees"
              value={descriptionValue}
              onChange={handleDescriptionValueChange}
              color="secondary"
              className="scopeAlign"
            />
            <div className="contractCover">
              <CoverModal
                name="Description"
                attrValue={descriptionValue}
                setValueInparentComponent={setDescriptionValueFromModal}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
