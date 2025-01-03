// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./auth/authSlice";
// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   }
// });

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice"
// export default store;
const store = configureStore({
  reducer : {
    auth : authReducer,
  }
})


export default store;