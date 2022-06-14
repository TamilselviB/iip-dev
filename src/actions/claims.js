import {
  GET_CLAIMS_SUCCESS,
  GET_CLAIMS_FAILURE,
  GET_ADJUSTER_CLAIMS_SUCCESS,
  GET_ADJUSTER_CLAIMS_FAILURE,
  GET_USER_CLAIMS_SUCCESS,
  GET_USER_CLAIMS_FAILURE,
} from '../constants/types';
import { showSpinner, hideSpinner } from './common';
import axios from '../axios';

export const fetchUserClaimSuccess = quotes => {
  return {
    type: GET_USER_CLAIMS_SUCCESS,
    payload: quotes,
  };
};

export const fetchUserClaimFailure = error => {
  return {
    type: GET_USER_CLAIMS_FAILURE,
    payload: error,
  };
};

export const fetchClaimSuccess = quotes => {
  return {
    type: GET_CLAIMS_SUCCESS,
    payload: quotes,
  };
};

export const fetchClaimFailure = error => {
  return {
    type: GET_CLAIMS_FAILURE,
    payload: error,
  };
};

export const fetchAdjusterClaimSuccess = quotes => {
  return {
    type: GET_ADJUSTER_CLAIMS_SUCCESS,
    payload: quotes,
  };
};

export const fetchAdjusterClaimFailure = error => {
  return {
    type: GET_ADJUSTER_CLAIMS_FAILURE,
    payload: error,
  };
};
export const fetchClaims = data => dispatch => {
  dispatch(showSpinner());
  axios
    .post(`/claim/getCompanyClaims`, data)
    .then(res => {
      console.log('----dipatch from the claims', res);
      dispatch(fetchClaimSuccess(res.data));
      dispatch(hideSpinner());
    })
    .catch(err => {
      dispatch(fetchClaimFailure(err));
      dispatch(hideSpinner());
    });
};

export const fetchAdjusterClaims = data => dispatch => {
  dispatch(showSpinner());
  axios
    .post(`/claim/getAdjusterClaims`, data)
    .then(res => {
      console.log('----dipatch from the claims', res);
      dispatch(fetchAdjusterClaimSuccess(res.data));
      dispatch(hideSpinner());
    })
    .catch(err => {
      dispatch(fetchAdjusterClaimFailure(err));
      dispatch(hideSpinner());
    });
};

export const fetchUserClaims = data => dispatch => {
  dispatch(showSpinner());
  axios
    .post(`/claim/getUserClaims`, data)
    .then(res => {
      console.log('----dipatch from the claims', res);
      dispatch(fetchUserClaimSuccess(res.data));
      dispatch(hideSpinner());
    })
    .catch(err => {
      dispatch(fetchUserClaimFailure(err));
      dispatch(hideSpinner());
    });
};
