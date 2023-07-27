import React, { useEffect, useState } from 'react'
import Header from '../components/comman/Header'
import { categoryMovies } from '../services/api';

import { Box, styled } from '@mui/material';
import Banner from '../components/Banner';
import UpNext from '../components/UpNext';
import Slide from '../components/Slide';
import { NOWPLAYING_API_URL } from '../constants/constant';

const Wrapper = styled(Box)`
display:flex;
padding:20px 0;

`
const Component = styled(Box)`
padding:0 115px;


`

function Home() {
    const [movies, setMovies] = useState([]);//hum array lenge kyoki data a=hame array me milega
    
    useEffect(()=>{
        const getData = async()=>{
            let resp = await categoryMovies(NOWPLAYING_API_URL);
            setMovies(resp.results)
        }
        getData();
    },[])
  return (
    <>
    <Header/>
    <Component>
    <Wrapper>
        <Banner movies={movies}/>
        <UpNext movies={movies}/>

    </Wrapper>
    <Slide movies={movies}/>
    <Slide movies={movies}/>
    <Slide movies={movies}/>
    <Slide movies={movies}/>
    <Slide movies={movies}/>
    <Slide movies={movies}/>
    <Slide movies={movies}/>
    <Slide movies={movies}/>
    </Component>
    </>
  )
}

export default Home