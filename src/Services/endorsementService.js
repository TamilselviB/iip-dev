import React from "react";
import axios from "axios";

export function sendEndorsementRequest(payload) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/policy/createEndorsment`, payload)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response;
    });
}

export default sendEndorsementRequest;