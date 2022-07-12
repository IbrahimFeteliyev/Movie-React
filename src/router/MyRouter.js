import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Movie from '../pages/Movie'
import Series from '../pages/Series'
import GoToTop from '../GoToTop'


const MyRouter = () => {
  return (
    <div>
        <GoToTop />        
        <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/Movies' element={<Movie/>}/> 
            <Route path='/TvSeries' element={<Series/>}/> 
            <Route path='/detail/:id' element={<Detail/>}/>   
        </Routes>
    </div>
  )
}

export default MyRouter