import React from "react";
import axios from "axios";

export function lineOfBusiness(payload) {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/line-of-business`, {
      params: payload,
      method: "GET",
    })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
}

export  function getProduct(payload) {
  return axios.post(`${process.env.REACT_APP_API_URL}/company-product/getCompanyByProduct`,payload)
  .then(res=>res.data).catch(error =>{
    throw error.response;
  })
}

export function getMotorInsurance(id) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/product/getProducts`, id)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response;
    });
}

export function getQuoteNumbers(payload) {
  return axios.post(`${process.env.REACT_APP_API_URL}/quote/getUserQuotes`,payload).then((res) => res.data).catch(error =>{
    throw error.response;
  })
}

export function getReceivedQuotes(payload) {
  return axios.post(`${process.env.REACT_APP_API_URL}/quote-subscription/getUserQuotes`,payload).then((res) => res.data).catch(error =>{
    throw error.response;
  })
}

export function getQuote(id){
  return axios.get(`${process.env.REACT_APP_API_URL}/quote/`+ id).then(res => res.data).catch(error =>{
    throw error.response;
  })
}

export function getQuoteSubscription(id){
  return axios.get(`${process.env.REACT_APP_API_URL}/quote-subscription/`+ id).then(res => res.data).catch(error =>{
    throw error.response;
  })
}

export function getEndorsementRequest(id){
return axios.get(`${process.env.REACT_APP_API_URL}/endorsement/`+ id).then(res => res.data).catch(error =>{
  throw error.response;
})
}

export function getCompanyQuotes(payload) {
  return axios.post(`${process.env.REACT_APP_API_URL}/quote-subscription/getCompanyQuotes`,payload).then((res) => res.data).catch(error =>{
    throw error.response;
  })
}

export function acceptQuote(id,payload) {
  return axios.put(`${process.env.REACT_APP_API_URL}/quote-subscription/`+id,payload).then((res) => res.data)
  .catch(error => {
    throw error.response
  })
}
export function acceptEndorsementQuote(id,payload) {
  return axios.put(`${process.env.REACT_APP_API_URL}/endorsement/`+id,payload).then((res) => res.data)
  .catch(error => {
    throw error.response
  })
}
const getQuoteService = (props) => {
  return <div></div>;
};
// loginService.propTypes = {

// };

export default getQuoteService;
