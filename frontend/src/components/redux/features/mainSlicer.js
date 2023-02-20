import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loginPopup : false,
    loggedIn : false,
    logged_in_as : "",
}

export const mainSlicer = createSlice({
    name :'main',
    initialState,
    reducers : {
        toggleLoginPoppup : (state)=>{
            state.loginPopup == false ? state.loginPopup = true : state.loginPopup = false
        }
    }
});

export const {toggleLoginPoppup} = mainSlicer.actions;

export default mainSlicer.reducer;

