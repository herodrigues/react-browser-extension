import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

export default createStore(rootReducer);
