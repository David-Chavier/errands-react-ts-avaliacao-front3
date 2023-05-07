import { createSlice } from '@reduxjs/toolkit';
import RegisterTypes from '../../types/RegisterTypes';

const requestLoginSlice = createSlice({
  name: 'login',
  initialState: {} as RegisterTypes,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.notes = action.payload.notes;
    },
    logout: state => {
      state.username = '';
      state.password = '';
      state.notes = [];
    },
    addNote: (state, action) => {
      state.notes?.push(action.payload);
    },
    editNote: (state, action) => {
      const { index, note } = action.payload;
      state.notes.splice(index, 1, note);
    },
    deleteNote: (state, action) => {
      state.notes.splice(action.payload, 1);
    }
  }
});

export const { login, logout, addNote, deleteNote, editNote } = requestLoginSlice.actions;
export default requestLoginSlice.reducer;
