import styled from "styled-components";

const StyledWinningTile = styled.div`
  margin: 0 5px; /* Adjust this value to bring tiles closer together */
  padding: 5px;
  background-color: transparent;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-family: "KaiTi", serif;
  color: #1c1c1c;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: bold; /* Ensure no unintended margins */
`;

export { StyledWinningTile };
