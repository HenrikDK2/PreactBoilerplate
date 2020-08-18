import Index from "./index";
import Contact from "./contact";
import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import { Route } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <Header></Header>
      <Nav />
      <main>
        <Route exact path="/" component={Index} />
        <Route exact path="/contact" component={Contact} />
      </main>
    </>
  );
};

export default Pages;
