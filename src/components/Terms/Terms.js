import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as insuranceService from '../../Services/insuranceService';
import { result, values } from 'lodash';
import { Formik, Field, Form, FieldArray } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import CoverModal from '../util/CoverModal';
import './Terms.css';

export default function Terms({data,handleNext}) {
  const [loading, setLoading] = useState(false);
  const [termsValue, setTermsValue] = useState([]);

  const term = data.terms;

  const terms = {
    termsInclusion: term.Inclusion,
    termsExclusion: term.Exclusion,
    termsWarranty: term.Warranty,
    termsSubjectivity: term.Subjectivity,
  };

  const setTermsValueFromModal = data => {
    setTermsValue(data);
  };

  return (
    <Formik
      initialValues={terms}
      enableReinitialize
      onSubmit={values => {
        setLoading(true);
        console.log('values', values);
        const payload = [
          {
            type: 'Inclusion',
            value: values.termsInclusion,
          },
          {
            type: 'Exclusion',
            value: values.termsExclusion,
          },
          {
            type: 'Warranty',
            value: values.termsWarranty,
          },
          {
            type: 'Subjectivity',
            value: values.termsSubjectivity,
          },
        ];
        const obj = {
          termsDoc: payload,
        };
        insuranceService
          .putTermDocs(obj, data.data.id)
          .then(data => {
            console.log(data);
            setTimeout(() => {
              setLoading(false);
              toast.warn(
                <div>
                  <FontAwesomeIcon icon={faExclamationCircle} className="toastIcon" />
                  <h6
                    style={{
                      fontSize: '19px',
                      marginLeft: '23px',
                      marginTop: '1px',
                      width: '224px',
                    }}
                  >
                    Saved
                  </h6>
                </div>,
                {
                  position: toast.POSITION.BOTTOM_CENTER,
                  closeButton: true,
                  hideProgressBar: true,
                },
              );
            }, 2000);
          })
          .catch(error => {
            console.log(error);
          });
      }}
      render={({ values }) => (
        <Form>
          <div className="row">
            <Table>
              <TableHead style={{ color: 'blue', backgroundColor: '#efefef' }}>
                <tr>
                  <th
                    scope="col"
                    colspan="5"
                    className="coverPol"
                    style={{ width: '200px', textAlign: 'left' }}
                  >
                    Terms and Conditions
                  </th>
                </tr>
              </TableHead>
              <TableBody>
                <TableRow style={{ backgroundColor: 'whitesmoke' }}>
                  <TableCell className="coverData1">Inclusion</TableCell>
                  <FieldArray name="termsInclusion">
                    {fieldArrayProps => {
                      const { push, form } = fieldArrayProps;
                      const { values } = form;
                      const { termsInclusion } = values;
                      const updateValue = (idx, value) => {
                        termsInclusion[idx] = value;
                      };
                      return (
                        <div>
                          {termsInclusion.map((data, index) => (
                            <Table>
                              <TableRow>
                                <TableCell>
                                  <Field
                                    name={`termsInclusion[${index}]`}
                                    defaultValue={data}
                                    className="form-control"
                                    value={data}
                                  />
                                  <div className="termsModal">
                                    <CoverModal
                                      name="Inclusion"
                                      attrValue={data}
                                      fieldIndex={index}
                                      handleReplace={updateValue}
                                      setValueInparentComponent={setTermsValueFromModal}
                                    />
                                  </div>
                                </TableCell>
                              </TableRow>
                            </Table>
                          ))}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => push('')}
                            style={{ height: '40px', width: '112px' }}
                          >
                            Add Row
                          </Button>
                        </div>
                      );
                    }}
                  </FieldArray>
                </TableRow>

                <TableRow style={{ backgroundColor: 'whitesmoke' }}>
                  <TableCell className="coverData1">Exclusion</TableCell>
                  <FieldArray name="termsExclusion">
                    {fieldArrayProps => {
                      const { push, form } = fieldArrayProps;
                      const { values } = form;
                      const { termsExclusion } = values;
                      const updateValue = (idx, value) => {
                        termsExclusion[idx] = value;
                      };
                      return (
                        <div>
                          {termsExclusion.map((data, index) => (
                            <Table>
                              <TableRow>
                                <TableCell>
                                  <Field
                                    name={`termsExclusion[${index}]`}
                                    defaultValue={data}
                                    className="form-control"
                                  />
                                  <div className="termsModal">
                                    <CoverModal
                                      name="Exclusion"
                                      attrValue={data}
                                      fieldIndex={index}
                                      handleReplace={updateValue}
                                      setValueInparentComponent={setTermsValueFromModal}
                                    />
                                  </div>
                                </TableCell>
                              </TableRow>
                            </Table>
                          ))}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => push('')}
                            style={{ height: '40px', width: '112px' }}
                          >
                            Add Row
                          </Button>
                        </div>
                      );
                    }}
                  </FieldArray>
                </TableRow>

                <TableRow style={{ backgroundColor: 'whitesmoke' }}>
                  <TableCell className="coverData1">Warranty</TableCell>
                  <FieldArray name="termsWarranty">
                    {fieldArrayProps => {
                      const { push, form } = fieldArrayProps;
                      const { values } = form;
                      const { termsWarranty } = values;
                      const updateValue = (idx, value) => {
                        termsWarranty[idx] = value;
                      };
                      return (
                        <div>
                          {termsWarranty.map((data, index) => (
                            <Table>
                              <TableRow>
                                <TableCell>
                                  <Field
                                    name={`termsWarranty[${index}]`}
                                    defaultValue={data}
                                    className="form-control"
                                    value={data}
                                  />
                                  <div className="termsModal">
                                    <CoverModal
                                      name="Warranty"
                                      attrValue={data}
                                      fieldIndex={index}
                                      handleReplace={updateValue}
                                      setValueInparentComponent={setTermsValueFromModal}
                                    />
                                  </div>
                                </TableCell>
                              </TableRow>
                            </Table>
                          ))}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => push('')}
                            style={{ height: '40px', width: '112px' }}
                          >
                            Add Row
                          </Button>
                        </div>
                      );
                    }}
                  </FieldArray>
                </TableRow>

                <TableRow style={{ backgroundColor: 'whitesmoke' }}>
                  <TableCell className="coverData1">Subjectivity</TableCell>
                  <FieldArray name="termsSubjectivity">
                    {fieldArrayProps => {
                      const { push, form } = fieldArrayProps;
                      const { values } = form;
                      const { termsSubjectivity } = values;
                      const updateValue = (idx, value) => {
                        termsSubjectivity[idx] = value;
                      };
                      return (
                        <div>
                          {termsSubjectivity.map((data, index) => (
                            <Table>
                              <TableRow>
                                <TableCell>
                                  <Field
                                    name={`termsSubjectivity[${index}]`}
                                    defaultValue={data}
                                    className="form-control"
                                    value={data}
                                  />
                                  <div className="termsModal">
                                    <CoverModal
                                      name="Subjectivity"
                                      attrValue={data}
                                      fieldIndex={index}
                                      handleReplace={updateValue}
                                      setValueInparentComponent={setTermsValueFromModal}
                                    />
                                  </div>
                                </TableCell>
                              </TableRow>
                            </Table>
                          ))}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => push('')}
                            style={{ height: '40px', width: '112px' }}
                          >
                            Add Row
                          </Button>
                        </div>
                      );
                    }}
                  </FieldArray>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <span>
            <button
              class="btn btn-outline-primary"
              type="submit"
              style={{
                width: '130px',
                height: '40px',
                marginLeft: '0px',
                color: 'white',
                backgroundColor: '#0000ff',
                borderRadius: '32px',
                float: 'right',
                marginBottom: '10px',
                marginTop: '20px',
              }}
            >
              Save
            </button>
            <Button variant="contained" color="primary" className="nextEndt" onClick={handleNext?handleNext:''}>
        Next
     </Button>
            <Fade
              in={loading}
              style={{
                transitionDelay: !loading ? '2000ms' : '0ms',
              }}
              unmountOnExit
            >
              <CircularProgress />
            </Fade>
          </span>
        </Form>
      )}
    />
  );
}
