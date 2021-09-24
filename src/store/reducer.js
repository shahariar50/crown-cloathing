import { combineReducers } from "redux";
import user from "./reducer/userReducer";
import cart from "./reducer/cartReducer";

const reducers = () => combineReducers({ user, cart });

export default reducers;
