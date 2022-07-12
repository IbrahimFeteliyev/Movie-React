import React, { useEffect, useState } from 'react'
import { getMovieAction } from '../../redux/Actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './serie.scss'

const Movies = () => {


    const getMovie = useSelector((state) => state.movies.movies.message)
    const dispatch = useDispatch()

    const [searchTerm, setSearchTerm] = useState("");
    const [visible, setVisible] = useState(1)

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 1)
    }
    useEffect(() => {
        dispatch(getMovieAction())
    }, [])

    return (
        <>
            <div className="movie-top">
                <h1>Movies</h1>
            </div>
            <div className='boxes'>
                <input className='input' type="text" placeholder='Enter keyword' onChange={(e) => {
                    setSearchTerm(e.target.value)
                }} />
                <div className="row">
                    {
                        getMovie &&
                        getMovie.filter(x => x.categoryName === "TvSerie").filter((movie) => {
                            if (searchTerm === "") {
                                return movie
                            }
                            else if (movie.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return movie
                            }
                        }).slice(0, visible).map((movie, key) => (
                            <div className='col-lg-2' key={movie.id}>
                                <div key={key} className="movie-box">
                                    <div className="movie-poster">
                                        <img src={movie.posterImage} alt="" />
                                            <button className='btn undefined'>
                                            <Link to={'/detail/' + movie.id}>
                                                    <PlayArrowIcon />
                                                </Link>
                                            </button>
                                        <div className="black-poster">

                                        </div>
                                    </div>

                                    <div className="text-poster">
                                        <Link to="/" ><h3>{movie.name}</h3></Link>
                                    </div>
                                </div>
                            </div>
                        ))



                    }

                </div>
                <div className="loadmore-button">
                    <button className='btn btn-outline small' onClick={showMoreItems}>Load More</button>
                </div>
            </div>
        </>

    )
}

export default Movies