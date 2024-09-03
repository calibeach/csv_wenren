import styled from "styled-components";

const StyledGameControlsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 10px; /* Adjust the gap between buttons as needed */
  margin-bottom: 72px;
`;

export { StyledGameControlsContainer };
export default StyledGameControlsContainer;
