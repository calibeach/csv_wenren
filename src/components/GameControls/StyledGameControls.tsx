import styled from "styled-components";

const StyledGameControlsContainer = styled.div`
  display: flex; /* Adjust the gap between buttons as needed */
  margin-bottom: 72px;
  height: 50px;
  width: 200px;
  position: absolute;
  bottom: 0; /* Align to the bottom */
  right: 0;
  .custom-speed-dial {
    position: absolute;
    bottom: 0%;
    right: 0px;
    opacity: 0.5;
    transition: opacity 0.5s ease, transform 0.5s ease;
    &:hover {
      opacity: 1;
    }
  }
`;

export { StyledGameControlsContainer };
export default StyledGameControlsContainer;
