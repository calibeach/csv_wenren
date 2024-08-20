import styled from "styled-components";

const StyledSelectedTile = styled.div`
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  cursor: pointer;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  margin: 0; /* Ensure no unintended margins */
`;

export { StyledSelectedTile };
export default StyledSelectedTile;
