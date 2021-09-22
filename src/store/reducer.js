import { combineReducers } from "redux";
import user from "./reducer/userReducer";

const reducers = () => combineReducers({ user });

export default reducers;
