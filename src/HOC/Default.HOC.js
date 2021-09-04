
//HOC-> transforms one component into another
      //adding additional functionality to the existing components.


import React from "react";
import { Route } from "react-router-dom";

//LAYOUTS
import DefaultLayout from "../layouts/Default.layout" ;

const DefaultHOC = ({ component: Component , ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
    <Route
    {...rest}                                         //rest -renamed props but its props

    component = {(props) => (
      <DefaultLayout>
      <Component {...props} />
      </DefaultLayout>
    )

    }
    />
    </>
  );
};

export default DefaultHOC;
