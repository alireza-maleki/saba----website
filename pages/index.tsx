import React, { Fragment } from "react";
import "leaflet/dist/leaflet.css";
import Head from "next/head";
import Home from "../components/home/Home";

const index = () => {

  return (
    <Fragment>

      <Head>
        <title>SabaBar</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
 
      <Home />
    </Fragment>
  );
  
};

export default index;
