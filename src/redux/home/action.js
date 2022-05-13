import {
    GET_HOMEPAGE_DATA,
    GET_HOMEPAGE_DATA_SUCCESS
} from './constant'

export const getData = (data) =>({
type:GET_HOMEPAGE_DATA,
payload:data
}) 

export const getDataSuccess =(data) =>({
    type:GET_HOMEPAGE_DATA_SUCCESS,
    payload:data
})