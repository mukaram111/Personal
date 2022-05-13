import { GET_MARKETPLACEPAGE_DATA_SUCCESS } from "./constant";

const initialState = {
  homePageData: {},
};
const marketPlaceDataReducer =
  ((state = initialState, action) => {
    switch (action.type) {
      case GET_MARKETPLACEPAGE_DATA_SUCCESS:
        state.homePageData = action.payload;
        break;
      default:
    }
  },
  initialState);
export default marketPlaceDataReducer;
