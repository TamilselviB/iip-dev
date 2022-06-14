import {
  GET_RECEIVED_QUOTE_FAILURE,
  GET_RECEIVED_QUOTE_SUCCESS,
  GET_DRAFT_QUOTE_FAILURE,
  GET_DRAFT_QUOTE_SUCCESS,
  GET_SUBMITTED_QUOTE_FAILURE,
  GET_SUBMITTED_QUOTE_SUCCESS,
  GET_MY_POLICIES_SUCCESS,
  GET_MY_POLICIES_FAILURE,
  GET_POLICIE_BY_ID_SUCCESS,
  GET_POLICIE_BY_ID_FAILURE,
  SEARCH_MY_POLICIES,
  CUSTOMER_LANDING_SUCCESS,
  CUSTOMER_LANDING_FAILURE,
} from '../constants/types';

const initialState = {
  receivedQuotes: [],
  draftQuotes: [],
  submittedQuotes: [],
  myPolicies: [],
  policieById: [],
  customer: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECEIVED_QUOTE_SUCCESS:
      return {
        ...state,
        receivedQuotes: action.payload,
      };

    case GET_RECEIVED_QUOTE_FAILURE:
      return {
        ...state,
        receivedQuotes: action.payload,
      };

    case GET_SUBMITTED_QUOTE_SUCCESS:
      return {
        ...state,
        submittedQuotes: action.payload,
      };
    case GET_SUBMITTED_QUOTE_FAILURE:
      return {
        ...state,
        submittedQuotes: action.payload,
      };
    case GET_DRAFT_QUOTE_SUCCESS:
      return {
        ...state,
        draftQuotes: action.payload,
      };

    case GET_DRAFT_QUOTE_FAILURE:
      return {
        ...state,
        draftQuotes: action.payload,
      };
    case GET_MY_POLICIES_SUCCESS:
      return {
        ...state,
        myPolicies: action.payload,
      };

    case SEARCH_MY_POLICIES:
      return {
        ...state,
        myPolicies: state.myPolicies.filter(obj => obj.requestId.includes(action.payload)),
      };

    case GET_MY_POLICIES_FAILURE:
      return {
        ...state,
        myPolicies: action.payload,
      };
    case GET_POLICIE_BY_ID_SUCCESS:
      return {
        ...state,
        policieById: action.payload,
      };

    case GET_POLICIE_BY_ID_FAILURE:
      return {
        ...state,
        policieById: action.payload,
      };

    case CUSTOMER_LANDING_SUCCESS:
      return {
        ...state,
        customer: action.payload,
      };

    case CUSTOMER_LANDING_FAILURE:
      return {
        ...state,
        customer: action.payload,
      };

    default:
      return state;
  }
}
