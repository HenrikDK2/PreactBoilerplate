import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { ErrorHandlerState } from "../Store";
import { useRecoilState } from "recoil";
import Index from "./index";
import Contact from "./contact";
import Gallery from "./gallery";
import Products from "./products";
import Nav from "../components/Nav";
import Header from "../components/Header";

const ErrorContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 99999999999;
  p {
    background: rgba(255, 0, 12, 0.65);
    color: #000;
    padding: 0.5rem 1rem;
    animation: "ErrorSlideAnim" 6s;
  }
`;

const Pages = () => {
  const [errorHandler, setErrorHandler] = useRecoilState(ErrorHandlerState);

  return (
    <>
      <Header></Header>
      <Nav />
      <main>
        <Route exact path="/" component={Index} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/products" component={Products} />
      </main>
      {/*       <button
        onClick={(e) =>
          setErrorHandler({ ...errorHandler, messages: [...errorHandler.messages, "test"] })
        }
      >
        hej
      </button>
      <ErrorContainer>
        {errorHandler.messages[0] && (
          <p
            onAnimationEnd={(e) => {
              if (e.animationName === "ErrorSlideAnim") {
                e.target.remove();
                let messages = [...errorHandler.messages];
                messages.shift();
                setErrorHandler({ ...errorHandler, messages });
              }
            }}
          >
            {errorHandler.messages[0]}
          </p>
        )}
      </ErrorContainer> */}
    </>
  );
};

export default Pages;
