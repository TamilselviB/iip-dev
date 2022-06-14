import { GET_QUOTESUBSCRIPTION_SUCESS, GET_QUOTESUBSCRIPTION_FAILURE } from '../constants/types';
import axios from '../axios';

export const fetchReceivedQuotesSuccess = quotes => {
  return {
    type: GET_QUOTESUBSCRIPTION_SUCESS,
    payload: quotes,
  };
};

export const fetchReceivedQuotesFailure = error => {
  return {
    type: GET_QUOTESUBSCRIPTION_FAILURE,
    payload: error,
  };
};

export const fetchReceivedQuote = id => dispatch => {
  axios
    .get(`/quote-subscription/${id}`)
    .then(res => {
      console.log('----dipatch from the quote', res);
      dispatch(fetchReceivedQuotesSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchReceivedQuotesFailure(err));
    });
};

export const fetchEndorsementReceivedQuote = id => dispatch => {
  axios
    .get(`/endorsement/${id}`)
    .then(res => {
      console.log('----dipatch from the quote', res);
      dispatch(fetchReceivedQuotesSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchReceivedQuotesFailure(err));
    });
};