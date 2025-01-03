// import { createSlice } from "@reduxjs/toolkit";



// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     isLoading: false,
//     isSuccess: false,
//     isError: false,
//     message: "",
//   },
//   reducers: {},
//   extraReducers: (builder) => {},
// });

// export default authSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem('user'))

const authSlice = createSlice({
  name : 'auth',
  initialState : {
    user : userExist || null,
    isLoding : false,
    isSuccess : false,
    isError : false,
    message : "",
  },
  reducers : {},
  extraReducers : builder => {

    builder
    .addCase(registerUser.pending,(state , action) => {
      state.isLoding = true
      state.isSuccess = false
      state.isError = false
    })
    .addCase(registerUser.fulfilled,(state , action) => {
      state.isLoding = false
      state.isSuccess = true
      state.isError = false
      state.user = action.payload
    })
    .addCase(registerUser.rejected,(state , action) => {
      state.isLoding = false
      state.isSuccess = false
      state.isError = true
      state.message = action.payload
    })
   
    
    .addCase(logOutUser.fulfilled,(state , action) => {
      state.isLoding = false
      state.isSuccess = false
      state.isError = false
      state.message = ""
      state.user = null
    })
    
  }
})

export default authSlice.reducer;


export const registerUser = createAsyncThunk(
  "AUTH/REGISTER" , async(FormData , thunkAPI) =>{
 try {
  return await authService.register(FormData)
 } catch (error) {
  const message = error.response.data.message
 return thunkAPI.rejectWithValue(message)
 }
});


export const loginUser = createAsyncThunk(
  "AUTH/LOGIN" , async(FormData , thunkAPI) =>{
 try {
  return await authService.login(FormData)
 } catch (error) {
  const message = error.response.data.message
 return thunkAPI.rejectWithValue(message)
 }
});


export const logOutUser = createAsyncThunk("AUTH/LOGOUT",async() => {
  localStorage.removeItem("user");
})