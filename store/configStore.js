import {combineReducers} from 'redux'
import UserReducer from './reducer/UserReducer'
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers(
    {
        UserReducer
    })

const store = configureStore({reducer: rootReducer})
export default store;
