import { GET_QUOTESUBSCRIPTION_SUCESS, GET_QUOTESUBSCRIPTION_FAILURE } from '../constants/types';

const initialState = {
  receivedQuote: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_QUOTESUBSCRIPTION_SUCESS:
      return {
        ...state,
        receivedQuote: action.payload,
      };

    case GET_QUOTESUBSCRIPTION_FAILURE:
      return {
        ...state,
        receivedQuote: action.payload,
      };

    default:
      return state;
  }
}
