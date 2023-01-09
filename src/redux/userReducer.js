import { createReducer } from "@reduxjs/toolkit";

const getLocalStorageData = (key) => {
    const userid = localStorage.getItem('userId');
    const password = localStorage.getItem('password');
    if (!userid || !password) return key==='isAuthenticated' ? false : '';

    return key==='userid' ? userid : key==="password" ? password : true ;
}

const initialState = {
    isAuthenticated: getLocalStorageData('isAuthenticated'),
    userid: getLocalStorageData('userid'),
    password: getLocalStorageData('password'),
}

export const userReducer = createReducer(initialState, {

    setUserToLocalStorage: (state, action) => {
        
        state.isAuthenticated = true;
        state.userid = action.payload.userid;
        state.password = action.payload.password;
        localStorage.setItem('userId', JSON.stringify(state.userid));
        localStorage.setItem('password', JSON.stringify(state.password))

    }
})