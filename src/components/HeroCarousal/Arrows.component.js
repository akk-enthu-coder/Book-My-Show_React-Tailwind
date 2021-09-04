import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export const NextArrow = (props) => {
  //const {className , style, onClick} = props; we require this props so instead of mentioning we can spread it (done below)
  return (
    <>
    <div
    className = ""
    style = {{...props.style, fontSize:"40px", display:"block", backgroundColor: "gray", opacity: "0.7", top: "160px" , right:"0px" ,height:"40px", width:"40px" ,borderRadius:"4px", position:"absolute"}}   //spread because many styles are there
    onClick = {props.onClick}
     >
     <span><IoIosArrowForward/></span>
     </div>
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
    <div
    className = ""
    style = {{...props.style, fontSize:"40px", display:"block", backgroundColor: "gray", opacity: "0.7", top: "160px" , left:"-2px" ,height:"40px", width:"40px" ,borderRadius:"4px", position:"absolute", zIndex:"15"}}
    onClick = {props.onClick}
     >
     <span><IoIosArrowBack/></span>
     </div>
    </>
  );
};
