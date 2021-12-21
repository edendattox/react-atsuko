import React, { useState } from "react";
import Navbar from "../components/Navbar";
import New from "../components/New";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Sidebar />}
      <New />
    </div>
  );
};

export default Home;
