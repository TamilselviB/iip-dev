import { GET_ENDORSEMENT_TYPE_SUCCESS,GET_ENDORSEMENT_TYPE_FAILURE} from '../constants/types';

const initialState = {
  endorsementType : []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case GET_ENDORSEMENT_TYPE_SUCCESS :
      return {
        ...state,
        endorsementType : action.payload
      };
      case GET_ENDORSEMENT_TYPE_FAILURE:
        return {
          ...state,
          endorsementType : action.payload
        };
    default:
      return state;
  }
}
