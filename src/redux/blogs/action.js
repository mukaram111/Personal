import { GET_BLOGPAGE_DATA, GET_BLOGPAGE_DATA_SUCCESS } from "./constant";

export const getData = (data) => ({
  type: GET_BLOGPAGE_DATA,
  payload: data,
});

export const getDataSuccess = (data) => ({
  type: GET_BLOGPAGE_DATA_SUCCESS,
  payload: data,
});
