import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";

import CrewCardSlider from "../components/Crew/Crew.component";
import {BiCameraMovie} from "react-icons/bi";

const launchRazorPay = () => {
  let options = {
    key:"rzp_test_GdyP0P63lilcbx",
    amount: 500*100,
    currency: "INR",
    name: "Book My show Clone",
    description: "Movie Purchase on Rental",
    image:"https://i.iib.co/zPBYW3H.imgbin-bookmyshow-office-android-ticket-png.png",
    handler:() => {
      alert("Payment Done")
    },
    theme: {color:"#c4242d"}
  };
  let rzp = new window.Razorpay(options);
  rzp.open();
};

const Movie = () => {
return (
<>
<MovieHero/>
<div className="my-12 container mx-auto lg:w-1/2 px-4 lg:ml-64">
   <div className="flex flex-col items-start gap-3">
      <h2 className="font-bold text-2xl">About the Movie</h2>
      <p>The sequel is set in the years following the initial deadly home invasion, where Norman Nordstrom lives in quiet solace until his past sins catch up to him.</p>
   </div>
   <div className="my-8">
      <hr/>
   </div>
   <div className="flex flex-col items-start gap-3">
      <h1 className="font-bold text-2xl">Applicable offers</h1>
      <div className="flex items-start gap-2 bg-yellow-100 border-yellow-700 border-dashed border-2 rounded-md p-3 w-95">
         <div className="w-8 h-8">
            <BiCameraMovie className="w-full h-full"/>
         </div>
         <div className="flex flex-col items-start">
            <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
            <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
         </div>
      </div>
   </div>
   <div className="my-8">
      <hr/>
   </div>
   <div className="font-bold text-2xl">
   Cast
   <div className="pt-5">
   <CrewCardSlider/>
   </div>

   <div className="my-8">
      <hr/>
   </div>

   </div>
   <div className="font-bold text-2xl">
   Crew
   <div className="pt-5">
   <CrewCardSlider/>
   </div>

   </div>

   <button onClick = {launchRazorPay} class="mt-8 px-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  Book tickets
</button>

</div>
</>
);
};
export default Movie;
