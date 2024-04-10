import { createStore } from "redux";
import postReducer from "./features/post/postSlice";

export const store = createStore(postReducer)