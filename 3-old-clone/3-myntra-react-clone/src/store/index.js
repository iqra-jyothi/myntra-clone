// import itemSlice from "./itemSlice";
// import {configureStore}from  "@reduxjs/toolkit"

// const myntrastore=configureStore({reducers:{
//     item:itemSlice.reducer
     
// }})

// export default myntrastore;


import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatus from "./fetchStatus";
import BagSlice from "./BagSlice";
import WishlistSlice from "./WishlistSlice";
import ProducReducer from "./ProducReducer";
const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    
    fetchstates: fetchStatus,
    bag: BagSlice.reducer,
    wish:WishlistSlice.reducer,
    itemss:ProducReducer,
  }
});

export default myntraStore;






