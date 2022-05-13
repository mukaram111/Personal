import { GET_BUILDERPAGE_DATA_SUCCESS } from "./constant";

const initialState = {
  builderPageData: {},
};
const builderDataReducer =
  ((state = initialState, action) => {
    switch (action.type) {
      case GET_BUILDERPAGE_DATA_SUCCESS:
        state.builderPageData = action.payload;
        break;
      default:
    }
  },
  initialState);
export default builderDataReducer;
