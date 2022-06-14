import {
  GET_RECEIVED_QUOTE_FAILURE,
  GET_RECEIVED_QUOTE_SUCCESS,
  GET_DRAFT_QUOTE_FAILURE,
  GET_DRAFT_QUOTE_SUCCESS,
  GET_SUBMITTED_QUOTE_SUCCESS,
  GET_SUBMITTED_QUOTE_FAILURE,
  GET_MY_POLICIES_SUCCESS,
  GET_MY_POLICIES_FAILURE,
  GET_POLICIE_BY_ID_SUCCESS,
  GET_POLICIE_BY_ID_FAILURE,
  GET_ACTIVE_POLICY_SUCCESS,
  GET_ACTIVE_POLICY_FAILURE,
  SEARCH_MY_POLICIES,
  CUSTOMER_LANDING_SUCCESS,
  CUSTOMER_LANDING_FAILURE,
} from '../constants/types';
import { showSpinner, hideSpinner } from './common';
import axios from '../axios';

/**
 * action for received quotes
 */

export const fetchReceivedQuotesSuccess = quotes => {
  return {
    type: GET_RECEIVED_QUOTE_SUCCESS,
    payload: quotes,
  };
};

export const fetchReceivedQuotesFailure = error => {
  return {
    type: GET_RECEIVED_QUOTE_FAILURE,
    payload: [],
  };
};

export const fetchReceivedQuotes = id => dispatch => {
  dispatch(showSpinner());
  axios
    .post('/quote-subscription/getUserQuotes', {
      userId: id,
      status: 'inProgress',
    })
    .then(res => {
      dispatch(fetchReceivedQuotesSuccess(res.data));
      dispatch(hideSpinner());
    })
    .catch(err => {
      dispatch(fetchReceivedQuotesFailure(err));
      dispatch(hideSpinner());
    });
};

/**
 * action for submitted quotes
 */

export const fetchSubmittedQuotesSuccess = quotes => {
  return {
    type: GET_SUBMITTED_QUOTE_SUCCESS,
    payload: quotes,
  };
};

export const fetchSubmittedQuotesFailure = error => {
  return {
    type: GET_SUBMITTED_QUOTE_FAILURE,
    payload: [],
  };
};

export const fetchSubmittedQuotes = id => dispatch => {
  dispatch(showSpinner());
  axios
    .post('/quote/getUserQuotes', {
      userId: id,
      status: 'submitted',
    })
    .then(res => {
      dispatch(fetchSubmittedQuotesSuccess(res.data));
      dispatch(hideSpinner());
    })
    .catch(err => {
      dispatch(fetchSubmittedQuotesFailure(err));
      dispatch(hideSpinner());
    });
};

export const fetchMyPoliciesSuccess = quotes => {
  return {
    type: GET_MY_POLICIES_SUCCESS,
    payload: quotes,
  };
};

export const searchMypolicies = query => {
  return {
    type: SEARCH_MY_POLICIES,
    payload: query,
  };
};

export const fetchMyPoliciesFailure = error => {
  return {
    type: GET_MY_POLICIES_FAILURE,
    payload: [],
  };
};

// export const fetchMyPolicies = id => dispatch => {
//   dispatch(showSpinner());
//   axios
//     .get('https://69g5bmxbqh.execute-api.ap-south-1.amazonaws.com/iip-dev/policy', {
//     })
//     .then(res => {
//       console.log('res', res);
//       dispatch(fetchMyPoliciesSuccess(res.data));
//       dispatch(hideSpinner());
//     })
//     .catch(err => {
//       dispatch(fetchMyPoliciesFailure(err));
//       dispatch(hideSpinner());
//     });
// };

export const fetchMyPolicies = id => dispatch => {
  dispatch(showSpinner());
  axios
    .post('/policy/myPolicy', {
      id: id,
      userType: 'Customer',
    })
    .then(res => {
      dispatch(fetchMyPoliciesSuccess(res.data));
      dispatch(hideSpinner());
    })
    .catch(err => {
      dispatch(fetchMyPoliciesFailure(err));
      dispatch(hideSpinner());
    });
};

export const fetchPoliciesByIdSuccess = quotes => {
  return {
    type: GET_POLICIE_BY_ID_SUCCESS,
    payload: quotes,
  };
};

export const fetchPoliciesByIdFailure = error => {
  return {
    type: GET_POLICIE_BY_ID_FAILURE,
    payload: [],
  };
};

export const fetchPoliciesById = id => dispatch => {
  dispatch(showSpinner());
  axios
    .get('/policy/' + id)
    .then(res => {
      dispatch(fetchPoliciesByIdSuccess(res.data));
      dispatch(hideSpinner());
    })
    .catch(err => {
      dispatch(fetchPoliciesByIdFailure(err));
      dispatch(hideSpinner());
    });
};
/**
 * action of draft quotes
 */

export const fetchDraftQuotesSuccess = quotes => {
  return {
    type: GET_DRAFT_QUOTE_SUCCESS,
    payload: quotes,
  };
};

export const fetchDraftQuotesFailure = error => {
  return {
    type: GET_DRAFT_QUOTE_FAILURE,
    payload: [],
  };
};

export const fetchDraftQuotes = id => dispatch => {
  dispatch(showSpinner());
  axios
    .post('/quote-subscription/getUserQuotes', {
      userId: id,
      status: 'draft',
    })
    .then(res => {
      dispatch(fetchDraftQuotesSuccess(res.data));
      dispatch(hideSpinner());
    })
    .catch(err => {
      dispatch(fetchDraftQuotesFailure(err));
      dispatch(hideSpinner());
    });
};

export const fetchActivePolicySuccess = policies => {
  return {
    type: GET_ACTIVE_POLICY_SUCCESS,
    payload: policies,
  };
};

export const fetchActivePolicyFailure = error => {
  return {
    type: GET_ACTIVE_POLICY_FAILURE,
    payload: [],
  };
};

export const fetchActivePolicy = id => dispatch => {
  dispatch(showSpinner());
  axios
    .post('/policy/myPolicy', {
      id: id,
      userType: 'Customer',
    })
    .then(res => {
      dispatch(fetchActivePolicySuccess(res.data));
      dispatch(hideSpinner());
    })
    .catch(err => {
      dispatch(fetchActivePolicyFailure(err));
      dispatch(hideSpinner());
    });
};

export const fetchCustomerLandingSuccess = policies => {
  return {
    type: CUSTOMER_LANDING_SUCCESS,
    payload: policies,
  };
};

export const fetchCustomerLandingFailure = error => {
  return {
    type: CUSTOMER_LANDING_FAILURE,
    payload: {},
  };
};

export const fetchCustomerDashboard = id => dispatch => {
  dispatch(showSpinner());
  axios
    .post('/quote/quotesLanding', {
      userId: id,

      userType: 'Customer',
    })
    .then(res => {
      dispatch(fetchCustomerLandingSuccess(res.data));
      dispatch(hideSpinner());
    })
    .catch(err => {
      dispatch(fetchCustomerLandingFailure(err));
      dispatch(hideSpinner());
    });
};
