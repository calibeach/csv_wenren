import styled from "styled-components";

const StyledWinningTile = styled.div`
  width: 150px;
  height: 150px;
  background-color: transparent;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-family: "KaiTi", serif;
  color: #1c1c1c;
  cursor: pointer;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: bold; /* Ensure no unintended margins */
`;

export { StyledWinningTile };
