
//HOC-> transforms one component into another
      //adding additional functionality to the existing components.


import React from "react";
import { Route } from "react-router-dom";

//LAYOUTS
import MovieLayout from "../layouts/Movie.layout" ;

const MovieHOC = ({ component: Component , ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
    <Route
    {...rest}                                         //rest -renamed props but its props

    component = {(props) => (
      <MovieLayout>
      <Component {...props} />
      </MovieLayout>
    )

    }
    />
    </>
  );
};

export default MovieHOC;
