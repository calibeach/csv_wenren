import styled from "styled-components";

const StyledAchievementLevelTile = styled.div`
  width:76px;
  height: 76px;
  background-color: transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-family: "KaiTi", serif;
  color: #1c1c1c;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  margin: 0; /* Ensure no unintended margins */
  .fade-in {
    animation: fadeIn 2s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export { StyledAchievementLevelTile };
export default StyledAchievementLevelTile;
