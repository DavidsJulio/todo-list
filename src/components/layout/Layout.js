import React from "react";
import Footer from "./Footer";
import MainHeader from "./MainHeader";

function Layout(props) {
  return (
    <div>
      <MainHeader />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
