import React, { useEffect } from 'react'
import '../TrendingMovies/trendingmovies.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieAction } from '../../redux/Actions/MovieAction';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';

const TrendingMovies = () => {


    const getMovie = useSelector((state) => state.movies.movies.message)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovieAction())
    }, [])

    console.log(getMovie);

    return (

        <>
            <section className='tendingmovie-section'>
                <div className="container">
                    <h2>Trending TV Series</h2>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={6}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            getMovie &&
                            getMovie.filter(x => x.categoryName === "TV Series").map(movie => (
                                <SwiperSlide key={movie.id}>
                                    <div className="movie-box">
                                        <div className="movie-poster">
                                            <img src={movie.posterImage} alt="" />
                                            <Link to="/">
                                                <button className='btn undefined'>
                                                    <PlayArrowIcon />
                                                </button></Link>
                                            <div className="black-poster">

                                            </div>
                                        </div>

                                        <div className="text-poster">
                                            <Link to="/" ><h3>{movie.name}</h3></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }


                    </Swiper>
                </div>
            </section>

            <section className='tendingmovie-section'>
                <div className="container">
                    <h2>Trending Movies</h2>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={6}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            getMovie &&
                            getMovie.filter(x => x.categoryName === "Movies").map(movie => (
                                <SwiperSlide key={movie.id}>
                                    <div className="movie-box">
                                        <div className="movie-poster">
                                            <img src={movie.posterImage} alt="" />
                                            <Link to="/">
                                                <button className='btn undefined'>
                                                    <PlayArrowIcon />
                                                </button></Link>
                                            <div className="black-poster">

                                            </div>
                                        </div>

                                        <div className="text-poster">
                                            <Link to="/" ><h3>{movie.name}</h3></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }


                    </Swiper>
                </div>
            </section>
        </>

    )
}

export default TrendingMovies