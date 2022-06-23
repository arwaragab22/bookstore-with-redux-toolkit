import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const LOGIN = createSlice({
    name: "log",
    initialState: {
        islogin: false,
        loginname:""
    },
    reducers: {
        login: (state,action) => {
            state.islogin = action.payload.islogin;
            state.loginname=action.payload.loginname
            
        }
    },
});

// Action creators are generated for each case reducer function
export const {login } = LOGIN.actions;

export default LOGIN.reducer;
