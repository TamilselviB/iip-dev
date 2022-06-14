import { GET_ENDORSEMENT_TYPE_SUCCESS,GET_ENDORSEMENT_TYPE_FAILURE} from '../constants/types';
import axios from '../axios';

export const getEndorsementTypeSuccess = policy => {
    return {
      type : GET_ENDORSEMENT_TYPE_SUCCESS,
      payload : policy
    }
  }
  export const getEndorsementTypeFailure = policy => {
    return {
      type : GET_ENDORSEMENT_TYPE_FAILURE,
      payload : policy
    }
  }
export const fetchEndorsementType =() => dispatch => {
  axios.get(`/endorsement-type`).then(res => {
    dispatch(getEndorsementTypeSuccess(res.data));
  }).catch(err =>{
    dispatch(getEndorsementTypeFailure(err));
  })
}


