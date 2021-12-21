import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Socks from "../components/Socks";

const Sock = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Sidebar />}
        <Socks />
      </div>
    </div>
  );
};

export default Sock;
