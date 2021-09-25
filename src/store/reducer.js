import { combineReducers } from "redux";
import user from "./reducer/userReducer";
import cart from "./reducer/cartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const reducers = combineReducers({ user, cart });

export default persistReducer(persistConfig, reducers);
