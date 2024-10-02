import React, { useState, useEffect } from "react";

import {
  StyledAchievementLevels,
  StyledAchievementSeal,
} from "./StyledAchievementLevels";
import { AchievementLevelTile } from "../Tiles/AchievementLevelTiles/AchievementLevelTile";
import { convertSimplifiedToTraditional } from "../../customHooks/useConvertScript";

const achievementLevels = [
  {
    level: 1,
    image: "/src/assets/level_seals/1_beginning_learner_transparent.png",
    characters: "初学之徒",
  },
  {
    level: 2,
    image: "/src/assets/level_seals/2_studying_disciple_transparent.png",
    characters: "研习弟子",
  },
  {
    level: 3,
    image: "/src/assets/level_seals/3_knowledge_seeker_transparent.png",
    characters: "求知学者",
  },
  {
    level: 4,
    image: "/src/assets/level_seals/4_talented_scholar_transparent.png",
    characters: "才华学士",
  },
  {
    level: 5,
    image: "/src/assets/level_seals/5_skillful_expert_transparent.png",
    characters: "技艺精通",
  },
  {
    level: 6,
    image: "/src/assets/level_seals/6_learned_master_transparent.png",
    characters: "博学大师",
  },
  {
    level: 7,
    image: "/src/assets/level_seals/7_cultured_scholar_transparent.png",
    characters: "博雅学者",
  },
  {
    level: 8,
    image: "/src/assets/level_seals/8_literati_transparent.png",
    characters: "文雅之人",
  },
];

const getAchievementLevel = (score: number) => {
  if (score <= 12) return 1;
  if (score <= 24) return 2;
  if (score <= 36) return 3;
  if (score <= 48) return 4;
  if (score <= 60) return 5;
  if (score <= 72) return 6;
  if (score <= 84) return 7;
  return 8;
};

interface AchievementLevelsProps {
  score: number;
}

const AchievementLevels: React.FC<AchievementLevelsProps> = ({ score }) => {
  const level = getAchievementLevel(score);
  const { image, characters } = achievementLevels[level - 1];
  const [splitCharacters, setSplitCharacters] = useState<string[]>(
    characters.split("")
  );
  const [fadeIn, setFadeIn] = useState(false);

  const script = localStorage.getItem("script");

  useEffect(() => {
    // Perform conversion if the script is set to traditional
    if (script === "traditional") {
      const convertSplitCharacters = Promise.all(
        characters
          .split("")
          .map((character) => convertSimplifiedToTraditional(character))
      );

      // After the conversion completes, update the splitCharacters state
      convertSplitCharacters.then((convertedCharacters) => {
        setSplitCharacters(convertedCharacters);
      });
    } else {
      // If script is not traditional, use the simplified characters
      setSplitCharacters(characters.split(""));
    }
  }, [characters, script]);

  useEffect(() => {
    setFadeIn(true);
    const timer = setTimeout(() => setFadeIn(false), 3000);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <StyledAchievementLevels key={level} className={fadeIn ? "fade-in" : ""}>
      <StyledAchievementSeal
        src={image}
        className={fadeIn ? "" : "opaque"}
        alt={`Achievement Level ${level}`}
      />
      {splitCharacters.map((character, index) => (
        <AchievementLevelTile key={index} achievementLevelTile={character} />
      ))}
    </StyledAchievementLevels>
  );
};

export { AchievementLevels };
export default AchievementLevels;
