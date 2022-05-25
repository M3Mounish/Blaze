import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Info />
      <Newsletter />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
