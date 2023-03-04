export const BACKEND_URL = 'http://localhost:8000/';

export const GET_USER_DATA_URL = {
  url: 'api/users',
  method: 'get',
};
export const CREATE_USER_DATA_URL = {
  url: 'api/users',
  method: 'post',
};
export const GET_USER_DATA_BY_ID_URL = id => ({
  url: `api/users/${id}`,
  method: 'get',
});

export const UPDATE_USER_DATA_URL = id => ({
  url: `api/users/${id}`,
  method: 'put',
});

export const DELETE_USER_DATA_URL = id => ({
  url: `api/users/${id}`,
  method: 'delete',
});

export const GET_ENGAGEMENT_DATA_URL = {
  url: 'api/projects',
  method: 'get',
};
export const CREATE_ENGAGEMENT_DATA_URL = {
  url: 'api/projects',
  method: 'post',
};
export const GET_ENGAGEMENT_DATA_BY_ID_URL = id => ({
  url: `api/projects/${id}`,
  method: 'get',
});

export const UPDATE_ENGAGEMENT_DATA_URL = id => ({
  url: `api/projects/${id}`,
  method: 'put',
});

export const DELETE_ENGAGEMENT_DATA_URL = id => ({
  url: `api/projects/${id}`,
  method: 'delete',
});

export const GET_CASE_STUDIES_DATA_URL = {
  url: 'api/case-studies',
  method: 'get',
};
export const CREATE_CASE_STUDIES__DATA_URL = {
  url: 'api/case-studies',
  method: 'post',
};
export const GET_CASE_STUDIES__DATA_BY_ID_URL = id => ({
  url: `api/case-studies/${id}`,
  method: 'get',
});

export const UPDATE_CASE_STUDIES__DATA_URL = id => ({
  url: `api/case-studies/${id}`,
  method: 'put',
});

export const DELETE_CASE_STUDIES__DATA_URL = id => ({
  url: `api/case-studies/${id}`,
  method: 'delete',
});
