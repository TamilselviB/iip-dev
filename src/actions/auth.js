import { push } from 'connected-react-router';
import { AUTH_SUCCESS, AUTH_FAILURE } from '../constants/types';
import { showSpinner, hideSpinner, opentoast } from './common';
import { fetchCustomerDashboard } from './userQuote';
import axios from '../axios';
import { persistor } from '../reducers/store';

export const authSuccess = authData => {
  return {
    type: AUTH_SUCCESS,
    payload: authData,
  };
};

export const authFailure = error => {
  return {
    type: AUTH_FAILURE,
    payload: error,
  };
};

export const login = payload => dispatch => {
  dispatch(showSpinner());
  axios
    .post(`/user/login`, payload)
    .then(res => {
      const { data } = res;
      if (data?.status === 400) {
        dispatch(opentoast('error', data?.message));
      }
      sessionStorage.setItem('usertype', data.userType);
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('userid', data.id);
      if (data.userType === 'Customer') {
        dispatch(push('/Customer'));
        dispatch(opentoast('Success', 'Login Successfull....'));
        dispatch(fetchCustomerDashboard(data.id));
      }
      if (data.userType === 'Insurance') {
        dispatch(push('/Insurance'));
      }
      if (data.userType === 'Broker') {
        dispatch(push('/Broker'));
      }
      if (data.userType === 'Adjuster') {
        dispatch(push('/adjuster'));
      }

      dispatch(authSuccess(data));
      dispatch(hideSpinner());
    })
    .catch(err => {
      const { message } = err;
      dispatch(authFailure(err));
      dispatch(opentoast('error', message ? message : 'Network is down'));
      dispatch(hideSpinner());
    });
};

export const logout = () => dispatch => {
  sessionStorage.clear();
  localStorage.clear();
  dispatch(push('/'));
  persistor.purge();
};
