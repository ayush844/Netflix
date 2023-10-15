import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios';

import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const apiKey = "8e438b98d993177dd1e1e3b16946fe2e";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original" 
const popular = "popular";
const nowPlaying = "now_playing";
const topRated = "top_rated";
const upcoming = "upcoming";




const Card = ({cover}) => (
    <img className='card' src={cover} alt="cover" />
)


const Row = ({title, arr=[]}) => (
    <div className='row'>
        <h2>{title}</h2>

        <div>
            {
                arr.map((item, index)=>(

                    <Card key={index} cover={`${imgUrl}${item.poster_path}`}/>

                ))
            }

        </div>

    </div>
)




const Home = () => {
//`${url}/movie/${popular}?api_key=${apiKey}&language=en-US&page=1`

    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [playingMovies, setPlayingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(()=>{

        const fetchPopular = async() => {
           const {data} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}&language=en-US&page=1`);
            setPopularMovies(data.results);
        }

        const fetchUpcoming = async() => {
           const {data} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}&language=en-US&page=1`);
            setUpcomingMovies(data.results);
        }

        const fetchNowPlaying = async() => {
           const {data} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}&language=en-US&page=1`);
            setPlayingMovies(data.results);
        }

        const fetchTopRated = async() => {
           const {data} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}&language=en-US&page=1`);
            setTopRatedMovies(data.results);
        }


        fetchPopular();
        fetchUpcoming();
        fetchNowPlaying();
        fetchTopRated();

        
        
        

    }, [])
    
//`url(${`${imgUrl}/${upcomingMovies[0].poster_path}`})`

  return (
    <section className="home">

        <div className="banner" style={{
            backgroundImage: popularMovies[6]
                        ? `url(${`${imgUrl}/${popularMovies[6].poster_path}`})`
                        : "rgb(16, 16, 16)",
        }}>

            {popularMovies[6] && <h1>{popularMovies[6].original_title}</h1>}
            {popularMovies[6] && <p>{popularMovies[6].overview}</p>}

            <div>
                <button> <PlayArrowOutlinedIcon style={{backgroundColor: 'black'}}/>  PLAY</button>
                <button>MY LIST <FormatListBulletedIcon /></button>
            </div>

        </div>

        <Row title={"Popular on Netfix"} arr={popularMovies}/>

        <Row title={"Upcoming Movies"} arr={upcomingMovies}/>

        <Row title={"Now Playing"}  arr={playingMovies}/>

        <Row title={"Top Rated"} arr={topRatedMovies}/>


        

    </section>
  )
}

export default Home
