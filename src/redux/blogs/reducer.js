import { GET_BLOGPAGE_DATA_SUCCESS } from "./constant";

const initialState = {
  blogPageData: {},
};
const blogDataReducer =
  ((state = initialState, action) => {
    switch (action.type) {
      case GET_BLOGPAGE_DATA_SUCCESS:
        state.blogPageData = action.payload;
        break;
      default:
    }
  },
  initialState);
export default blogDataReducer;
