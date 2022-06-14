import { GET_POLICY_SUCCESS, GET_POLICY_FAILURE} from '../constants/types';
import axios from '../axios';

export const getPolicySucess = policy => {
  return {
    type : GET_POLICY_SUCCESS,
    payload : policy
  }
}

export const getPolicyFailure = policy => {
  return {
    type : GET_POLICY_FAILURE,
    payload : policy
  }
}

export const fetchPolicy = id => dispatch => {
  axios.get(`/policy/${id}`).then(res => {
    console.log('---dipatch policy', res);
    dispatch(getPolicySucess(res.data));
  }).catch(err =>{
    dispatch(getPolicyFailure(err));
  })
}
