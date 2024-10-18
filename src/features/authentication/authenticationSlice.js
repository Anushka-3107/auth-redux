
import { createSlice } from "@reduxjs/toolkit";

export const authentication = createSlice(
    {
        name:'auth',
        initialState:{
            isAuthenticated : false,
            user: null,
            loading: false,
            error : null,
        },

        reducers:{
            LOGIN_REQUEST: (state) => {
                state.loading = true;
                state.error = null;
            },

            LOGIN_SUCCESS : (state,action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            },

            LOGIN_FAILURE : (state,action) => {
                state.loading = false;
                state.error = action.payload;
            },

            LOGOUT : (state) => {
                state.isAuthenticated = false;
                state.error = null;
                state.user = null;
                state.loading = false;
            },

        }
    }
)


export const {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE, LOGOUT} = authentication.actions;

export default authentication.reducer;