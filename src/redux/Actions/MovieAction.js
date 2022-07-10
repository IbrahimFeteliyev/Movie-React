import { BASE_URL } from "../../api/Config"
import { GET_MOVIES } from "../Constants/MovieConstant"



export const getMovieAction = () => async (dispatch, getState) => {
    if (!Object.keys(getState().movies.movies).length) {
      const data = await (await fetch(`${BASE_URL}Movie/movielist`)).json()
        dispatch({
            type: GET_MOVIES,
           payload: data
       })
}
}

