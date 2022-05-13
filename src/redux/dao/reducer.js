import { GET_DAOPAGE_DATA_SUCCESS } from "./constant";

const initialState = {
  daoPageData: {},
};
const daoDataReducer =
  ((state = initialState, action) => {
    switch (action.type) {
      case GET_DAOPAGE_DATA_SUCCESS:
        state.daoPageData = action.payload;
        break;
      default:
    }
  },
  initialState);
export default daoDataReducer;
