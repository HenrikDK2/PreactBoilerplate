import Index from "./index";
import Contact from "./contact";
import React from "react";
import { Route } from "react-router-dom";

const Pages = () => {
  return (
    <main>
      <Route exact path="/" component={Index} />
      <Route exact path="/contact" component={Contact} />
    </main>
  );
};

export default Pages;
