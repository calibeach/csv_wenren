import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  font-family: "AR PL KaitiM GB";
  color: #1c1c1c;
  position: relative;
`;

const StyledSelectButton = styled.button<{ isSelected: boolean }>`
  font-size: 2rem;
  margin: 0 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f8f8f8;
  border: 1px solid #1c1c1c;
  font-family: "AR PL KaitiM GB";
  cursor: pointer;
  opacity: 0; /* Start with the button hidden */
  animation-delay: 2s;
  animation: ${fadeIn} 3s ease-in-out forwards; /* Apply the fade-in animation */

  ${({ isSelected }) =>
    isSelected &&
    css`
      animation: ${fadeOut} 1s ease-in-out forwards; /* Apply the fade-out animation */
    `}

  &:hover {
    background-color: #1c1c1c;
    color: #f8f8f8;
  }
`;

export { StyledSelectContainer, StyledSelectButton };
