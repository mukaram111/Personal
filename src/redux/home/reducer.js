import {
GET_HOMEPAGE_DATA_SUCCESS
} from './constant';

const initialState={
    homePageData:{},
}
const homeDataReducer=((state= initialState, action)=>{
    switch(action.type){
        case GET_HOMEPAGE_DATA_SUCCESS:
            state.homePageData=action.payload
            break
            default:
    }

}, initialState)
export default homeDataReducer;