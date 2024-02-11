import { applyMiddleware, createStore } from "redux";
import bookStoreReducer from "./BookStore/bookStoreReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  bookStoreReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
