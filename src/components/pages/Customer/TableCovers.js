import React, { useCallback } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import TextField from '@material-ui/core/TextField';
import ReactTooltip from 'react-tooltip';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faTimes, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { numberFormatUSFormat } from '../../../utils/utils';
import IIPNumberFormat from '../../IIPNumberFormat/IIPNumberFormat';
import * as insuranceService from '../../../Services/insuranceService';
import Checkbox from '@material-ui/core/Checkbox';
import CheckboxCross from '../../../pages/EndorsementPage/checkbox_cross.svg';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import Icon from '@material-ui/core/Icon';

const TableCovers = ({ type, description, setValues, props }) => {
  console.log('cover props', props, type, description);
  toast.configure();
  let finalArray = [];
  const [value, setValue] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  let arrayOne = props ? props.product.covers : [];
  props.riskDetails.map(array => {
    let arrayTwo = array.covers;
    const objOne = arrayOne.reduce((aggObj, item) => {
      console.log(aggObj[item.coverName], item)
      aggObj[item.coverName] = item;
      return aggObj;
    }, {});
    console.log(arrayOne, objOne)
    const mergedObjOutput = arrayTwo.reduce((aggObj, item) => {
      aggObj[item.coverName] = item;
      return aggObj;
    }, objOne);
    console.log(mergedObjOutput)

    let mergedFinalOutput = [...arrayTwo];
    mergedFinalOutput = Object.values(mergedObjOutput);

    console.log(mergedFinalOutput);
    finalArray.push(mergedFinalOutput);
    array.covers = mergedFinalOutput;
  });
  console.log(props.riskDetails);
  const handleChange = event => {
    setValue(event.target.value);
  };
  const validate = (values /* only available when using withFormik */) => {
    let errors = {};
    let riskDetailsIndex = values.riskDetails.findIndex(x => x.isModified || x.isAdded || x.isDeleted)
    let policyCover = values.policyLevelCover.filter(x =>  x.isDeleted)
    let modifiedObj = values.riskDetails[riskDetailsIndex]
    let obj = props.riskDetails[riskDetailsIndex]
    // console.log(obj)
    if (modifiedObj?.isDeleted) {
      modifiedObj.covers.map((item, index) => {
        if (!(item.isDefault && !item.isPolicyLevel ? (item.coverPremium <= 0 && item.coverPremium >= (obj.covers[index].coverPremium * -1)) : true)) {
          errors[`riskDetails.${riskDetailsIndex}.covers.${index}.coverPremium`] = "invalid Premium "
        }
      })
    }
    else if (modifiedObj?.isModified) {
      modifiedObj.covers.map((item, index) => {
        if (!(item.isDeleted && !item.isPolicyLevel ? (item.coverPremium <= 0 && item.coverPremium >= (obj.covers[index].coverPremium * -1)) : true)) {
          errors[`riskDetails.${riskDetailsIndex}.covers.${index}.coverPremium`] = "invalid Premium"
        }
      })
    }
    // if(policyCover.length>0){
    //   values.policyLevelCover.map((item, index) => {
    //     if (!(item.isDeleted ? (item.coverPremium <= 0 && item.coverPremium >= (props.policyLevelCover[index].coverPremium * -1)) : true)) {
    //       console.log(item.coverPremium,props.policyLevelCover[index].coverPremium * -1,'------------------------')
    //       errors[`policyLevelCover.${index}.coverPremium`] = "invalid Premium value"
    //     }
    //   })
    // }
    // const errors = {};

    // if (!values.email) {
    //   errors.email = 'Required';
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Invalid email address';
    // }

    // //...
    console.log(errors)
    return errors;
  };

  // function validateUsername(value,props) {
  //   console.log(value,props)
  //   // let error;
  //   // if (value === 'admin') {
  //   //   error = 'Nice try!';
  //   // }
  //   // return error;
  // }


  const sendFormData = useCallback(() => {
    setValues();
  }, [setValues]);
  return (
    <Formik
      initialValues={props}
      enableReinitialize
      validate={type == 'endorsement' ? validate : ''}
      onSubmit={values => {
        setLoading(true);
        console.log('values 123', values, type);

        const obj = {
          riskDetails: values.riskDetails,
          policyLevelCover: type == 'quote' ? values.policyLevelCover : values.policyLevelCover,
        };
        if (type == 'endorsement') {
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
            }, 2000);
          });
        }
        else {
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
            }, 2000);
          });
        }
      }}
      render={({ values, errors, setFieldValue }) => (
        <Form autoComplete="off" style={{ backgroundColor: 'whiteSmoke' }}>
          <table className="cover">
            <thead>
              <tr>
                <th style={{ minWidth: '225px' }} class="coverStyle">
                  Subsidiary Company,Property
                </th>
                {/* style={{ backgroundColor:cell.row.original.isDeleted?"pink":""}} */}
                {values?.riskDetails?.map(array => {
                  return (
                    <th role="address-iteration" class="coverStyle" >
                      {array?.subsidiaryCompany}, {array?.propertyName}&nbsp;&nbsp;{array?.isDeleted ? <FontAwesomeIcon title={"Deleted Location"} icon={faTimes} style={{ color: "red" }} /> : array?.isAdded ? <FontAwesomeIcon title={"Added Location"} icon={faPlus} style={{ color: "green" }} /> : array?.isModified ? <FontAwesomeIcon title={"Edited Location"} icon={faEdit} style={{ color: "#ffb805" }} /> : ''}
                    </th>
                  );
                })}
              </tr>
              <tr>
                <th style={{ minWidth: '185px', backgroundColor: "#efefef" }} class="coverStyle">
                  Expected Covers
                </th>
                {values?.riskDetails?.map((array, index) => {
                  return (
                    <>
                      <th
                        data-tip
                        data-for={'fire' + index}
                        role="address-iteration"
                        class="coverStyle"
                      >
                        View Expected Covers
                        <ReactTooltip
                          place="bottom"
                          id={'fire' + index}
                          data-type="primary"
                          backgroundColor="#94befb"
                          effect="solid"
                        >
                          <React.Fragment
                            style={{
                              fontSize: '18px',
                              textAlign: 'left',
                            }}
                          >
                            {array?.expectedCoverage
                              ? array?.expectedCoverage
                              : 'No Expected Covers'}
                          </React.Fragment>
                        </ReactTooltip>
                      </th>
                    </>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0px' }}>
                  <table className="cover" style={{ margin: '0px', width: '100%' }}>
                    <thead>
                      <tr>
                        <th class="CoverPol">Cover Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {values?.product?.covers?.map(array => {
                        return (
                          <>
                            {' '}
                            {!array?.isPolicyLevel ? (
                              <tr role="covername-iteration">
                                <td class="coverData">{array?.coverName}</td>
                              </tr>
                            ) : null}{' '}
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </td>

                {values.riskDetails?.map((array, index) => {
                  return (
                    <td style={{ padding: '0px' }} role="location-iteration">
                      <table className="cover" style={{ margin: '0px', width: '100%' }}>
                        <thead>
                          <tr>
                            <th class="CoverPol1">Applicable</th>
                            <th class="CoverPol1">Sum Insured</th>
                            <th class="CoverPol1">Expected Rate</th>
                            <th class="CoverPol1">Premium</th>
                          </tr>
                        </thead>
                        <tbody>
                          <FieldArray
                            name={`riskDetails.${index}.covers`}
                            render={arrayHelpers => (
                              <>
                                {array.covers && array.covers.length > 0
                                  ? //  {
                                  values.riskDetails[index].covers.map((data, idx) => {
                                    return !data.isPolicyLevel ? (
                                      <tr role="cover-iteration">
                                        <td>
                                          <Field
                                            type="checkbox"
                                            component={Checkbox}
                                            icon={data.isDeleted ?
                                              <Icon>
                                                <img
                                                  src={CheckboxCross}
                                                  alt="aa"
                                                  height="100%"
                                                  className="mx-auto d-block mb-3"
                                                /></Icon> : <CheckBoxOutlineBlankIcon />
                                            }
                                            checkedIcon={<CheckBoxIcon />}
                                            checked={data.isDefault || data.isMandatory}
                                            disabled={data.isMandatory || (type == 'endorsement' && !array.isAdded)}
                                            onClick={(e) => {
                                              // console.log(values.riskDetails[index].covers[idx].isDefault,e.target.c)
                                              if (values.riskDetails[index].covers[idx].isDefault)
                                                setFieldValue(`riskDetails.${index}.covers.${idx}.isDefault`, false)
                                              else
                                                setFieldValue(`riskDetails.${index}.covers.${idx}.isDefault`, true)
                                            }}
                                            name={`riskDetails.${index}.covers.${idx}.isDefault`}
                                          // onClick={event => {
                                          //   if (!event.target.checked) {
                                          //     data.isDefault = false;
                                          //   }
                                          // }}
                                          />
                                        </td>
                                        <td>
                                          <Field
                                            id="outlined-secondary"
                                            as={TextField}
                                            name={`riskDetails.${index}.covers.${idx}.sumAssured`}
                                            // name={type == 'endorsement' ? (array.isAdded || array.isDeleted || data.isAdded || data.isDeleted || data.isModified)?`riskDetails.${index}.covers.${idx}.sumAssured`:0:`riskDetails.${index}.covers.${idx}.sumAssured`}
                                            // disabled={(type=='endorsement'&&!(array.isAdded||array.isDeleted||array.isModified))}
                                            variant="outlined"
                                          >
                                            {({ field, form }) => (
                                              <input
                                                type="text"
                                                class="form-control"
                                                {...field}
                                                disabled={type == 'endorsement' ? !(array.isAdded || array.isDeleted || data.isAdded || data.isDeleted || data.isModified) : !data.isDefault}
                                                style={{ textAlign: 'right' }}
                                              />
                                            )}
                                          </Field>
                                        </td>
                                        <td>
                                          <Field
                                            id="outlined-secondary"
                                            as={TextField}
                                            name={`riskDetails.${index}.covers.${idx}.rate`}
                                            // name={type == 'endorsement' ? (array.isAdded || array.isDeleted || data.isAdded || data.isDeleted || data.isModified)?`riskDetails.${index}.covers.${idx}.rate`:0:`riskDetails.${index}.covers.${idx}.rate`}
                                            variant="outlined"
                                            // value={(type == 'endorsement' ? !(array.isAdded || array.isDeleted || data.isAdded || data.isDeleted || data.isModified):false)?0:''}
                                          // disabled={(type=='endorsement'&&!(array.isAdded||array.isDeleted||array.isModified))}

                                          >
                                            {({ field, form }) => (
                                              <input
                                                type="text"
                                                class="form-control"
                                                {...field}
                                                disabled={type == 'endorsement' ? !(array.isAdded || array.isDeleted || data.isAdded || data.isDeleted || data.isModified) : !data.isDefault}
                                                style={{ textAlign: 'right' }}
                                              />
                                            )}
                                          </Field>
                                        </td>
                                        <td>
                                          <Field
                                            id="outlined-secondary"
                                            as={TextField}
                                            name={`riskDetails.${index}.covers.${idx}.coverPremium`}
                                            // name={type == 'endorsement' ? (array.isAdded || array.isDeleted || data.isAdded || data.isDeleted || data.isModified)?`riskDetails.${index}.covers.${idx}.coverPremium`:0:`riskDetails.${index}.covers.${idx}.coverPremium`}

                                            variant="outlined"
                                          // disabled={(type=='endorsement'&&!(array.isAdded||array.isDeleted||array.isModified))}

                                          // validate={validateUsername}
                                          >
                                            {({ field, form }) => (
                                              <input
                                                type="text"
                                                class="form-control"
                                                {...field}
                                                disabled={type == 'endorsement' ? !(array.isAdded || array.isDeleted || data.isAdded || data.isDeleted || data.isModified) : !data.isDefault}
                                                style={{ textAlign: 'right' }}
                                              />
                                            )}
                                          </Field>
                                          {errors[`riskDetails.${index}.covers.${idx}.coverPremium`] && (
                                            <span className="error" style={{
                                              color: 'red',
                                            }}>{errors[`riskDetails.${index}.covers.${idx}.coverPremium`]}</span>
                                          )}
                                        </td>
                                      </tr>
                                    ) : null;
                                  })
                                  : null}
                              </>
                            )}
                          />
                        </tbody>
                      </table>
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td style={{ padding: '0px' }}>
                  <table className="cover" style={{ margin: '0px', width: '100%' }}>
                    <thead>
                      <tr>
                        <th class="CoverPol">Policy Level Coverage</th>
                      </tr>
                    </thead>
                    <tbody>

                      {type == 'quote' ? (props?.quote?.policyLevelCover.map(array => {
                        return (
                          <>
                            {array?.isPolicyLevel ? (
                              <tr role="covername-iteration">
                                <td class="coverData">{array?.coverName}</td>
                              </tr>
                            ) : null}{' '}
                          </>
                        );
                      })) : (props?.policyLevelCover.map(array => {
                        return (
                          <>
                            {array?.isPolicyLevel ? (
                              <tr role="covername-iteration">
                                <td class="coverData">{array?.coverName}</td>
                              </tr>
                            ) : null}{' '}
                          </>
                        );
                      }))}
                    </tbody>
                  </table>
                </td>

                <td style={{ padding: '0px' }} role="location-iteration" colspan="2">
                  <table className="cover" style={{ margin: '0px', width: '100%' }}>
                    <thead>
                      <tr>
                        <th class="CoverPol1">Applicable</th>
                        <th class="CoverPol1">Sum Insured</th>
                        <th class="CoverPol1">Expected Rate</th>
                        <th class="CoverPol1">Premium</th>
                      </tr>
                    </thead>
                    <tbody>
                      <FieldArray
                        name={`policyLevelCover`}
                        render={arrayHelpers => (
                          <>
                            {values.policyLevelCover &&
                              values.policyLevelCover.length > 0
                              ? //  {
                              values.policyLevelCover.map((data, idx) => {
                                return data.isPolicyLevel ? (
                                  <tr role="cover-iteration">
                                    <td>
                                      <Field
                                        type="checkbox"
                                        component={Checkbox}
                                        icon={data.isDeleted ?
                                          <Icon>
                                            <img
                                              src={CheckboxCross}
                                              alt="aa"
                                              height="100%"
                                              className="mx-auto d-block mb-3"
                                            /></Icon> : <CheckBoxOutlineBlankIcon />
                                        }
                                        checkedIcon={<CheckBoxIcon />}
                                        checked={data.isDefault || data.isMandatory}
                                        disabled={data.isMandatory || (type == 'endorsement')}
                                        name={`policyLevelCover.${idx}.isDefault`}
                                        onClick={event => {
                                          console.log(values.policyLevelCover)
                                          if (!event.target.checked) {
                                            data.isDefault = false;
                                          }
                                        }}
                                      />
                                    </td>
                                    <td>
                                      <Field
                                        id="outlined-secondary"
                                        as={TextField}
                                        name={`policyLevelCover.${idx}.sumAssured`}
                                        // name={type == 'endorsement' ? ( data.isAdded || data.isDeleted || data.isModified)?`policyLevelCover.${idx}.sumAssured`:0:`policyLevelCover.${idx}.sumAssured`}
                                        
                                        variant="outlined"
                                      >
                                        {({ field, form }) => (
                                          <input
                                            type="text"
                                            class="form-control"
                                            {...field}
                                            disabled={type == 'endorsement' ? !(data.isAdded || data.isDeleted || data.isModified) : !data.isDefault}
                                            style={{ textAlign: 'right' }}
                                          />
                                        )}
                                      </Field>
                                    </td>
                                    <td>
                                      <Field
                                        id="outlined-secondary"
                                        as={TextField}
                                        name={`policyLevelCover.${idx}.rate`}
                                        // name={type == 'endorsement' ? ( data.isAdded || data.isDeleted || data.isModified)?`policyLevelCover.${idx}.rate`:0:`policyLevelCover.${idx}.rate`}

                                        variant="outlined"
                                      >
                                        {({ field, form }) => (
                                          <input
                                            type="text"
                                            class="form-control"
                                            {...field}
                                            disabled={type == 'endorsement' ? !(data.isAdded || data.isDeleted || data.isModified) : !data.isDefault}
                                            style={{ textAlign: 'right' }}
                                          />
                                        )}
                                      </Field>
                                    </td>
                                    <td>
                                      <Field
                                        id="outlined-secondary"
                                        as={TextField}
                                        name={`policyLevelCover.${idx}.coverPremium`}
                                        // name={type == 'endorsement' ? (data.isAdded || data.isDeleted || data.isModified)?`policyLevelCover.${idx}.coverPremium`:0:`policyLevelCover.${idx}.coverPremium`}

                                        variant="outlined"
                                      >
                                        {({ field, form }) => (
                                          <input
                                            type="text"
                                            class="form-control"
                                            {...field}
                                            disabled={type == 'endorsement' ? !(data.isAdded || data.isDeleted || data.isModified) : !data.isDefault}
                                            style={{ textAlign: 'right' }}
                                          />
                                        )}
                                      </Field>
                                      {errors[`policyLevelCover.${idx}.coverPremium`] && (
                                        <span className="error" style={{
                                          color: 'red',
                                        }} >{errors[`policyLevelCover.${idx}.coverPremium`]}</span>
                                      )}
                                    </td>
                                  </tr>
                                ) : null;
                              })
                              : values.quote.policyLevelCover && values.quote.policyLevelCover.length > 0
                                ? values.quote.policyLevelCover.map((data, idx) => {
                                  return data.isPolicyLevel ? (
                                    <tr role="cover-iteration">
                                      <td>
                                        <Field
                                          type="checkbox"
                                          checked={data.isDefault || data.isMandatory}
                                          disabled={data.isMandatory}
                                          name={`quote.policyLevelCover.${idx}.isDefault`}
                                          onClick={event => {
                                            if (!event.target.checked) {
                                              data.isDefault = false;
                                            }
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <Field
                                          id="outlined-secondary"
                                          as={TextField}
                                          name={`quote.policyLevelCover.${idx}.sumAssured`}
                                          variant="outlined"
                                        >
                                          {({ field, form }) => (
                                            <input
                                              type="text"
                                              class="form-control"
                                              {...field}
                                              disabled={type == 'endorsement' ? !(data.isAdded || data.isDeleted || data.isModified) : !data.isDefault}
                                              style={{ textAlign: 'right' }}
                                            />
                                          )}
                                        </Field>
                                      </td>
                                      <td>
                                        <Field
                                          id="outlined-secondary"
                                          as={TextField}
                                          name={`quote.policyLevelCover.${idx}.rate`}
                                          variant="outlined"
                                        >
                                          {({ field, form }) => (
                                            <input
                                              type="text"
                                              class="form-control"
                                              {...field}
                                              disabled={type == 'endorsement' ? !(data.isAdded || data.isDeleted || data.isModified) : !data.isDefault}

                                              style={{ textAlign: 'right' }}
                                            />
                                          )}
                                        </Field>
                                      </td>
                                      <td>
                                        <Field
                                          id="outlined-secondary"
                                          as={TextField}
                                          name={`quote.policyLevelCover.${idx}.coverPremium`}
                                          variant="outlined"
                                        >
                                          {({ field, form }) => (
                                            <input
                                              type="text"
                                              class="form-control"
                                              {...field}
                                              disabled={type == 'endorsement' ? !(data.isAdded || data.isDeleted || data.isModified) : !data.isDefault}
                                              style={{ textAlign: 'right' }}
                                            />
                                          )}
                                        </Field>
                                      </td>
                                    </tr>
                                  ) : null;
                                })
                                : null}
                          </>
                        )}
                      />
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <th class="CoverPol">Deductible</th>
                {values?.riskDetails?.map((array, index) => {
                  return (
                    <FieldArray
                      name={`riskDetails.${index}`}
                      render={arrayHelpers => (
                        <td role="address-iteration">
                          <Field
                            id="outlined-secondary"
                            as={TextField}
                            name={`riskDetails.${index}.deductible`}
                            variant="outlined"
                          >
                            {({ field, form }) => (
                              <input type="text" class="form-control" {...field} />
                            )}
                          </Field>
                        </td>
                      )}
                    />
                  );
                })}
              </tr>
              <tr>
                <th class="CoverPol">Remarks</th>
                {values?.riskDetails?.map((array, index) => {
                  return (
                    <FieldArray
                      name={`riskDetails.${index}`}
                      render={arrayHelpers => (
                        <td role="address-iteration">
                          <Field
                            id="outlined-secondary"
                            as={TextField}
                            name={`riskDetails.${index}.remarks`}
                            variant="outlined"
                          >
                            {({ field, form }) => (
                              <input type="text" class="form-control" {...field} />
                            )}
                          </Field>
                        </td>
                      )}
                    />
                  );
                })}
              </tr>
            </tbody>
          </table>
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
};

TableCovers.propTypes = {
  setValues: PropTypes.func.isRequired,
  props: PropTypes.any,
  type: PropTypes.any,
  description: PropTypes.string
};

export default TableCovers;
