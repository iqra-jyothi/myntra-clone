import {createSlice} from "@reduxjs/toolkit";
// import { defaultitem } from "../data/items";

const itemsSlice = createSlice({
  name: 'items',
  initialState:[] ,
  reducers: {
    addInitialItems: (state, action) => {
      // console.log("reducer",state,action)
      return action.payload;
      // return state
    }
  }
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;

