import React, { useState } from "react";
import DetailPage from "../components/DetailPage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Detail = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Sidebar />}
      <DetailPage />
    </div>
  );
};

export default Detail;
