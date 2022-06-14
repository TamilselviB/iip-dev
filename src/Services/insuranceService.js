import React from 'react';
import axios from 'axios';

export function  putTermDocs(payload,id){
    return axios.put(`${process.env.REACT_APP_API_URL}/quote-subscription/`+id, payload).then(res => res.data)
    .catch(error => {
        throw error.response
    })
}

export function convertToPolicy(payload, id) {
  const object ={
    "quoteSubscriptionId" : id,
    "policyNumber" : payload
  }
  return axios.post(`${process.env.REACT_APP_API_URL}/quote-subscription/moveToPolicy`,object).then(res => res.data)
  .catch(error => {
    throw error.response
  })
}
export function updatePolicy( id) {
  
  const object ={
    "endorsementId" : id,
  }
  return axios.post(`${process.env.REACT_APP_API_URL}/endorsement/moveToPolicy`,object).then(res => res.data)
  .catch(error => {
    throw error.response
  })
}
export function  endorsementUpdatePremium(payload,id){
  return axios.put(`${process.env.REACT_APP_API_URL}/endorsement/`+id, payload).then(res => res.data)
  .catch(error => {
      throw error.response
  })
}

export function endorsementconvertToPolicy(payload, id) {
const object ={
  // "quoteSubscriptionId" : id,
  // "policyNumber" : payload
  endorsementId:id
}
return axios.post(`${process.env.REACT_APP_API_URL}/endorsement/moveToPolicy`,object).then(res => res.data)
.catch(error => {
  throw error.response
})
}


const insuranceService = (props) => {
    return <div></div>;
  };

export default insuranceService;
