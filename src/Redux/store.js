import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { photoPageReducer } from "./photoPageReducer";
import { galleryReducer } from "./galleryReducer";
import { loadingReducer } from "./loadingReducer";

let reducers = combineReducers({
  gallery: galleryReducer,
  photo: photoPageReducer,
  isLoading: loadingReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
