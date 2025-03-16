import {createSlice} from "@reduxjs/toolkit";
// import { defaultitem } from "../data/items";

const BagSlice = createSlice({
  name: 'bag',
  initialState:[] ,
  reducers: {
    addToBag: (state, action) => {
     state.push(action.payload)
    },
    removeFromBag:(state,action)=>{
       return state.filter((itemId)=>{
            itemId!==action.payload
        })
    }
  }
});

export const BagActions = BagSlice.actions;

export default BagSlice;
