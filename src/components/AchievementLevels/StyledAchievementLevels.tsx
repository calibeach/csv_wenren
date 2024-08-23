import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledAchievementLevels = styled.div`
  display: flex;
  margin-top: 250px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 35vh;
  width: 35vw;
  padding: 0px;
  background-color: transparent;

  &.fade-in {
    animation: ${fadeIn} 3s ease-in-out forwards;
  }
`;

const StyledAchievementSeal = styled.img`
  margin-top: -28px;
  margin-right: 20px;
  width: 100px;
  height: 100px;
  z-index: 1000;

  &.opaque {
    opacity: 1;
  }
`;

export { StyledAchievementLevels, StyledAchievementSeal };
export default StyledAchievementLevels;
