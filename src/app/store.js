import { configureStore } from "@reduxjs/toolkit";
import authReducer  from "../features/authentication/authenticationSlice";

export default configureStore({
    reducer:{
        auth : authReducer,
    }
})