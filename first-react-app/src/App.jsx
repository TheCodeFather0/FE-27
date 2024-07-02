import "./app.css";
import React from "react";
import WebRoutes from "./routes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <WebRoutes />
      </div>
      <Footer />
    </>
  );
};

export default App;
