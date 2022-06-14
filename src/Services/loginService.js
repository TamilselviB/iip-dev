import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

export function login(payload) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/user/login`, payload)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response;
    });
}

export function validation(payload) {
  return axios.post(`${process.env.REACT_APP_API_URL}/user/validate`,payload).then(res=>res.data);
}

export function userInfo(payload,id){
  return axios.get('https://69g5bmxbqh.execute-api.ap-south-1.amazonaws.com/iip-dev/user/'+id,{
    headers :{
      Authorization : 'Bearer' +" "+ payload
    },
    method : 'GET'
  }).then(res=>res.data).catch(error =>{
    console.log(error)
  })

}

const loginService = (props) => {
  return <div></div>;
};

// loginService.propTypes = {

// };

export default loginService;
