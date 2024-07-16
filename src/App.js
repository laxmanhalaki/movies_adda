
import './App.css';
import { getHindi } from './API/ApiHandler';
import { useContext, useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import PopularSlider from './components/PopularSlider';
import { useDispatch, useSelector } from 'react-redux';
import { getHindiMovies,getKannadaMovies,getTamilMovies,getTelaguMovies } from './Redux/ThunkCalls/MovieThunk';
import { setHomeItem } from './Redux/MovieSlice';
import categoryContext from './utils/categoryContext';
import { Route, Routes } from 'react-router-dom';
import MovieDetail from './Pages/MovieDetail';
import Explore from './Pages/Explore';
import Footer from './components/Footer';

function App() {
  const dispatch=useDispatch();
 
  const [category,setCategory]=useState('movie');
useEffect(()=>{

  dispatch(getHindiMovies(category));
  dispatch(getKannadaMovies(category));
  dispatch(getTelaguMovies(category));
  dispatch(getTamilMovies(category));
},[category])

  return (
    <categoryContext.Provider value={{category,setCategory}}>
      <div className="App mt-12" style={{flex:1}}>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id/:language' element={<MovieDetail/>}/>
        <Route path='/explore/:language' element={<Explore/>}/>

      </Routes>
      <Footer />
      </div>
    {/* <div className="App" style={{height:'100vh',width:'100%',position:'relative'}}> */}
      
    </categoryContext.Provider>
  );
}

export default App;
