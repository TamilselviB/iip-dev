import { push } from 'connected-react-router';
import { ADD_TO_COMPARE, CLEAR_COMPARE, DELETE_COMPARE } from '../constants/types';
import { showSpinner, hideSpinner } from './common';
import axios from '../axios';

export const addToCompare = policy => {
  return {
    type: ADD_TO_COMPARE,
    payload: policy,
  };
};

export const clearCompare = () => {
  return {
    type: CLEAR_COMPARE,
  };
};

export const deleteCompare = id => {
  return {
    type: DELETE_COMPARE,
    payload: id,
  };
};

export const checkBeforeAddToCompare = quoteId => dispatch => {
  dispatch(showSpinner());
  axios
    .post('/quote-subscription/compareQuote', {
      quoteId: quoteId,
    })
    .then(res => {
      dispatch(addToCompare(res.data));
      dispatch(push('/Customer/compare'));
      dispatch(hideSpinner());
    })
    .catch(err => {
      dispatch(addToCompare(err));
      dispatch(hideSpinner());
    });
};
