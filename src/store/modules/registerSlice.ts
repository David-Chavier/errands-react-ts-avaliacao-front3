import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import RegisterTypes from '../../types/RegisterTypes';

const adapter = createEntityAdapter<RegisterTypes>({
  selectId: item => item.username
});

export const { selectAll, selectById } = adapter.getSelectors((state: any) => state.register);

const registerSlice = createSlice({
  name: 'register',
  initialState: adapter.getInitialState(),
  reducers: {
    addRegister: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne
  }
});

export const { addRegister, addMany, updateOne } = registerSlice.actions;
export default registerSlice.reducer;
