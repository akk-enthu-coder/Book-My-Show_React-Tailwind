import React from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";



export const NextArrow = (props) => {
  //const {className , style, onClick} = props; we require this props so instead of mentioning we can spread it (done below)
  return (
    <>
    <div
    className = ""
    style = {{...props.style, fontSize:"60px", display:"block", opacity: "0.5", top: "160px" , right:"0px" ,height:"40px", width:"40px" ,borderRadius:"4px", position:"absolute"}}   //spread because many styles are there
    onClick = {props.onClick}
     >
     <span><IoIosArrowDroprightCircle/></span>
     </div>
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
    <div
    className = ""
    style = {{...props.style, fontSize:"60px", display:"block", opacity: "0.7", top: "160px" , left:"-2px" ,height:"40px", width:"40px" ,borderRadius:"4px", position:"absolute", zIndex:"15"}}
    onClick = {props.onClick}
     >
     <span><IoIosArrowDropleftCircle/></span>
     </div>
    </>
  );
};
