
import React from "react";
import Slider from "react-slick";

import {NextArrow, PrevArrow} from "./Arrows4.component";

const CrewCard = (props) => {
  return(
    <>
    <div className="w-full h-30 px-2">
    <img
     className= "w-full h-full rounded-full"
     src = {props.src}
     alt="Crew Image"
    />
    </div>
    </>
  );
};

const CrewCardSlider = () => {
  const CrewImage = [
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/stephen-lang-15008-24-03-2017-12-44-36.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/brendan-sexton-iii-2013621-09-07-2021-04-54-59.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/madelyn-grace-2013622-09-07-2021-04-50-04.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/stephen-lang-15008-24-03-2017-12-44-36.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/brendan-sexton-iii-2013621-09-07-2021-04-54-59.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/madelyn-grace-2013622-09-07-2021-04-50-04.jpg",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/interactive-games-collection-202012041129.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/art-and-crafts-collection-202007220710.png"
  ];

  const settings = {
    infinite:true,
    autoplay:false,
    slidesToShow:6,
    slidesToScroll:4,
    InitialSlide:0,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive:[
      {
        breakpoint: 1024,
        settings:{
          slidesToShow:6,
          slidesToScroll:3,
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow:4,
          slidesToScroll:2,
        }
      },
      {
        breakpoint: 400,
        settings:{
          slidesToShow:4,
          slidesToScroll:1,
        }
      }
    ]
  }

  return (
    <>
    <Slider {...settings}>
    {CrewImage.map((image) => (
      <CrewCard src = {image} />
    ))}
    </Slider>
    </>
  )
};

export default CrewCardSlider;
