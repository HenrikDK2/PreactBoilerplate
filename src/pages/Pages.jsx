import Index from "./index";
import Contact from "./contact";
import Gallery from "./gallery";
import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Themes from "../components/Themes";
import { Route } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <Themes />
      <Header></Header>
      <Nav />
      <main>
        <Route exact path="/" component={Index} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/gallery" component={Gallery} />
      </main>
    </>
  );
};

export default Pages;
