import { createStore, combineReducers } from "redux";
import postReducer from "./features/post/postSlice";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  post: postReducer,
  form: formReducer,
});

export const store = createStore(rootReducer);