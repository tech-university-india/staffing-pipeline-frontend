import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndpoints';
// import AUTHORIZATION_TOKEN from '../../constants/authorizationToken';
import { ERROR_ROUTE } from '../../constants/routes';

const makeRequest = async (apiEndPoint, dynamicConfig = {}, navigate) => {
  try {
    const requestDetails = {
      baseURL: BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1a2htYW5AbWNraW5zZXkuY29tIiwiaWF0IjoxNjc4Njk4MzA4LCJleHAiOjE2Nzg3MDE5MDh9.LJPslSfhkohe5PUFhRlk5BOyNcn_RbjNNqVpcYh31jE',
      },
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (e) {
    const errorStatus = e.response?.status;
    if (errorStatus) {
      navigate(`${ERROR_ROUTE}/${errorStatus}`);
    } else {
      navigate(ERROR_ROUTE);
    }
    return null;
  }
};

export default makeRequest;
