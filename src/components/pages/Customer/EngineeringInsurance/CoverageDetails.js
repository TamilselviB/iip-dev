import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './engineering.css';
import Radio from '@material-ui/core/Radio';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
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

export default function CoverageDetails(defaultType = 'freeText', disabledCoverage = '', values, formData) {
  const [standard, setStandard] = useState(defaultType == 'freeText');
  const standardCvg = () => {
    if (disabledCoverage != 'freeText')
      setStandard(true);
  };
  const [expectedCoverageValue, setExpectedCoverageValue] = React.useState('');
  const [deductibleValue, setDeductibleValue] = React.useState('');
  const [termsValue, setTermsValue] = React.useState('');
  const [remarksValue, setRemarksValue] = React.useState('');

  const handleExpectedCoverageChange = event => {
    setExpectedCoverageValue(event.target.value);
  };

  const handleDeductibleValueChange = event => {
    setDeductibleValue(event.target.value);
  };

  const handleRemarksValueChange = event => {
    setRemarksValue(event.target.value);
  };
  const specialCvg = () => {
    setStandard(false);
  };
  const setExpectedCoverageFromModal = data => {
    setExpectedCoverageValue(data);
    formData.expectedCoverage = data;
  };
  const setDeductibleValueFromModal = data => {
    setDeductibleValue(data);
    formData.deductible = data;
  };
  const setTermsValueFromModal = data => {
    setTermsValue(data);
  };
  const setRemarksValueFromModal = data => {
    setRemarksValue(data);
    formData.remarks = data;
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <Typography>
              <div>
                <Radio
                  checked={!standard}
                  color="primary"
                  name="coverageType"
                  style={{ height: '19px' }}
                  onClick={specialCvg}
                />
                <label>Template</label>

                <Radio
                  checked={standard}
                  color="primary"
                  name="coverageType"
                  onClick={standardCvg}
                  className="coverRadio"
                />
                <label>Free Text</label>
              </div>
              <div>
                <label className="CoverageLabel">
                  Coverage
                              </label>
                <Button variant="contained" className="btnAdd">Add Cover <AddIcon /></Button>

                <label className="sumLabel">
                  Sum Insured
                              </label>
                <TextField
                  id="outlined-select-type-native"
                  as="select"
                  name="clSumInsured"
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  className="selectSi"
                >
                </TextField>
                <label className="expectedLabel">
                  Expected Rate
                              </label>
                .  <TextField
                  id="outlined-select-type-native"
                  as="select"
                  name="clexpectedRate"
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  className="selectSi"
                >
                </TextField>
              </div>
              <div>
                <Checkbox className="checkCover" />
                <TextField
                  id="outlined-secondary"
                  placeholder="Machinery Breakdown"
                  color="secondary"
                  className="cover1"
                  variant="outlined"
                />
                <TextField
                  id="outlined-secondary"
                  placeholder="100,000"
                  className="sumInsured"
                  variant="outlined"
                />
                <TextField
                  id="outlined-secondary"
                  placeholder="2.52"
                  color="secondary"
                  className="exRate"
                  variant="outlined"
                />
              </div>
              <div>
                <Checkbox className="checkCover" />
                <TextField
                  id="outlined-secondary"
                  placeholder="Impact Damage"
                  color="secondary"
                  className="cover1"
                  variant="outlined"
                />
                <TextField
                  id="outlined-secondary"
                  placeholder="50,000"
                  className="sumInsured"
                  variant="outlined"
                />
                <TextField
                  id="outlined-secondary"
                  placeholder="7.52"
                  color="secondary"
                  className="exRate"
                  variant="outlined"
                />
              </div>
              <div>
                <Checkbox className="checkCover" />     <label>
                  Policy Level Coverage(Common across location)
                              </label>
              </div>
              <div>
                <label className="CoverageLabel">
                  Coverage
                              </label>
                <Button variant="contained" className="btnAdd">Add Cover <AddIcon /></Button>

                <label className="sumLabel">
                  Sum Insured
                              </label>
                <TextField
                  id="outlined-select-type-native"
                  as="select"
                  name="clSumInsured"
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  className="selectSi"
                >
                </TextField>
                <label className="expectedLabel">
                  Expected Rate
                              </label>
                .  <TextField
                  id="outlined-select-type-native"
                  as="select"
                  name="clexpectedRate"
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  className="selectSi"
                >
                </TextField>
              </div>
              <div>
                <Checkbox className="checkCover" />
                <TextField
                  id="outlined-secondary"
                  placeholder="BI"
                  color="secondary"
                  className="cover1"
                  variant="outlined"
                />
                <TextField
                  id="outlined-secondary"
                  placeholder="320,000"
                  className="sumInsured"
                  variant="outlined"
                />
                <TextField
                  id="outlined-secondary"
                  placeholder="5.52"
                  color="secondary"
                  className="exRate"
                  variant="outlined"
                />
              </div>
              <div>
                <Checkbox className="checkCover" />
                <TextField
                  id="outlined-secondary"
                  placeholder="BI2"
                  color="secondary"
                  className="cover1"
                  variant="outlined"
                />
                <TextField
                  id="outlined-secondary"
                  placeholder="50,000"
                  className="sumInsured"
                  variant="outlined"
                />
                <TextField
                  id="outlined-secondary"
                  placeholder="7.52"
                  color="secondary"
                  className="exRate"
                  variant="outlined"
                />
              </div>

              <div style={{ marginLeft: '-66px' }}>
                <label>Expected Coverage</label>
                <br></br>

                <TextField
                  id="outlined-secondary"
                  as={TextField}
                  name="expectedCoverage"
                  variant="outlined"
                  placeholder="Expected Coverage"
                  value={expectedCoverageValue}
                  onChange={handleExpectedCoverageChange}
                  color="secondary"
                  className="exField"
                />
                <CoverModal
                  attrValue={expectedCoverageValue}
                  name="Expected Coverage"
                  setValueInparentComponent={setExpectedCoverageFromModal}
                />
              </div>
              <div className="deducts">
                <label>Deductible</label>
                <br></br>
                <TextField
                  id="outlined-secondary"
                  as={TextField}
                  name="deductible"
                  variant="outlined"
                  placeholder="Deductible"
                  value={deductibleValue}
                  onChange={handleDeductibleValueChange}
                  color="secondary"
                  className="exField"
                />
                <CoverModal
                  name="Deductible"
                  attrValue={deductibleValue}
                  setValueInparentComponent={setDeductibleValueFromModal}
                />
              </div>
              <div className="deducts">
                <label>Remarks</label>
                <br></br>

                <TextField
                  id="outlined-secondary"
                  as={TextField}
                  name="remarks"
                  value={remarksValue}
                  onChange={handleRemarksValueChange}
                  variant="outlined"
                  placeholder="Remarks"
                  color="secondary"
                 className="exField"
                />
                <CoverModal
                  name="Remarks"
                  attrValue={remarksValue}
                  setValueInparentComponent={setRemarksValueFromModal}
                />
              </div>

            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
