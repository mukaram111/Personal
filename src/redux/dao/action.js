import { GET_DAOPAGE_DATA, GET_DAOPAGE_DATA_SUCCESS } from "./constant";

export const getData = (data) => ({
  type: GET_DAOPAGE_DATA,
  payload: data,
});

export const getDataSuccess = (data) => ({
  type: GET_DAOPAGE_DATA_SUCCESS,
  payload: data,
});
