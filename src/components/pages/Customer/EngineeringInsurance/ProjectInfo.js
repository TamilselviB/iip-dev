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

export default function ProjectInfo() {
  const [ScopeValue, setScopeValue] = React.useState('');
  const [DescriptionValue, setDescriptionValue] = React.useState('');
  const handleScopeValueChange = event => {
    setScopeValue(event.target.value);
  };

  const handleDescriptionValueChange = event => {
    setDescriptionValue(event.target.value);
  };
  const setScopeValueFromModal = data => {
    setScopeValue(data);
  };
  const setDescriptionValueFromModal = data => {
    setDescriptionValue(data);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Policy Type"
              variant="outlined"
              color="secondary"
              className="alignTitle"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Project Type"
              variant="outlined"
              color="secondary"
              className="alignInfo"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Project Info"
              variant="outlined"
              color="secondary"
              className="alignRight"
            />
          </div>
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Project Title"
              variant="outlined"
              color="secondary"
              className="riskAlign"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              placeholder="USD"
              variant="outlined"
              color="secondary"
              className="valueAlign"
            />
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Project Value"
              variant="outlined"
              color="secondary"
              className="proValue"
            />

          </div>
          <TextField
            id="outlined-secondary"
            as={TextField}
            label="Tentative Start Date"
            variant="outlined"
            color="secondary"
            className="riskAlign"
          />
          <TextField
            id="outlined-secondary"
            as={TextField}
            label="Tentative End Date"
            variant="outlined"
            color="secondary"
            className="riskRightAlign"
          />
          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Scope of work"
              variant="outlined"
              color="secondary"
              className="riskLocation"
            />
            <div className="coverAlign">
            <CoverModal
              name="Scope of Work"
              attrValue={ScopeValue}
              setValueInparentComponent={setScopeValueFromModal}
              />
            </div>
          </div>

          <div>
            <TextField
              id="outlined-secondary"
              as={TextField}
              label="Location Description"
              variant="outlined"
              color="secondary"
              className="riskLocation"
            />
            <div className="coverAlign">
            <CoverModal
              name="Description"
              attrValue={DescriptionValue}
              setValueInparentComponent={setDescriptionValueFromModal}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
