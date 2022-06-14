import {
  GET_RECEIVED_COMPANYQUOTE_FAILURE,
  GET_RECEIVED_COMPANYQUOTE_SUCCESS,
  GET_SUBMITTED_COMPANYQUOTE_SUCCESS,
  GET_SUBMITTED_COMPANYQUOTE_FAILURE,
  GET_COMPANY_POLICY_SUCCESS,
  GET_COMPANY_POLICY_FAILURE,
} from '../constants/types';

const initialState = {
  receivedCompanyQuotes: [],
  companyPolicies : [],
  submittedCompanyQuotes: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECEIVED_COMPANYQUOTE_SUCCESS:
      return {
        ...state,
        receivedCompanyQuotes: action.payload,
      };

    case GET_RECEIVED_COMPANYQUOTE_FAILURE:
      return {
        ...state,
        receivedCompanyQuotes: action.payload,
      };

    case GET_SUBMITTED_COMPANYQUOTE_SUCCESS:
      return {
        ...state,
        submittedCompanyQuotes: action.payload,
      };
    case GET_SUBMITTED_COMPANYQUOTE_FAILURE:
      return {
        ...state,
        submittedCompanyQuotes: action.payload,
      };

    case GET_COMPANY_POLICY_SUCCESS:
      return {
        ...state,
        companyPolicies : action.payload
      };

    case GET_COMPANY_POLICY_FAILURE:
      return {
        ...state,
        companyPolicies : action.payload
      };

    default:
      return state;
  }
}
