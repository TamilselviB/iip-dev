import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './Info.css';
import Checkbox from '@material-ui/core/Checkbox';
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

export default function RiskInfo({safetyMeasures}) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <h5>Please select Safety measures which you have already</h5>
            <div class="row" style={{ marginTop: '-11px' }}>
              <FieldArray
                name="safetyMeasures"
                render={arrayHelpers => (
                  <div>
                    {safetyMeasures.map(safetyMeasure => (
                      <div>
                        <label key={safetyMeasure} style={{ color: '#27273E' }}>
                          <input
                            name="selectedSafetyMeasures"
                            type="checkbox"
                            value={safetyMeasure}
                            onChange={e => {
                              if (e.target.checked) {
                                arrayHelpers.push(safetyMeasure);
                              } else {
                                arrayHelpers.remove(safetyMeasure);
                              }
                            }}
                          />
                          <span className="safety">{safetyMeasure}</span>
                        </label>
                        <br></br>
                      </div>
                    ))}
                  </div>
                )}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
