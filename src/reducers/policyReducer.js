import { GET_POLICY_SUCCESS, GET_POLICY_FAILURE} from '../constants/types';

const initialState = {
  activePolicy : {}
}

export default function (state = initialState, action) {
  switch(action.type) {
    case GET_POLICY_SUCCESS :
      return {
        ...state,
        activePolicy : action.payload
      };

    case GET_POLICY_FAILURE :
      return {
        ...state,
        activePolicy : action.payload
      };

    default:
      return state;
  }
}
