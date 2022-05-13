import { GET_EVENTPAGE_DATA_SUCCESS } from "./constant";

const initialState = {
  eventPageData: {},
};
const eventDataReducer =
  ((state = initialState, action) => {
    switch (action.type) {
      case GET_EVENTPAGE_DATA_SUCCESS:
        state.eventPageData = action.payload;
        break;
      default:
    }
  },
  initialState);
export default eventDataReducer;
