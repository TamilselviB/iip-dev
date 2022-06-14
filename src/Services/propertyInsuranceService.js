import React from "react";
import axios from "axios";

export function savePropertyInsurance(payload) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/quote`, payload)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response;
    });
}

const propertyInsuranceService = (props) => {
  return <div></div>;
};

export default propertyInsuranceService;
