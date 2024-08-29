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
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 35%;
  width: 35%;
  padding: 0px;
  margin-left: 44px;
  background-color: transparent;

  &.fade-in {
    animation: ${fadeIn} 3s ease-in-out forwards;
  }
`;

const StyledAchievementSeal = styled.img`
  margin-top: -4px;
  margin-right: 4px;
  width: 60px;
  height: 60px;
  z-index: 1000;

  &.opaque {
    opacity: 1;
  }
`;

export { StyledAchievementLevels, StyledAchievementSeal };
export default StyledAchievementLevels;
