import React, { useState } from "react";
import BoxHeader from "../components/BoxHeader";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import FeaturedInsta from "../components/FeaturedInsta";
import InstaHeader from "../components/InstaHeader";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Sidebar />}
      <BoxHeader />
      <Featured />
      <Categories />
      <InstaHeader />
      <FeaturedInsta />
    </div>
  );
};

export default Home;
