import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './General.css';
import CoverModal from '../../../util/CoverModal';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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

export default function PublicLiability(formData) {
  const [scopeValue, setScopeValue] = React.useState('');
  const [detailsValue, setDetailsValue] = React.useState('');
  const handleScopeValueChange = event => {
    setScopeValue(event.target.value);
  };
  const handleDetailsValueChange = event => {
    setDetailsValue(event.target.value);
  };
  const setScopeValueFromModal = data => {
    setScopeValue(data);
  };
  const setDetailsValueFromModal = data => {
    setDetailsValue(data);
    formData.details= data;
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={9}>
          <Card className="infocard">
            <CardContent>
              <div className="AlignLiability">
              <div>
                <TextField
                  id="outlined-secondary"
                  as={TextField}
                  label="No of Locations"
                  variant="outlined"
                  color="secondary"
                  className="riskAlign"
                />
                <TextField
                  id="outlined-secondary"
                  as={TextField}
                  label="Business"
                  variant="outlined"
                  color="secondary"
                  className="riskRightAlign"
                />
              </div>
              <div>
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
                  label="Annual Turnover Limit"
                  variant="outlined"
                  color="secondary"
                    className="valueAlignRight"
                />
                <TextField
                  id="outlined-secondary"
                  as={TextField}
                  label="Premises /Contract Situation Of Risk"
                  variant="outlined"
                  color="secondary"
                  className="riskRightAlign"
                />
              </div>

                <div>
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
                    label="Est.Annual Gross Profit"
                    variant="outlined"
                    color="secondary"
                    className="valueAlignRight"
                  />
                  <TextField
                    id="outlined-secondary"
                    as={TextField}
                    placeholder="USD"
                    variant="outlined"
                    color="secondary"
                    className="valueAlignSecond"
                  />
                  <TextField
                    id="outlined-secondary"
                    as={TextField}
                    label="Est. Contract Value"
                    variant="outlined"
                    color="secondary"
                    className="valueAlignRight"
                  />
                </div>
                <div>
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
                    label="Est.Annual Turn Over"
                    variant="outlined"
                    color="secondary"
                    className="valueAlignRight"
                  />
                  <TextField
                    id="outlined-secondary"
                    as={TextField}
                    label="Contract Details"
                    variant="outlined"
                    color="secondary"
                    value={detailsValue}
                    onChange={handleDetailsValueChange}
                    className="riskRightAlign"
                  />
                  <div className="contractCover">
                    <CoverModal
                      name="Contract Details"
                      attrValue={detailsValue}
                      setValueInparentComponent={setDetailsValueFromModal}
                    />
                  </div>
                </div>
                <div>
                  <TextField
                    id="outlined-secondary"
                    as={TextField}
                    variant="outlined"
                    label="Scope of Work"
                    value={scopeValue}
                    onChange={handleScopeValueChange}
                    color="secondary"
                   className="scopeAlign"
                  />
                  <div className="contractCover">
                    <CoverModal
                      name="Scope of work"
                      attrValue={scopeValue}
                      setValueInparentComponent={setScopeValueFromModal}
                    />
                  </div>
                </div>
            </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={2}>

        </Grid>
      </Grid>
      <Button type='submit' variant="contained" className="btnSave1">
        Submit&nbsp;
      </Button>
       <Button variant="contained" className="btnProperty">
              {/* <AddIcon /> */}
          Add Project&nbsp;
      </Button>
    </div>
  );
}
