import { useEffect, useRef } from "react";
import HanziWriter from "hanzi-writer";

import { StyledAchievementLevelTile } from "./StyledAchievementLevelTile";

interface AchievementLevelTileProps {
  achievementLevelTile: string | null;
}

const AchievementLevelTile: React.FC<AchievementLevelTileProps> = ({
  achievementLevelTile,
}) => {
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let writer: HanziWriter | null = null;

    if (achievementLevelTile && characterRef.current) {
      // Clear the previous character if any
      characterRef.current.innerHTML = "";

      writer = HanziWriter.create(characterRef.current, achievementLevelTile, {
        width: 120,
        height: 120,
        padding: 5,
      });
    }

    // Cleanup function to remove the writer instance
    return () => {
      if (writer) {
        writer.hideCharacter();
        writer = null;
      }
    };
  }, [achievementLevelTile]);
  return (
    <StyledAchievementLevelTile>
      <div ref={characterRef} />
    </StyledAchievementLevelTile>
  );
};

export { AchievementLevelTile };
export default AchievementLevelTile;
