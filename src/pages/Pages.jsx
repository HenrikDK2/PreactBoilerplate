import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { ErrorHandlerState } from "../Store";
import { useRecoilState } from "recoil";
import Index from "./index";
import Contact from "./contact";
import Gallery from "./gallery";
import Products from "./products";
import ProductDetails from "../templates/productDetails";
import Nav from "../components/Nav";
import Header from "../components/Header";

const ErrorContainer = styled.div`
  @keyframes progress {
    from {
      width: 100%;
    }

    to {
      width: 0%;
    }
  }
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  box-sizing: border-box;
  z-index: 99999999999;
  min-width: 100px;
  animation: "ErrorSlideAnim" 6s;
  background: rgba(255, 0, 12, 0.65);
  p {
    margin: 0;
    font-size: 0.875rem;
    color: #fff;
    font-weight: 700;
    &::after {
      content: "";
      width: 100%;
      display: block;
      border-radius: 10px;
      height: 5px;
      margin: 0.5rem 0;
      animation: progress 5s 0.5s forwards linear;
      background: #fff;
    }
  }
`;

const Pages = () => {
  const [errors, setError] = useRecoilState(ErrorHandlerState);

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
      <button onClick={() => setError([...errors, "An error occurred. Please try again later!"])}>
        hej
      </button>
      {errors[0] && (
        <ErrorContainer
          onAnimationEnd={(e) => {
            if (e.animationName === "ErrorSlideAnim") {
              let errorsArr = [...errors];
              errorsArr.shift();
              e.target.remove();
              setError(errorsArr);
            }
          }}
        >
          <p>{errors[0]}</p>
        </ErrorContainer>
      )}
    </>
  );
};

export default Pages;
