


import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
  name: "wish",
  initialState: [],
  reducers: {
    addTowhish: (state, action) => {
      state.push(action.payload);
    },
    removeFromwhish: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload); // Ensure return
    },
  },
});

export const wishActions = WishlistSlice.actions;
export default WishlistSlice;
