import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from './currentUser'
import questionsReducer from "./question";
import usersreducer from "./users";



export default combineReducers({
    authReducer, 
    currentUserReducer, 
    questionsReducer,
    usersreducer,
 
  });
