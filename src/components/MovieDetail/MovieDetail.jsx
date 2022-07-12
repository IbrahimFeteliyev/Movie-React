import React, { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../api/Config'
import './moviedetail.scss'



function ProductDetail() {

  const { id } = useParams()
  const [movie, setMovie] = useState({})


  useEffect(() => {
    fetch(BASE_URL + "movie/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => setMovie(data.message));
  }, [id]);


  // React.useMemo, React.useCallback, React.useEffect, React.useReducer, React.useRef, React.useContext

  // console.log(movie.movieVideos);
  // const newconcat = movie.movieVideos.concat(movie.movieNames)
  // console.log(newconcat)


  const moviesJSX = useMemo(() => {
    if (Object.keys(movie).length) {
      return movie.videoUrl.map((item, index) => (
        <div key={index} className="movie-content my-5">
          <h4 className='movie-name'>{movie.videoName[index]}</h4>
          <iframe width="100%" height="818" src={item} title={movie.videoName[index]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      ))
    } else {
      return null
    }
  }, [movie])

  const movieCastJSX = useMemo(() => {
    if (Object.keys(movie).length) {
      return movie.castPhotos.map((item, index) => (
        <div className="col-lg-2">
          <div key={index} className="cast">
            <img src={item} alt="" />
            <p>{movie.castNames[index]}</p>
          </div>
        </div>
      ))
    } else {
      return null
    }
  }, [movie])

  console.log(movie.genreNames);

  return (
    <>
      <section style={{ backgroundImage: `url(${movie.backgroundImage})` }} className="detail-section">
        <div className="boxes">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="right-box">
                  <img className='poster-img' src={movie.posterImage} alt="" />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="left-box">
                  <div className="text">
                    <h2 className="name">{movie.name}</h2>
                    <div className="genres">
                      {
                        movie.genreNames &&
                        movie.genreNames.map((item, key) => (
                          <span key={key} className="genres-item">{item}</span>
                        ))
                      }


                    </div>
                    <p className="description">{movie.description}</p>


                  </div>
                  <h3>Casts</h3>

                  <div className="casts">
                    <div className="d-flex">

                      {movieCastJSX}

                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="black"></div>
      </section>
      <section className="video-section">
        <div className="container">
          {moviesJSX}
        </div>
      </section>
    </>
  )
}

export default ProductDetail

