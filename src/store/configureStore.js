// Import createStore from 'redux' library, not 'react-redux'
import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk"; // Middleware for handling async actions
import CONTACTReducer from "../reducers/contactReducer";
const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
const initialState = {
  contacts: savedContacts,
};
const store = createStore(CONTACTReducer, applyMiddleware(thunk));

export default store;
