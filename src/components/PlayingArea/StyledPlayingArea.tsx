import styled from "styled-components";

const StyledGridContainer = styled.div`
  top: 20%;
  display: grid;
  width: 35%;
  grid-template-columns: repeat(1, 150px);
  grid-template-rows: repeat(4, 150px);
  justify-content: center;
  align-content: center;
  gap: 10px;
  box-sizing: border-box;
  min-width: 300px;
  margin-left: 140px;
`;

export { StyledGridContainer };
