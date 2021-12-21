import React, { useState } from "react";
import ShopAllProduct from "../components/ShopAllProduct";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ShopAll = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Sidebar />}
      <ShopAllProduct />
    </div>
  );
};

export default ShopAll;
