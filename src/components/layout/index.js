import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-bg_primary text-text_primary font-primary relative min-h-screen flex flex-col">
      <Navbar />
      <div className="sm:p-20 px-5 py-20 flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;