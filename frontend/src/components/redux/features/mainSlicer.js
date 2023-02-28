import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loginPopup : false,
    loggedIn : false,
    logged_in_as : "",
    burgerMenuIsOpen : false,
}

export const mainSlicer = createSlice({
    name :'main',
    initialState,
    reducers : {
        toggleLoginPoppup : (state,actions)=>{
            state.loginPopup = actions.payload
        }
        ,
        setBurgerMenuIsOpen : (state,actions) =>{
            state.burgerMenuIsOpen = actions.payload
        }
    }
});

export const {toggleLoginPoppup,setBurgerMenuIsOpen} = mainSlicer.actions;

export default mainSlicer.reducer;

