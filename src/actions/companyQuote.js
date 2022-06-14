import {
  GET_RECEIVED_COMPANYQUOTE_FAILURE,
  GET_RECEIVED_COMPANYQUOTE_SUCCESS,
  GET_SUBMITTED_COMPANYQUOTE_SUCCESS,
  GET_SUBMITTED_COMPANYQUOTE_FAILURE,
  GET_COMPANY_POLICY_SUCCESS,
  GET_COMPANY_POLICY_FAILURE,
  GET_ACTIVE_POLICY_FAILURE,
} from '../constants/types';
import { showSpinner, hideSpinner } from './common';
import axios from '../axios';

/**
 * action for received quotes
 */

export const fetchReceivedCompanyQuotesSuccess = quotes => {
  return {
    type: GET_RECEIVED_COMPANYQUOTE_SUCCESS,
    payload: quotes,
  };
};

export const fetchReceivedCompanyQuotesFailure = error => {
  return {
    type: GET_RECEIVED_COMPANYQUOTE_FAILURE,
    payload: [],
  };
};

export const fetchReceivedCompanyQuotes = id => dispatch => {
  dispatch(showSpinner());
  axios
    .post('/quote-subscription/getCompanyQuotes', {
      userId: id,
      status: 'inProgress',
    })
    .then(res => {
      dispatch(fetchReceivedCompanyQuotesSuccess(res.data));
      dispatch(hideSpinner());
    })
    .catch(err => {
      dispatch(fetchReceivedCompanyQuotesFailure(err));
      dispatch(hideSpinner());
    });
};

/**
 * action for submitted quotes
 */

export const fetchSubmittedCompanyQuotesSuccess = quotes => {
  return {
    type: GET_SUBMITTED_COMPANYQUOTE_SUCCESS,
    payload: quotes,
  };
};

export const fetchSubmittedCompanyQuotesFailure = error => {
  return {
    type: GET_SUBMITTED_COMPANYQUOTE_FAILURE,
    payload: [],
  };
};

export const fetchSubmittedCompanyQuotes = id => dispatch => {
  dispatch(showSpinner());
  axios
    .post('/quote-subscription/getCompanyQuotes', {
      userId: id,
      status: 'submitted',
    })
    .then(res => {
      dispatch(fetchSubmittedCompanyQuotesSuccess(res.data));
      dispatch(hideSpinner());
    })
    .catch(err => {
      dispatch(fetchSubmittedCompanyQuotesFailure(err));
      dispatch(hideSpinner());
    });
};

export const fetchCompanyPolicySuccess = policies => {
  return {
    type: GET_COMPANY_POLICY_SUCCESS,
    payload: policies,
  };
};

export const fetchCompanyPolicyFailure = error => {
  return {
    type: GET_ACTIVE_POLICY_FAILURE,
    payload: error,
  };
};

export const fetchCompanyPolicy = id => dispatch => {
  dispatch(showSpinner());
  axios
    .post('/policy/myPolicy', {
      id: id,
      userType: 'Company',
    })
    .then(res => {
      dispatch(fetchCompanyPolicySuccess(res.data));
      dispatch(hideSpinner());
    })
    .catch(error => {
      dispatch(fetchCompanyPolicyFailure(error));
      dispatch(hideSpinner());
    });
};
