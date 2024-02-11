import {  createStore } from "redux";
import bookStoreReducer from "./BookStore/bookStoreReducer";

const store = createStore(bookStoreReducer)


export default store