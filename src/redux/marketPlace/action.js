import {
  GET_MARKETPLACEPAGE_DATA,
  GET_MARKETPLACEPAGE_DATA_SUCCESS,
} from "./constant";

export const getData = (data) => ({
  type: GET_MARKETPLACEPAGE_DATA,
  payload: data,
});

export const getDataSuccess = (data) => ({
  type: GET_MARKETPLACEPAGE_DATA_SUCCESS,
  payload: data,
});
