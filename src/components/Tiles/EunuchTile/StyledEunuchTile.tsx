import styled from "styled-components";

const StyledEunuch = styled.div`
  width: 80px;
  height: 100px;
  padding: 4px;
  background-color: transparent;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* border: 1px solid red; */

  .text {
    font-size: 40px;
    font-family: "KaiTi", serif;
    color: #1c1c1c;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3),
      -1px -1px 2px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    transition: transform 0.2s ease-in-out; /* Smooth transition for the transform */
  }

  &:hover .text {
    transform: scale(1.05); /* Slight scaling on hover for the text */
  }
`;

export { StyledEunuch };
