import styled from "styled-components";

const StyledGridContainer = styled.div`
  top: 20%;
  display: grid;
  width: 35vw;
  grid-template-columns: repeat(1, 150px);
  grid-template-rows: repeat(4, 150px);
  justify-content: center;
  align-content: center;
  gap: 10px;
  box-sizing: border-box;
  min-width: 300px;
  margin-left: 38px;
  .fade-out {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 2s ease-in-out, transform 2s ease-in-out;
  }
`;

export { StyledGridContainer };
