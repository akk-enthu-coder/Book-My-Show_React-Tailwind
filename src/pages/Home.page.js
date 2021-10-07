import axios from "axios";
import React, {useState, useEffect} from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component.js";

import PosterSlider from "../components/PosterSlider/PosterSlider.component";

import TempPosters from "../config/TempPosters.config";

const HomePage = () => {


const [popularMovies, setPopularMovies] = useState([]);

useEffect(() => {
  const requestPopularMovies = async () => {
    const getPopularMovies = await axios.get("/movie/popular");
    setPopularMovies(getPopularMovies.data.results);
  };
  requestPopularMovies();
},[]);

 console.log({popularMovies});


//online streaming

 const [popularMovies2, setPopularMovies2] = useState([]);

 useEffect(() => {
   const requestPopularMovies2 = async () => {
     const getPopularMovies2 = await axios.get("/movie/top_rated");
     setPopularMovies2(getPopularMovies2.data.results);
   };
   requestPopularMovies2();
 },[]);

  console.log({popularMovies2});


//Outdoorevents
  const [popularMovies3, setPopularMovies3] = useState([]);

  useEffect(() => {
    const requestPopularMovies3 = async () => {
      const getPopularMovies3 = await axios.get("/movie/upcoming");
      setPopularMovies3(getPopularMovies3.data.results);
    };
    requestPopularMovies3();
  },[]);

   console.log({popularMovies3});




  return (
    <>
    <div className="flex flex-col gap-10">
    <div className="container mx-auto px-4">
    <h1 className="text-2xl font-bold text-gray-800">
    The Best of Entertainment
    </h1>
    <EntertainmentCardSlider />
    </div>

    <div className="bg-navCol-200 py-16">

    <div className="container mx-auto px-4">
    <div className="flex">
      <img src = "https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
      alt="RuPay"
      className="w-full h-full" />
    </div>
      <PosterSlider images = {popularMovies} title = "Premiers" subtitle="Brand new release every Friday" isDark/>
    </div>
    </div>
    </div>

    <div className="container mx-auto px-4">
    <PosterSlider
    images= {popularMovies2}
    title="Online Streaming Events"
    isDark ={false}
    />
    </div>

    <div className="container mx-auto px-4">
    <PosterSlider
    images= {popularMovies3}
    title="Upcoming Movies"
    isDark ={false}
    />
    </div>

    </>
  );
};

export default HomePage;
