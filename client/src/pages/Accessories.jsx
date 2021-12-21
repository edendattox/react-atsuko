import React from "react";
import { useState } from "react";
import AccessoriesItem from "../components/AccessoriesItem";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Accessories = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Sidebar />}
        <AccessoriesItem />
      </div>
    </div>
  );
};

export default Accessories;
