import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { getMovieReducer } from "./Reducers/MovieReducer";

 

const {default: thunk} = require("redux-thunk")


const reducer = combineReducers({
    movies: getMovieReducer
})  


const initialState ={

}

  
const middleware = [thunk]


const store = createStore(
    reducer,
    initialState,   


    applyMiddleware(...middleware)
)


export default store;