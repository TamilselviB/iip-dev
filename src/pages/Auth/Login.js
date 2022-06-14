import { Formik, Form, Field } from 'formik';
import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GTranslateIcon from '@material-ui/icons/GTranslate';

const initialValues = {
  username: '',
  password: '',
};

function Login() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  toast.configure();
  const onSubmit = (values, { resetForm }) => {
    dispatch(login(values));
  };
  return (
    <div>
      <body className="account-body accountbg">
        {/* <!-- Log In page --> */}
        <div className="row vh-100 ">
          <div className="col-12 align-self-center">
            <div className="auth-page" style={{ marginTop: '50px' }}>
              <div className="card auth-card shadow-lg">
                <div className="card-body">
                  <div className="px-3">
                    <div className="auth-logo-box">
                      <a className="logo logo-admin">
                        <img
                          src="assets/images/icon.png"
                          height="75"
                          alt="logo"
                          className="auth-logo"
                        />
                      </a>
                    </div>
                    {/* <!--end auth-logo-box--> */}

                    <div className="text-center auth-logo-text">
                      <h4 className="mt-0 mb-3 mt-5" style={{ color: 'black' }}>
                        Let's Get Started
                      </h4>
                      <p className="text-muted mb-0" />
                    </div>
                    {/* <!--end auth-logo-text-->   */}
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                      <Form className="form-horizontal auth-form my-4" action="index.html">
                        <div className="form-group">
                          <label for="username" style={{ color: 'black' }}>
                            Username{' '}
                          </label>
                          <div className="input-group mb-3">
                            <span className="auth-form-icon" style={{ top: '3px' }}>
                              <i className="dripicons-user" />
                            </span>
                            <Field
                              type="text"
                              className="form-control"
                              id="username"
                              placeholder="Enter username"
                              name="username"
                            />
                          </div>
                        </div>
                        {/* <!--end form-group-->  */}

                        <div className="form-group">
                          <label for="password" style={{ color: 'black' }}>
                            Password
                          </label>
                          <div className="input-group mb-3">
                            <span className="auth-form-icon">
                              <i className="dripicons-lock" />
                            </span>
                            <Field
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder="Enter password"
                              name="password"
                            />
                          </div>
                        </div>
                        {/* <!--end form-group-->  */}

                        <div className="form-group row mt-4">
                          <div className="col-sm-6">
                            {/* <div className="custom-control custom-switch switch-primary">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customSwitchSuccess"
                              />
                              <label
                                className="custom-control-label text-muted"
                                for="customSwitchSuccess"
                              >
                                Remember me
                              </label>
                            </div> */}
                            <a
                              href="#"
                              className="font-16"
                              style={{ color: '#f04763', marginLeft: '-15px' }}
                            >
                              <i className="dripicons-lock" /> Forgot password?
                            </a>
                          </div>
                          {/* <!--end col-->  */}
                        </div>
                        {/* <!--end form-group-->  */}

                        <div className="form-group">
                          <div className="col-12 mt-2">
                            <button
                              className="btn btn-dark btn-round btn-block waves-effect waves-light"
                              id="btnGet"
                              type="submit"
                              style={{ width: '350px', height: '40px', backgroundColor: 'black' }}
                            >
                              Log In &nbsp;&nbsp;<ExitToAppIcon/>
                            </button>{' '}
                            {isLoggedIn === true ? (
                              <button
                                disabled="true"
                                className="btn btn-dark btn-round btn-block waves-effect waves-light"
                                id="btnGet"
                                style={{ width: '350px', height: '40px', backgroundColor: 'black' }}
                              >
                                Logging...
                              </button>
                            ) : (
                              ''
                            )}
                          </div>
                          {/* <!--end col-->  */}
                        </div>
                        {/* <!--end form-group--> */}
                      </Form>
                    </Formik>
                    {/* <!--end form--> */}
                  </div>

                  {/* <!--end /div--> */}

                  <div className="m-3 text-center text-muted">
                    <p className="" style={{ fontSize: '16px', color: 'black' }}>
                      Don't have an account ?{' '}
                      <Link to="/Register" className="ml-2" style={{ color: '#f04763' }}>
                        Sign Up
                      </Link>
                    </p>
                    <ToastContainer />
                  </div>
                </div>
                {/* <!--end card-body--> */}
              </div>
              {/* <!--end card--> */}
              <div className="account-social text-center mt-4">
                <h6 className="my-4" style={{ color: '#F04763' }}>
                  Or Login With
                </h6>
                <ul className="list-inline mb-4">
                  <li className="list-inline-item">
                    <a href="" className="">
                      <FacebookIcon style={{ color:"#2a3eb1"}}/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" className="">
                      <TwitterIcon style={{ color:"#2196f3"}}/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" className="">
                      <GTranslateIcon style={{ color: "#f73378" }}/>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--end account-social--> */}
            </div>
            {/* <!--end auth-page--> */}
          </div>
          {/* <!--end col-->            */}
        </div>
        {/* <!--end row--> */}
        {/* <!-- End Log In page --> */}
      </body>
    </div>
  );
}

export default Login;
