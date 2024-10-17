import styled from "styled-components";

const StyledGridContainer = styled.div`
  margin-top: 10%;
  display: grid;
  width: 33.33%;
  grid-template-columns: repeat(1, 150px);
  grid-template-rows: repeat(4, 150px);
  justify-content: center;
  align-content: center;
  gap: 10px;
  box-sizing: border-box;
  min-width: 300px;
  margin-left: 80px;

  @media (max-width: 430px) {
    margin-left: 1em;
    margin-top: 5.5em;
  }
`;

export { StyledGridContainer };
