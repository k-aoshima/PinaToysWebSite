import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import eleLogo from'../images/elezooLogo.png';
import eyeLogo from '../images/eyelandLogo.png';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Autoplay, Swiper as RealSwiper } from 'swiper';
RealSwiper.use([Autoplay]);


const Home = () => {
  return (
    <div>
      <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
          <SwiperSlide><img src="http://placehold.jp/1470x400.png?text=1" alt=""/></SwiperSlide>
          <SwiperSlide><img src="http://placehold.jp/1470x400.png?text=2" alt=""/></SwiperSlide>
          <SwiperSlide><img src="http://placehold.jp/1470x400.png?text=3" alt=""/></SwiperSlide>
          <SwiperSlide><img src="http://placehold.jp/1470x400.png?text=4" alt=""/></SwiperSlide>
      </Swiper>
      <div className='elezoo-contents'>
        <img className='elezooLogo' src={eleLogo} alt='' />
        <Link to="ElezooHome" style={{textDecoration: 'none'}}>
          <Button variant="contained" 
            sx={{
              textTransform: 'none',
              background: "#606060", 
              color: "white", 
              ":hover" : { background: "#606060"},
              width: "150px",
              height: "25px"
            }}
          >
            Admission
          </Button>
        </Link>
      </div>
      <div className='eyeland-contents'>
        <img src={eyeLogo} alt='' />
        <Link to="EyelandHome" style={{textDecoration: 'none'}}>
          <Button variant="contained" 
            sx={{
              textTransform: 'none',
              background: "#606060", 
              color: "white", 
              ":hover" : { background: "#A4A4A4"},
              width: "150px",
              height: "25px"
            }}
          >
            Enter
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home