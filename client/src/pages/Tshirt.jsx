import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Tshirts from "../components/Tshirts";

const Tshirt = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Sidebar />}
        <Tshirts />
      </div>
    </div>
  );
};

export default Tshirt;
