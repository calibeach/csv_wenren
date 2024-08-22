import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledWinningChengyu = styled.div`
  background-color: transparent;
  border-radius: 10px;
  display: flex;
  width: 35vw;
  align-items: center;
  justify-content: center;
  font-family: "KaiTi", serif; /* Assuming you have a font that looks like Mahjong characters */
  color: #1c1c1c;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  animation: ${fadeIn} 2s ease-in-out;
`;

export { StyledWinningChengyu };
