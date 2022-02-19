import * as React from "react";
import { Header } from "./";
import Copyright from "./Copyright";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Copyright />
    </>
  );
};

export default Layout;
