import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/x-icon" href="./logo.png" />
        <title>Ana sehife</title>
      </Helmet>

      <h2>home page</h2>
    </div>
  );
};

export default Home;
