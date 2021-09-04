import React from "react";
import HeroSlider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

//component
import {NextArrow, PrevArrow} from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {                                //refer documentation

  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "300px",
    infinite: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  }
  const settings = {
    arrows:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

const images = [
  "https://images.unsplash.com/photo-1537988489137-33d67a16f3ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHRlc2xhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549822701-09dcb3dd5ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRlc2xhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1554744512-5a8ef212982d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHRlc2xhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1621871160449-b6f32e4f812e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
  "https://images.unsplash.com/photo-1619845146106-38abf07e9c99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHx0ZXNsYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
]

  return(
    <>
  <div className="lg:hidden">
  <HeroSlider  {...settings}>
  {
    images.map((image) => (
      <div className="w-full h-64 md:h-80 py-3">
      <img src ={image} alt="testing" className="w-full h-full rounded-md"/>
      </div>
    ))
  }
  </HeroSlider>
  </div>


  <div className="hidden lg:block">
  <HeroSlider  {...settingsLg}>
  {
    images.map((image) => (
      <div className="w-full h-96 px-2 py-3">
      <img src ={image} alt="testing" className="w-full h-full rounded-md"/>
      </div>
    ))
  }
  </HeroSlider>
  </div>

    </>
  );
};


export default HeroCarousal;
