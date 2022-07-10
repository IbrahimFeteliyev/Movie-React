import { GET_MOVIES } from "../Constants/MovieConstant";

const initialState = {
    movies: {}
}

export const getMovieReducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_MOVIES:
            return{
                ...state,
                movies: action.payload
            }
    
        default:
            return state;
    }
}