import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
//import secondSliceReducer from './secondFileThatDoesn'tActuallyExist'

//Configure the Redux store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    //secondSlice: secondSliceReducer
  },
});

export default store;
