import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import 'react-toastify/dist/ReactToastify.minimal.css';
import { Link } from 'react-router-dom';
import * as loginService from '../../Services/loginService';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function TextError({ children }) {
  return <div className="errormessage">{children}</div>;
}

const initialValues = {
  username: '',
  email: '',
  password: '',
  conf_password: '',
  mobile: '',
  userType: '',
};

const validationSchema = yup.object({
  password: yup
    .string()
    .required('Required')
    .min(8, 'Password is too short - should be 8 characters minimum.'),
  conf_password: yup.string().required('Required'),
  mobile: yup.string().required('Required'),
  userType: yup.string().required('Required'),
});

function Register(props) {
  const dispatch = useDispatch();
  const [val, setVal] = useState(false);
  const validateUserName = value => {
    setVal(false);
    let error;
    if (!value) {
      error = 'Required';
    } else {
      const obj = {
        type: 'username',
        value: value,
      };
      loginService.validation(obj).then(data => {
        if (data === true) {
          setVal(true);
        } else {
          setVal(false);
        }
      });
      if (val === true) {
        error = 'Username already exists';
      }
    }
    setVal(false);
    return error;
  };

  const validateEmail = value => {
    setVal(false);
    let error;
    const obj = {
      type: 'email',
      value: value,
    };

    if (!value) {
      error = 'Required';
    } else {
      loginService.validation(obj).then(data => {
        if (data === true) {
          setVal(true);
        } else {
          setVal(false);
        }
      });

      if (val === true) {
        error = 'EmailId already exists';
      } else {
        setVal(false);
      }
    }
    setVal(false);
    return error;
  };

  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    Axios.post(`${process.env.REACT_APP_API_URL}/user/signUp`, values)
      .then(function (response) {
        console.log('response', response);
        if (response.data === true) {
          dispatch(push('/'))
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  return (
    <div>
      <body class="account-body accountbg" style={{ height: '1000px' }}>
        {/* <!-- Log In page --> */}
        <div class="row vh-100 ">
          <div class="col-12 align-self-center">
            <div class="auth-page">
              <div class="card auth-card shadow-lg" style={{ marginTop: '35px' }}>
                <div class="card-body">
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                  >
                    {props => (
                      <div class="px-3">
                        <div class="auth-logo-box">
                          <a class="logo logo-admin">
                            <img
                              src="assets/images/icon.png"
                              height="75"
                              alt="logo"
                              class="auth-logo"
                            />
                          </a>
                        </div>
                        {/* <!--end auth-logo-box--> */}

                        <div class="text-center auth-logo-text">
                          <h4 class="mt-0 mb-3 mt-5" style={{ color: 'black' }}>
                            Free Register for Insurance
                          </h4>
                          <p class="mb-0" style={{ fontSize: '16px', color: 'black' }}>
                            Get your free insurance account now.
                          </p>
                        </div>
                        {/* <!--end auth-logo-text-->   */}

                        <Form class="form-horizontal auth-form my-4" action="index.html">
                          <div class="form-group">
                            <label for="username" style={{ color: 'black' }}>
                              Username
                            </label>
                            <div class="input-group mb-3">
                              <span class="auth-form-icon">
                                <i class="dripicons-user" />
                              </span>
                              <Field
                                type="text"
                                class="form-control"
                                id="username"
                                placeholder="Enter username"
                                name="username"
                                validate={validateUserName}
                              />

                              <ErrorMessage name="username" component={TextError} />
                            </div>
                          </div>
                          {/* <!--end form-group-->  */}

                          <div class="form-group">
                            <label for="email" style={{ color: 'black' }}>
                              Email
                            </label>
                            <div class="input-group mb-3">
                              <span class="auth-form-icon">
                                <i class="dripicons-mail" />
                              </span>
                              <Field
                                type="email"
                                class="form-control"
                                id="email"
                                placeholder="Enter Email"
                                name="email"
                                validate={validateEmail}
                              />

                              <ErrorMessage name="email" component={TextError} />
                            </div>
                          </div>
                          {/* <!--end form-group--> */}

                          <div class="form-group">
                            <label for="password" style={{ color: 'black' }}>
                              Password
                            </label>
                            <div class="input-group mb-3">
                              <span class="auth-form-icon">
                                <i class="dripicons-lock" />
                              </span>
                              <Field
                                type="password"
                                class="form-control"
                                id="password"
                                placeholder="Enter password"
                                name="password"
                              />

                              <ErrorMessage name="password" component={TextError} />
                            </div>
                          </div>
                          {/* <!--end form-group-->  */}

                          <div class="form-group">
                            <label for="conf_password" style={{ color: 'black' }}>
                              Confirm Password
                            </label>
                            <div class="input-group mb-3">
                              <span class="auth-form-icon">
                                <i class="dripicons-lock-open" />
                              </span>
                              <Field
                                type="password"
                                class="form-control"
                                id="conf_password"
                                placeholder="Enter Confirm Password"
                                name="conf_password"
                              />
                              <ErrorMessage name="conf_password" component={TextError} />
                            </div>
                            <div class="form-group">
                              <label for="useremail" style={{ color: 'black' }}>
                                I am{' '}
                              </label>
                              <div class="input-group mb-3">
                                <span class="auth-form-icon">
                                  <i class="dripicons-user" />
                                </span>

                                <Field
                                  as="select"
                                  name="userType"
                                  label="User Type"
                                  id="inputState"
                                  class="form-control"
                                >
                                  <option value="">Select</option>
                                  <option value="Customer">Customer</option>
                                  <option value="Insurance">Insurance</option>
                                  <option value="Broker">Broker</option>
                                </Field>
                              </div>
                            </div>
                            {/* <!--end form-group-->   */}

                            <div class="form-group">
                              <label for="mobile" style={{ color: 'black' }}>
                                Mobile Number
                              </label>
                              <div class="input-group mb-3">
                                <span class="auth-form-icon">
                                  <i class="dripicons-phone" />
                                </span>
                                <Field
                                  type="text"
                                  class="form-control"
                                  id="mobile"
                                  placeholder="Enter Mobile Number"
                                  name="mobile"
                                />
                                <ErrorMessage name="mobile" component={TextError} />
                              </div>
                            </div>
                            {/* <!--end form-group-->  */}
                          </div>
                          {/* <!--end form-group-->  */}

                          <div class="form-group row mt-4">
                            <div class="col-sm-12">
                              <div class="custom-control custom-switch switch-primary">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customSwitchPrimary"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customSwitchPrimary"
                                  style={{ color: 'black' }}
                                >
                                  By registering you agree to the Frogetor{' '}
                                  <a href="#" style={{ color: '#f04763' }}>
                                    Terms of Use
                                  </a>
                                </label>
                              </div>
                            </div>
                            {/* <!--end col-->                                              */}
                          </div>
                          {/* <!--end form-group-->  */}

                          <div class="form-group mb-0 row">
                            <div class="col-12 mt-2">
                              <button
                                class="btn btn-gradient-dark btn-round btn-block waves-effect waves-light"
                                type="submit"
                                style={{ width: '374px', backgroundColor: 'black', color: 'white' }}
                              >
                                Register&nbsp;&nbsp; <ExitToAppIcon/>
                              </button>
                            </div>
                            {/* <!--end col-->  */}
                          </div>
                          {/* <!--end form-group-->                            */}
                        </Form>
                        {/* <!--end form--> */}
                      </div>
                    )}
                  </Formik>
                  {/* <!--end /div--> */}

                  <div class="m-3 text-center text-muted">
                    <p class="" style={{ fontSize: '16px', color: 'black' }}>
                      Already have an account ?{' '}
                      <Link to="/">
                        <a class="ml-2" style={{ color: '#f04763' }}>
                          Log in
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Register;
