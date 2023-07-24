import React, { useState } from 'react'
import "../styles/home.scss"
import axios from 'axios'
import {useEffect} from "react"
import { AiOutlinePlus } from "react-icons/ai"

const apikey ="135540ec9efc19686ca4541cd2364d02";
const apiUrl = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";
const Card =({img}) =>{
    return(
    <img className='card' src={img} alt="cover"/>)
}

const Row = ({title , a=[]}) =>{
    return(
        <div className='row'>
            <h2>{title}</h2>
            <div>
            {a.map((i,index)=>(<Card key={index} img={`${imgUrl}/${i.poster_path}`}/>))}
            </div>
        </div>
    );
}

const Home = () => {

    const [upcomingMovies,setUpcomingMovies] =useState([]);
    const [nowplayingMovies,setNowplayingMovies] =useState([]);
    const [popularMovies,setPopularMovies] =useState([]);
    const [topratedMovies,setTopratedMovies] =useState([]);
    

    useEffect(()=>{
        const fetchupcoming = async()=>{
            const {data :{results}}=await axios.get((`${apiUrl}/movie/${upcoming}?api_key=${apikey}&page=5`));
            setUpcomingMovies(results);
            
        };
        const fetchupNowPlaying = async()=>{
            const {data :{results}}=await axios.get((`${apiUrl}/movie/${nowPlaying}?api_key=${apikey}`));
            setNowplayingMovies(results);
            
        };
        const fetchPopular = async()=>{
            const {data :{results}}=await axios.get((`${apiUrl}/movie/${popular}?api_key=${apikey}`));
            setPopularMovies(results);
            
        };
        const fetchTopRated = async()=>{
            const {data :{results}}=await axios.get((`${apiUrl}/movie/${topRated}?api_key=${apikey}`));
            setTopratedMovies(results);
            
        };
        fetchupcoming();
        fetchupNowPlaying();
        fetchPopular();
        fetchTopRated();
    },[])

  return (
    <section className='Home'>
        <div
            className="banner"
                style={{
                    backgroundImage: popularMovies[0]
                        ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`
                        : "rgb(16, 16, 16)",
                }}
            >
                {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
                {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

                <div className='buttons'>
                    <button> Play  </button>
                    <button>My List <AiOutlinePlus /> </button>
                </div>            
        </div>
        <Row title={"Upcoming Movies"} a={upcomingMovies}/>
        <Row title={"Now Playing"} a={nowplayingMovies}/>
        <Row title={"Popular on Netflix"} a={popularMovies}/>
        <Row title={"TopRated"} a={topratedMovies}/>
    </section>
  )
}

export default Home