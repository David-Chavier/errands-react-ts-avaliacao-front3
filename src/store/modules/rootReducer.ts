import { combineReducers } from '@reduxjs/toolkit';
import register from './registerSlice';
import login from './userLogged';

export default combineReducers({
  register,
  login
});
