import { GET_BUILDERPAGE_DATA, GET_BUILDERPAGE_DATA_SUCCESS } from "./constant";

export const getData = (data) => ({
  type: GET_BUILDERPAGE_DATA,
  payload: data,
});

export const getDataSuccess = (data) => ({
  type: GET_BUILDERPAGE_DATA_SUCCESS,
  payload: data,
});
