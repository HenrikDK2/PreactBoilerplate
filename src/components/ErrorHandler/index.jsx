import React from "react";
import styled from "styled-components";
import { ErrorHandlerState } from "../../Store";
import { useRecoilState } from "recoil";

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

const ErrorHandler = () => {
  const [errors, setError] = useRecoilState(ErrorHandlerState);

  return (
    <>
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

export default ErrorHandler;
