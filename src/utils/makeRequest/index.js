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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1a2htYW5AbWNraW5zZXkuY29tIiwiaWF0IjoxNjc4NzEwMDY2LCJleHAiOjE2Nzg3MTM2NjZ9.z0h4WtKMztIefSULKb3WfBB_7jNO1LXTnaYEh7_PzJ8',
      },
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (e) {
    const errorStatus = e.response?.status;
    if (errorStatus) {
      navigate(`${ERROR_ROUTE}/${errorStatus}`, {
        state: {
          message: e.response.data.error,
        },
      });
    } else {
      navigate(ERROR_ROUTE);
    }
    return null;
  }
};

export default makeRequest;
