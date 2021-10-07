import React from "react";
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
return(
<>
<div  className="bg-gray-100">
<div className="container mx-auto px-4">
   <div className="w-full lg:flex lg:flex-row-reverse">
      <div className="w-2/3">

      <h2 className="font-bold text-2xl pl-3 mb-4 p-4">Plays in Madurai</h2>
      <div className="flex flex-wrap">
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00315140-npkabxldtf-portrait.jpg"
               title="Dum Biryani - 15th Oct"
               subtitle="English ₹199"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00315140-npkabxldtf-portrait.jpg"
               title="Dum Biryani - 15th Oct"
               subtitle="English ₹199"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00315140-npkabxldtf-portrait.jpg"
               title="Dum Biryani - 15th Oct"
               subtitle="English ₹199"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00315140-npkabxldtf-portrait.jpg"
               title="Dum Biryani - 15th Oct"
               subtitle="English ₹199"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00315140-npkabxldtf-portrait.jpg"
               title="Dum Biryani - 15th Oct"
               subtitle="English ₹199"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00315140-npkabxldtf-portrait.jpg"
               title="Dum Biryani - 15th Oct"
               subtitle="English ₹199"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00315140-npkabxldtf-portrait.jpg"
               title="Dum Biryani - 15th Oct"
               subtitle="English ₹199"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00315140-npkabxldtf-portrait.jpg"
               title="Dum Biryani - 15th Oct"
               subtitle="English ₹199"
               />
         </div>
      </div>
      </div>


      <div className="lg:w-1/4 p-4">
      <h2 className="font-bold text-2xl mb-4">Filters</h2>
      <div>
      <PlaysFilter title="Date" tags= {["Today", "Tomorrow", "This Weekend"]}/>
      <PlaysFilter title="Language" tags= {["English", "Tamil", "Hindi"]}/>
      <PlaysFilter title="Categories" tags= {["Theatre"]}/>
      <PlaysFilter title="Genres" tags= {["Comedy", "Drame"]}/>
      <PlaysFilter title="More Filters" tags= {["Online Streaming"]}/>
      <PlaysFilter title="Price" tags= {["Free", "0-500", "501-2000", "Above 2000"]}/>
        <div className="border-2 border-red-500 rounded-sm w-5/6 p-2 pl-20 text-red-500">
          Browse by venues
        </div>
      </div>

      </div>
   </div>
</div>
</div>
</>
);
};
export default Plays;
