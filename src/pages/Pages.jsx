import React from "react";
import { Route } from "react-router-dom";
import Index from "./index";
import Contact from "./contact";
import Gallery from "./gallery";
import Products from "./products";
import ProductDetails from "../templates/productDetails";
import Nav from "../components/Nav";
import Header from "../components/Header";
import ErrorHandler from "../components/ErrorHandler";

const Pages = () => {
  return (
    <>
      <Header></Header>
      <Nav />
      <main>
        <Route exact path="/" component={Index} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={ProductDetails} />
      </main>
      <ErrorHandler />
    </>
  );
};

export default Pages;
