import axios from 'axios';

/**
 * getting the individual claim details
 * @param {*} id id of the claim
 * @returns
 */

export async function getClaim(id = 4) {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/claim/${id}`);
  return data;
}

/**
 *
 * @param {*} payload get claims for particular insurance company
 * @returns
 */
export function getClaims(payload) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/claim/getCompanyClaims`, payload)
    .then(res => res.data)
    .catch(error => {
      throw error.response;
    });
}

/**
 *  Raise claim
 * @param {*} payload
 * @returns
 */
export async function requestClaim(payload) {
  const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/claim`, payload);
  return data;
}

/**
 *  updating the claim with  adjuster data by insurance company and adjuster
 * @param {*} id claim id
 * @param {*} payload payload data
 * @returns
 */

export async function updateClaimStatus(id = 1, payload) {
  const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/claim/${id}`, payload);
  return data;
}

/**
 *
 * @param {*} payload getting the adjuster drop down
 * @returns
 */
export async function getAdjuster(payload) {
  const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/user/getAdjuster`, payload);
  return data;
}

/**
 *
 */
// userid should be passed
export async function getAdjusterClaim(payload) {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_URL}/claim/getAdjusterClaims`,
    payload,
  );
  return data;
}
