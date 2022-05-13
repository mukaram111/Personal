import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import homeDataReducer from "./redux/home/reducer";
import marketPlaceDataReducer from "./redux/marketPlace/reducer";
import blogDataReducer from "./redux/blogs/reducer";
import builderDataReducer from "./redux/builder/reducer";
import daoDataReducer from "./redux/dao/reducer";
import eventDataReducer from "./redux/events/reducer";

const reducer = combineReducers({
  homeData: homeDataReducer,
  marketPalceData: marketPlaceDataReducer,
  blogData: blogDataReducer,
  builderData: builderDataReducer,
  doaData: daoDataReducer,
  eventData: eventDataReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
