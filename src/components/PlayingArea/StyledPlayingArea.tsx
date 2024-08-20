import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const StyledGridContainer = styled.div`
  position: absolute;
  top: 20%;
  display: grid;
  background-color: transparent;
  grid-template-columns: repeat(4, 150px);
  grid-template-rows: repeat(2, 150px);
  justify-content: center;
  align-content: center;
  gap: 10px;
  box-sizing: border-box;
  min-width: 800px;
  & > :nth-child(5) {
    grid-column: 2 / 3;
    justify-self: end;
  }

  & > :nth-child(6) {
    grid-column: 3 / 4;
    justify-self: start;
  }
  /* &.fade-out {
    animation: ${fadeOut} 2s forwards !important;
  } */
  .fade-out {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 2s ease-in-out, transform 2s ease-in-out;
  }
`;

export { StyledGridContainer };
