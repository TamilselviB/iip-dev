import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './Info.css';
import CoverModal from '../.././components/util/CoverModal';
import AddIcon from '@material-ui/icons/Add';
import { Formik, Form, Field, FieldArray } from 'formik';
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

export default function RiskInfo({setTermsValueFromModal,disabled}) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <div>
              <h5>Inclusion</h5>
              <FieldArray name="Inclusion">
                {fieldArrayProps => {
                  const { push, form } = fieldArrayProps;
                  const { values } = form;
                  const { Inclusion } = values;
                  const updateValue = (idx, value) => {
                    console.log("--idx, value--",idx, value)
                    Inclusion[idx] = value;
                  };
                  return (
                    <div>
                      {Inclusion.map((data, index) => (
                        <div>
                          <Field
                            name={`Inclusion[${index}]`}
                            disabled={disabled}
                            defaultValue={data}
                            className="form-control terms"
                            value={data}
                          />
                          <div className='modalTerms'>
                            <CoverModal
                              name="Inclusion"
                              disabled={disabled}
                              attrValue={data}
                              fieldIndex={index}
                              handleReplace={updateValue}
                              setValueInparentComponent={setTermsValueFromModal}
                            />
                          </div>
                        </div>
                      ))}
                      {!disabled?
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => push('')}
                        className="btn btn-primary addRow"
                      >
                        <AddIcon />
                              Add Row{' '}
                      </Button>:null
                }
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <div>
              <h5>Exclusion</h5>
              <FieldArray name="Exclusion">
                {fieldArrayProps => {
                  const { push, form } = fieldArrayProps;
                  const { values } = form;
                  const { Exclusion } = values;
                  const updateValue = (idx, value) => {
                    Exclusion[idx] = value;
                  };
                  return (
                    <div>
                      {Exclusion.map((data, index) => (
                        <div>
                          <Field
                            name={`Exclusion[${index}]`}
                            disabled={disabled}
                            defaultValue={data}
                            className="form-control terms"
                          />
                          <div className="modalTerms">
                            <CoverModal
                              name="Exclusion"
                            disabled={disabled}
                            attrValue={data}
                              fieldIndex={index}
                              handleReplace={updateValue}
                              setValueInparentComponent={setTermsValueFromModal}
                            />
                          </div>
                        </div>
                      ))}
                      {!disabled?
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => push('')}
                        className="btn btn-primary addRow"
                      >
                        <AddIcon />Add Row {' '}
                      </Button>
                      :null}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <div>
              <h5>Warranty</h5>
              <FieldArray name="Warranty">
                {fieldArrayProps => {
                  const { push, form } = fieldArrayProps;
                  const { values } = form;
                  const { Warranty } = values;
                  const updateValue = (idx, value) => {
                    Warranty[idx] = value;
                  };
                  return (
                    <div>
                      {Warranty.map((data, index) => (
                        <div>
                          <Field
                            name={`Warranty[${index}]`}
                            disabled={disabled}
                            defaultValue={data}
                            className="form-control terms"
                            value={data}
                          />
                          <div className="modalTerms">
                            <CoverModal
                              name="Warranty"
                            disabled={disabled}
                            attrValue={data}
                              fieldIndex={index}
                              handleReplace={updateValue}
                              setValueInparentComponent={setTermsValueFromModal}
                            />
                          </div>
                        </div>
                      ))}
                      {!disabled?
                      
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => push('')}
                        className="btn btn-primary addRow"
                      >
                       <AddIcon /> Add Row
                              </Button>
                              :null}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <div>
              <h5>Subjectivity</h5>
              <FieldArray name="Subjectivity">
                {fieldArrayProps => {
                  const { push, form } = fieldArrayProps;
                  const { values } = form;
                  const { Subjectivity } = values;
                  const updateValue = (idx, value) => {
                    Subjectivity[idx] = value;
                  };
                  return (
                    <div>
                      {Subjectivity.map((data, index) => (
                        <div>
                          <Field
                            name={`Subjectivity[${index}]`}
                            disabled={disabled}
                            defaultValue={data}
                            className="form-control terms"
                            value={data}
                          />
                          <div className="modalTerms">
                            <CoverModal
                              name="Subjectivity"
                            disabled={disabled}
                            attrValue={data}
                              fieldIndex={index}
                              handleReplace={updateValue}
                              setValueInparentComponent={setTermsValueFromModal}
                            />
                          </div>
                        </div>
                      ))}
                      {!disabled?

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => push('')}
                        className="btn btn-primary addRow"
                      >
                       <AddIcon /> Add Row
                              </Button>
                              :null}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
