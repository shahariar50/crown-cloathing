import { combineReducers } from "redux";
import user from "./reducer/userReducer";
import cart from "./reducer/cartReducer";
import directories from "./reducer/directoryReducer";
import shop from "./reducer/shopReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const reducers = combineReducers({ user, cart, directories, shop });

export default persistReducer(persistConfig, reducers);
