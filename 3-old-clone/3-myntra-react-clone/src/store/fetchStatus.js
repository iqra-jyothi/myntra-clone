import {createSlice} from "@reduxjs/toolkit";


const fetchStatus= createSlice({
  name: 'fetchstates',
  initialState:{fetchDone:false,
    currentlyfetching:false,
  },
  reducers: {
    markfetchDone: (state) => {
       state.fetchDone=true
    },
    markfetching: (state,action ) => {
         state.currentlyfetching=true
      },
      markfetchingfinished: (state,action ) => {
         state.currentlyfetching=false
      }
  }
});

export const fetchaction= fetchStatus.actions;

export default fetchStatus.reducer;
