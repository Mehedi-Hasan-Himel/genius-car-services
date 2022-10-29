import React from "react";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </div>
  );
};

export default Home;
