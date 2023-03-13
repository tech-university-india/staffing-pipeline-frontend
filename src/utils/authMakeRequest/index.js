import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndpoints';

const makeRequest = async (apiEndPoint, dynamicConfig = {}) => {
  const requestDetails = {
    baseURL: BACKEND_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  console.log('requestDetails', requestDetails);
  const { data } = await axios(requestDetails);
  return data;
};

export default makeRequest;
