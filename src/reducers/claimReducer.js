import {
  GET_CLAIMS_SUCCESS,
  GET_CLAIMS_FAILURE,
  GET_ADJUSTER_CLAIMS_SUCCESS,
  GET_ADJUSTER_CLAIMS_FAILURE,
  GET_USER_CLAIMS_SUCCESS,
  GET_USER_CLAIMS_FAILURE,
} from '../constants/types';

const initialState = {
  claimsReceivedByInsuranceCompany: [],
  claimsReceivedByAdjuster: [],
  claimsRaisedByUser: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CLAIMS_SUCCESS:
      return {
        ...state,
        claimsReceivedByInsuranceCompany: action.payload,
      };

    case GET_CLAIMS_FAILURE:
      return {
        ...state,
      };
    case GET_ADJUSTER_CLAIMS_SUCCESS:
      return {
        ...state,
        claimsReceivedByAdjuster: action.payload,
      };

    case GET_ADJUSTER_CLAIMS_FAILURE:
      return {
        ...state,
      };
    case GET_USER_CLAIMS_SUCCESS:
      return {
        ...state,
        claimsRaisedByUser: action.payload,
      };

    case GET_USER_CLAIMS_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
}
