import React, { useEffect, useState } from 'react'
import Header from '../components/comman/Header'
import { Box, Typography, styled } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { categoryMovies } from '../services/api';
import { useLocation } from 'react-router-dom';
import { POPULAR_API_URL, TOPRATED_API_URL, UPCOMING_API_URL } from '../constants/constant';

const responsive = {

  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
  }
};
const StyledBanner = styled('img')({
  height:450,
  width:'100%'
})

function CategoryMovies() {
  const [movies, setMovies] = useState([]);
  const {search} = useLocation();
  useEffect(()=>{
    const getData = async ()=>{
      let response = await categoryMovies();
      setMovies(response.results);
    }
    let API_URL = '';

        if (search.includes('popular')) {
            API_URL = POPULAR_API_URL;
        } else if (search.includes('upcoming')) {
            API_URL = UPCOMING_API_URL;
        } else if (search.includes('toprated')) {
            API_URL = TOPRATED_API_URL;
        }
        getData(API_URL);
  },[search])
  return (
    <>
    <Header/>
    <Box>
    <Carousel responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            slidesToSlide={1}>
            {
                movies.map((movie) => {
                    return (
                        <>
                             <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="banner" />;
                                <Typography>{movie.original_title}</Typography>
                        </>
                    )



                        ;
                }
                )

            }

        </Carousel>
    </Box>
    </>
  )
}

export default CategoryMovies