import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './engineering.css';
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

export default function ContractorInfo() {
  const [InfoValue, setInfoValue] = React.useState('');
  const handleInfoValueChange = event => {
    setInfoValue(event.target.value);
  };
  const setInfoValueFromModal = data => {
    setInfoValue(data);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Principal Name"
              variant="outlined"
              color="secondary"
              className="riskAlign"
            />
            <TextField
              id="outlined-secondary"
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
              label="Consultant Name"
              className="riskAlign"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Sub Contractor Info"
              variant="outlined"
              color="secondary"
              className="riskRightAlign"
            />
            <div className="coverAlign">
              <CoverModal
                name="Sub Contractor Info"
                attrValue={InfoValue}
                setValueInparentComponent={setInfoValueFromModal}
              />
            </div>
          </div>
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Construction Start Date"
              variant="outlined"
              color="secondary"
              className="riskAlign"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Construction End Date"
              variant="outlined"
              color="secondary"
              className="riskRightAlign"
            />
          </div>
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Testing Start Date"
              variant="outlined"
              color="secondary"
              className="riskAlign"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Testing End Date"
              variant="outlined"
              color="secondary"
              className="riskRightAlign"
            />
          </div>
       <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Maintenance Start Date"
              variant="outlined"
              color="secondary"
              className="riskAlign"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Maintenance End Date"
              variant="outlined"
              color="secondary"
              className="riskRightAlign"
            />
          </div>

          <div>

            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Extended Maintenance Start Date"
              variant="outlined"
              color="secondary"
              className="riskAlign"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              label=" Extended Maintenance End Date"
              variant="outlined"
              color="secondary"
              className="riskRightAlign"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
