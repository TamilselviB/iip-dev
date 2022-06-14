import React, { useState, useCallback, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { push } from 'connected-react-router';
import PropTypes, { number } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import 'react-toastify/dist/ReactToastify.css';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { numberFormatUSFormat } from '../utils/utils';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import * as insuranceService from '../Services/insuranceService';
import * as getQuoteService from '../Services/getQuoteService';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { Typography } from '@material-ui/core';

const Summary = ({ setValues, summaryData, mode, history ,type}) => {
  const [loading, setLoading] = React.useState(false);
  const [Enddate, setEnddate] = useState();
  const [startDate, setStartDate] = useState();
  const id = summaryData.id
  console.log(id);
  const dispatch = useDispatch();
  toast.configure();
  let combArray = [];
  console.log('props', summaryData);
  const date = new Date();
  let today = moment(date, 'yyyy-mm-dd').format();
  let enddate = moment(date, 'yyyy-mm-dd').add(1, 'year').format();
  today = today.split('T');
  today = today[0];
  enddate = enddate.split('T');
  enddate = enddate[0];
  console.log(today, enddate);
  useEffect(() => {
    if(summaryData.startDate&& summaryData.endDate){
      summaryData.startDate=summaryData.startDate.slice(0,10)
      summaryData.endDate=summaryData.endDate.slice(0,10)
    }else{
      let today = moment(date, 'yyyy-mm-dd').format();
      let enddate = moment(date, 'yyyy-mm-dd').add(1, 'year').format();
      today = today.split('T');
      today = today[0];
      enddate = enddate.split('T');
      enddate = enddate[0];
      summaryData.startDate=today
      summaryData.endDate=enddate
    }

  }, [summaryData]);
  const onDateChange = value => {
    if (value) {
      console.log('value', value);
      setStartDate(value);
      enddate = moment(value).add(1, 'year').format();
      enddate = enddate.split('T');
      enddate = enddate[0];
      setEnddate(enddate);
    }
  };
  // if(type=="endorsement"){
  // summaryData.riskDetails.map((array) => {if(array.isDeleted||array.isAdded)combArray=combArray.concat(array.covers)})
  // let modifiedLocation=[]
  // summaryData.riskDetails.map(array => {if(array.isModified)modifiedLocation=modifiedLocation.concat(array.covers)})
  // console.log(modifiedLocation)
  // let modifiedCovers =[]
  // modifiedLocation.map(array => {if(array.isDeleted||array.isAdded ||array.isModified)modifiedCovers=modifiedCovers.concat(array)})
  // combArray=combArray.concat(modifiedCovers)
  // summaryData.policyLevelCover.map((array) => {if(array.isDeleted||array.isAdded||array.isModified)combArray=combArray.concat(array)})
  // }else{
    summaryData.riskDetails.map(array => {
      console.log('array', array);
      combArray = combArray.concat(array.covers);
    }, {});
    summaryData.policyLevelCover.map((array) => {combArray=combArray.concat(array)})
  // }
  
  console.log('combArray', combArray);

  var dict = Object.create(null);
  var gross=0

  var result = combArray.reduce(function (arr, o) {
    var current = dict[o.coverName];
    gross=parseInt(o.coverPremium)+gross
  if(!o.isPolicyLevel){
    if (!current) {
      current = Object.assign({}, o);
      current.isDefault = current.isDefault || o.isDefault ? true : false;
      if(!current.isPolicyLevel)
      arr.push(current);

      dict[o.coverName] = current;
    } else if (!current.isPolicyLevel) {
      console.log("--------------",current,o)
      console.log("--------------",parseInt(current.sumAssured) ,parseInt(o.sumAssured),(parseInt(current.sumAssured) || 0 )+ (parseInt(o.sumAssured) || 0))
      current.sumAssured = (parseInt(current.sumAssured) || 0) + (parseInt(o.sumAssured) || 0);
      current.coverPremium = (parseInt(current.coverPremium) || 0 )+( parseInt(o.coverPremium) || 0);
      current.isDefault = current.isDefault || o.isDefault ? true : false;
      if(o.isDeleted)
      current.isDeleted=o.isDeleted
      dict[o.coverName] = current;
      console.log("--------------",current)
    }
}
    return arr;
  }, []);
  if(summaryData.premiumAmount==null){
    summaryData.premiumAmount={}
    summaryData.premiumAmount.netPremium=type=='endorsement'?gross:summaryData.grossPremium
    summaryData.premiumAmount.discount=''
    summaryData.premiumAmount.fees=''
    summaryData.premiumAmount.gstVatTax=''
  }
if(type=='endorsement'){
  summaryData.grossPremium=gross
  summaryData.premiumAmount.netPremium=summaryData.premiumAmount.netPremium?summaryData.premiumAmount.netPremium:gross
}
// else
// summaryData.premiumAmount.netPremium=summaryData.grossPremium

// if(type=='endorsement')
//   summaryData.policyLevelCover.map((array) => {if(array.isDeleted||array.isAdded||array.isModified)result=result.concat(array)})
// else
  result=[...result,...summaryData.policyLevelCover]

  console.log(result)
  const sendFormData = useCallback(() => {
    setValues();
  }, [setValues]);

  function handleAccept() {
      if(type=='quote'){
        const obj = {
          isAccept: true,
        };
        getQuoteService
          .acceptQuote(id, obj)
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
                    Quotation Accepted
                  </h6>
                </div>,
                {
                  position: toast.POSITION.BOTTOM_CENTER,
                  closeButton: true,
                  hideProgressBar: true,
                },
              );
              dispatch(push('/Customer'))
            }, 2000)
          })
          .catch(err => console.log(err));
    }else{
      const obj = {
        "status" : "customerAcceptEndorsement"
      };
      getQuoteService
        .acceptEndorsementQuote(id, obj)
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
                  Quotation Accepted
                </h6>
              </div>,
              {
                position: toast.POSITION.BOTTOM_CENTER,
                closeButton: true,
                hideProgressBar: true,
              },
            );
            dispatch(push('/Customer'))
          }, 2000)
        })
        .catch(err => console.log(err));
    }

  }

  function policyConvert(value) {
    console.log(value)
    if(type=='quote'){
      insuranceService
      .convertToPolicy(value, id)
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
                Converted to Policy
              </h6>
            </div>,
            {
              position: toast.POSITION.BOTTOM_CENTER,
              closeButton: true,
              hideProgressBar: true,
            },
          );
          dispatch(push('/Insurance'))
        }, 2000)
      })
      .catch(error => {
        console.log(error);
      });
    }
    else{
      insuranceService
      .updatePolicy( id)
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
                Converted to Policy
              </h6>
            </div>,
            {
              position: toast.POSITION.BOTTOM_CENTER,
              closeButton: true,
              hideProgressBar: true,
            },
          );
          dispatch(push('/Insurance'))
        }, 2000)
      })
      .catch(error => {
        console.log(error);
      });
    }

  }

  const validateQuotationNumber = value => {
    console.log(value);
    let error;
    if (!value) {
      error="Quotation No is Required"
    }
    return error;
  }
  const validatePolicyNumber = value => {
    console.log(value);
    let error;
    if (!value) {
      error = "Policy No is Required"
    }
    return error;
  }

  return (
    <Formik
      initialValues={summaryData}
      enableReinitialize
      onSubmit={values => {
        console.log('values', values);
        setLoading(true);
        console.log('values 123', values);

        const obj = {
          // quotationNumber: values.quotationNumber,
          startDate: values.startDate,
          endDate: values.endDate,
          premiumAmount: values.premiumAmount,
        };
        console.log('obj', obj,type);
        if(type=='endorsement'){
          obj.endorsementQuotationNumber= values.endorsementQuotationNumber
          obj.status="companyAcceptEndorsement"
          console.log('obj', obj);

          insuranceService.endorsementUpdatePremium(obj, values.id).then(res => {
            console.log(res);
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
              sendFormData();
                dispatch(push('/Insurance'))
            }, 2000);
          });
        }
        else{
          obj.quotationNumber=values.quotationNumber
          insuranceService.putTermDocs(obj, values.id).then(res => {
          console.log(res);
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
            sendFormData();
            dispatch(push('/Insurance'))
          }, 2000);
        });
      }
      }}
      render={({ values, errors, touched,setFieldValue }) => (
        <Form autoComplete="off" style={{ backgroundColor: 'whiteSmoke' }}>
          <div className="row">
            <table>
              <thead style={{ color: 'blue', backgroundColor: '#efefef' }}>
                <tr>
                  <th
                    scope="col"
                    colspan="9"
                    className="td-head headcol "
                    style={{ width: '200px', textAlign: 'left' }}
                  >
                    Summary
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <div>
                    {summaryData.isAccept === true ? (
                      <div>
                        <th
                          className="td-body1"
                          colSpan="2"
                          style={{
                            textAlign: 'left',
                            fontWeight: 'bold',
                            backgroundColor: ' #f8f8f8',
                          }}
                        >
                          Policy Number{' '}
                        </th>
                        <th className="td-body1" colspan="1">
                          <Field
                            id="outlined-secondary"
                            as={TextField}
                            name="policyNumber"
                            variant="outlined"
                            color="secondary"
                            validate={validatePolicyNumber}
                          />
                          {errors.policyNumber && touched.policyNumber && <div style={{
                            color: 'red'
                          }}>{errors.policyNumber}</div>}
                        </th>{' '}
                      </div>
                    ) : null}
                  </div>

                  <th
                    className="td-body1"
                    colspan="2"
                    style={{ textAlign: 'left', fontWeight: 'bold', backgroundColor: ' #f8f8f8' }}
                  >{type=='endorsement'?
                    'Endorsement Quotation Number':'Quotation Number'} {' '}
                  </th>
                  <th className="td-body1" colspan="1">
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name={type=='endorsement'?'endorsementQuotationNumber':"quotationNumber"}
                      variant="outlined"
                      color="secondary"
                      validate={validateQuotationNumber}

                    />
                  {errors.endorsementQuotationNumber && touched.endorsementQuotationNumber&& <div style={{
                            color: 'red'
                          }}>{errors.endorsementQuotationNumber}</div>}
                    {errors.quotationNumber && touched.quotationNumber && <div style={{
                      color: 'red'
                    }}>{errors.quotationNumber}</div>}
                  </th>
                  <th className="td-body1" colspan="1">
                    Start Date
                  </th>
                  <th className="td-body1" colspan="1">
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      // defaultValue={today}
                      type="date"
                      name="startDate"
                      variant="outlined"
                      color="secondary"
                      // value={startDate}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e)=>{console.log(e.target.value);
                        let eDate = moment(e.target.value).add(1, 'year').format();
                        eDate = eDate.split('T');
                        eDate = eDate[0]
                        setFieldValue('startDate',e.target.value)

                        setFieldValue('endDate',eDate)

                        // setStartDate(e.target.value)
                      }
                      }
                      // validate={onDateChange.bind(today)
                      // }
                    />
                  </th>
                  <th className="td-body1" colspan="1">
                    End Date
                  </th>
                  <th className="td-body1" colspan="1">
                    <Field
                      id="outlined-secondary"
                      type="date"
                      as={TextField}
                      // defaultValue={enddate}
                      name="endDate"
                      variant="outlined"
                      color="secondary"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      // value={Enddate}
                    />
                  </th>
                </tr>
                <tr>
                  <th
                    className="td-body2"
                    colspan="3"
                    style={{ textAlign: 'left', fontWeight: 'bold' }}
                  >
                    Premium Summary{' '}
                  </th>
                  <th
                    className="td-body2"
                    colspan="2"
                    style={{ textAlign: 'left', fontWeight: 'bold' }}
                  >
                    Coverage{' '}
                  </th>
                  <th
                    className="td-body2"
                    colspan="2"
                    style={{ textAlign: 'left', fontWeight: 'bold' }}
                  >
                    Sum Insured{' '}
                  </th>
                  <th
                    className="td-body2"
                    colspan="2"
                    style={{ textAlign: 'left', fontWeight: 'bold' }}
                  >
                    Premium{' '}
                  </th>
                </tr>
                {result.map((array, index) => {
                  return array.isDefault || array.isDeleted? (
                    <tr>
                      <th className="td-body1" colspan="3" />
                      <td className="td-body1" colspan="2">
                        <input
                          disabled={true}
                          value={array.coverName}
                          type="text"
                          id="fname"
                          name="fname"
                        />
                      </td>
                      <td className="td-body1" colspan="2">
                        <input
                          disabled={true}
                          value={array.sumAssured ? numberFormatUSFormat(array.sumAssured) : null}
                          type="text"
                          id="fname"
                          name="fname"
                          style={{ textAlign: 'right' }}
                        />
                      </td>
                      <td className="td-body1" colspan="2">
                        <input
                          disabled={true}
                          value={
                            array.coverPremium ? numberFormatUSFormat(array.coverPremium) : null
                          }
                          type="text"
                          id="fname"
                          name="fname"
                          style={{ textAlign: 'right' }}
                        />
                      </td>
                    </tr>
                  ) : null;
                })}

                <tr>
                  <td className="td-body1" colspan="6" />
                  <td className="td-body1" colspan="1">
                    Gross Premium
                  </td>
                  <td className="td-body1" colspan="1">
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name={type=='endosement'?'grossPremium':"grossPremium"}
                      variant="outlined"
                      color="secondary"
                      // value={type='endosement'?gross:''}
                      // value='45'
                    >
                      {({ field, form }) => (
                        <input
                          type="text"
                          {...field}
                          disabled={true}
                          style={{ textAlign: 'right' }}
                        />
                      )}
                    </Field>
                  </td>
                </tr>
                <tr>
                  <td className="td-body1" colspan="6" />
                  <td className="td-body1" colspan="1">
                    Discount
                  </td>
                  <td className="td-body1" colspan="1">
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="premiumAmount.discount"
                      variant="outlined"
                      color="secondary"
                    >
                      {({ field, form }) => (
                        <input type="text" {...field} onBlur={(e)=>{setFieldValue('premiumAmount.discount',parseInt(e.target.value)); if(e.target.value&&!isNaN(parseInt(e.target.value)))setFieldValue('premiumAmount.netPremium',parseInt(values.grossPremium)-parseInt(e.target.value)+parseInt(values.premiumAmount.fees?values.premiumAmount.fees:0)+parseInt(values.premiumAmount.gstVatTax?values.premiumAmount.gstVatTax:0))}} style={{ textAlign: 'right' }} />
                      )}
                    </Field>
                  </td>
                </tr>
                <tr>
                  <td className="td-body1" colspan="6" />
                  <td className="td-body1" colspan="1">
                    Loading/Charges/Fees
                  </td>
                  <td className="td-body1" colspan="1">
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="premiumAmount.fees"
                      variant="outlined"
                      color="secondary"
                    >
                      {({ field, form }) => (
                        <input type="text" {...field}  onBlur={(e)=>{setFieldValue('premiumAmount.fees',parseInt(e.target.value)); if(e.target.value&&!isNaN(parseInt(e.target.value)))setFieldValue('premiumAmount.netPremium',parseInt(values.grossPremium)+parseInt(e.target.value)+parseInt(values.premiumAmount.gstVatTax?values.premiumAmount.gstVatTax:0)-parseInt(values.premiumAmount.discount?values.premiumAmount.discount:0))}} style={{ textAlign: 'right' }} />
                      )}
                    </Field>
                  </td>
                </tr>
                <tr>
                  <td className="td-body1" colspan="6" />
                  <td className="td-body1" colspan="1">
                    GST/VAT/Tax
                  </td>
                  <td className="td-body1" colspan="1">
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="premiumAmount.gstVatTax"
                      variant="outlined"
                      color="secondary"
                    >
                      {({ field, form }) => (
                        <input type="text" {...field} onBlur={(e)=>{ setFieldValue('premiumAmount.gstVatTax',parseInt(e.target.value));if(e.target.value&&!isNaN(parseInt(e.target.value)))setFieldValue('premiumAmount.netPremium',parseInt(values.grossPremium)+parseInt(e.target.value)+parseInt(values.premiumAmount.fees?values.premiumAmount.fees:0)-parseInt(values.premiumAmount.discount?values.premiumAmount.discount:0))}} style={{ textAlign: 'right' }} />
                      )}
                    </Field>
                  </td>
                </tr>
                <tr>
                  <td className="td-body1" colspan="6" />
                  <td className="td-body1" colspan="1">
                    Net Premium
                  </td>
                  <td className="td-body1" colspan="1">
                    <Field
                      id="outlined-secondary"
                      as={TextField}
                      name="premiumAmount.netPremium"
                      variant="outlined"
                      color="secondary"
                    >
                      {({ field, form }) => (
                        <input type="text" {...field}  disabled={true} style={{ textAlign: 'right' }} />
                      )}
                    </Field>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {type=="endorsement"?
          <div className="summaryEndt">
              { values.premiumAmount.netPremium-values.policy.premiumAmount.netPremium>0?(<Typography>{'Additional Premium for this Endorsement :'}{values.premiumAmount.netPremium-values.policy.premiumAmount.netPremium}</Typography>):values.premiumAmount.netPremium-values.policy.premiumAmount.netPremium<0?(<Typography>{'Refund Premium for this Endorsement :'}{Math.abs(values.premiumAmount.netPremium-values.policy.premiumAmount.netPremium)}</Typography>):'No changes for this Endorsement'}
          </div>
      :''}
          <div className="col-12">
          {mode === 'Insurance' ? (
              <div>
                {summaryData.isAccept === true || summaryData.status?.name=='customerAcceptEndorsement'? (
                  <div>
                  <button
                    type="submit"
                    className="btn btn-outline-primary"
                    style={{
                      width: '164px',
                      height: '40px',
                      marginLeft: '6px',
                      color: 'white',
                      backgroundColor: '#0000ff',
                      borderRadius: '32px',
                      float: 'right',
                      marginBottom: '10px',
                      marginTop: '18px',
                    }}
                    onClick={() => policyConvert(values.policyNumber)}
                  >
                   {summaryData.isAccept === true? "Convert To Policy":"Submit"}
                  </button>
                  <Fade
                  in={loading}
                  style={{
                    transitionDelay: !loading ? '2000ms' : '0ms',
                  }}
                  unmountOnExit
                >
                  <CircularProgress />
                </Fade>
                </div>
                ) : (
                    <div>

                    <Button
                      className="btn btn-outline-primary"
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
                        marginTop: '18px',
                      }}
                    >
                      Submit
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
                  </div>
                )}
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  style={{
                    width: '164px',
                    height: '40px',
                    marginLeft: '6px',
                    color: 'white',
                    backgroundColor: '#0000ff',
                    borderRadius: '32px',
                    float: 'right',
                    marginBottom: '10px',
                    marginTop: '18px',
                  }}
                  onClick={handleAccept}
                >
                  Accept Quotation
                </button>
                <Fade
                      in={loading}
                      style={{
                        transitionDelay: !loading ? '2000ms' : '0ms',
                      }}
                      unmountOnExit
                    >
                      <CircularProgress />
                    </Fade>
                <Link
                  to={{
                    pathname: '/Customer',
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      width: '130px',
                      height: '40px',
                      marginLeft: '0px',
                      color: 'white',
                      backgroundColor: '#0000ff',
                      borderRadius: '32px',
                      float: 'right',
                      marginBottom: '10px',
                      marginTop: '18px',
                    }}
                  >
                    Reject
                  </button>{' '}
                </Link>
              </div>
            )}
          </div>
        </Form>
      )}
    />
  );
};

Summary.propTypes = {
  setValues: PropTypes.func.isRequired,
};

export default Summary;
