import React, { useEffect } from 'react'
import './headerslide.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieAction } from '../../redux/Actions/MovieAction';
import SwiperCore, { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';




const HeaderSlide = () => {

    const getMovie = useSelector((state) => state.movies.movies.message)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovieAction())
    }, [])

    SwiperCore.use([Autoplay]);



    return (

        <div>

            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}


            >
                {

                    getMovie &&
                    getMovie.map(movie => (
                        <SwiperSlide>
                            <section style={{ backgroundImage: `url(${movie.backgroundImage})` }} key={movie.id} className="headerSlide">
                                <div className="boxes">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-8">
                                                <div className="left-box">
                                                    <div className="text">
                                                        <h2 className="name">{movie.name}</h2>
                                                        <p className="description">{movie.description}</p>
                                                    </div>
                                                    <div className="buttons d-lfex align-items-center">
                                                        <Link to={'/detail/' + movie.id}>
                                                            <button className='btn undefined'>Watch now</button>
                                                        </Link>

                                                        <button className='btn btn-outline undefined'>Watch trailer</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="right-box">
                                                    <img className='poster-img' src={movie.posterImage} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="black"></div>
                            </section>
                        </SwiperSlide>
                    ))
                }

            </Swiper>








        </div>
    )
}

export default HeaderSlide