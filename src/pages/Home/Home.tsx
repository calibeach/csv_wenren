import React, { useEffect, useState, useCallback } from "react";

import {
  StyledHomeContainer,
  StyledEmperorTile,
  StyledEunuchTiles,
  StyledWinningChengyuBoard,
  StyledPlayingArea,
} from "./StyledHome";
import { ResultData } from "../../types/types";
import { EunuchTile } from "../../components/Tiles/EunuchTile/EunuchTile";
import { EmperorTile } from "../../components/Tiles/EmperorTile/EmperorTile";
import { WinningChengyu } from "../../components/WinningChengyu/WinningChengyu";
import ChosenTilesArea from "../../components/PlayingArea/PlayingArea";

import { findValidCombination } from "../../wordSelection/wordSelection";

const Home: React.FC = () => {
  console.log("Rendering Home");
  const [data, setData] = useState<ResultData | null>(null);
  const [winningChengyu, setWinningChengyu] = useState<string[]>([]);
  const [gameTiles, setGameTiles] = useState<string[]>([]);
  const [chengyuAnswers, setChengyuAnswers] = useState<string[]>([]);
  const [selectedTiles, setSelectedTiles] = useState<string[]>([]);
  const [masterTiles, setMasterTiles] = useState<string[]>([]);
  const [masterEmperorCharacter, setMasterEmperorCharacter] =
    useState<string>("");
  const [emperorCharacter, setEmperorCharacter] = useState<string | null>(null);
  const [isEmperorAnimationComplete, setIsEmperorAnimationComplete] =
    useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleEmperorAnimationEnd = () => {
    setIsEmperorAnimationComplete(true);
  };

  const updateEmperorCharacter = useCallback((character: string) => {
    setMasterEmperorCharacter(character);
    setEmperorCharacter(character);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const idiomsResponse = await fetch("/idiom.json");
        const hanziDBResponse = await fetch("/hanziDB_top6000.json");

        const idioms = await idiomsResponse.json();
        const hanziDB = await hanziDBResponse.json();

        const result = findValidCombination(idioms, hanziDB);
        setChengyuAnswers(result.resultWords);
        const filteredAllowedCharacters = result.allowedCharacters.filter(
          (char) => char !== result.selectedCharacter
        );
        setMasterTiles(filteredAllowedCharacters);
        setGameTiles(filteredAllowedCharacters);
        updateEmperorCharacter(result.selectedCharacter);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(chengyuAnswers);
  }, [chengyuAnswers]);

  const checkWinningChengyu = () => {
    if (selectedTiles.length < 4) {
      return;
    }
    const joinedTiles = selectedTiles.join("");
    if (chengyuAnswers.includes(joinedTiles)) {
      console.log("Setting isAnimating to true");
      setIsAnimating(true);
      setTimeout(() => {
        console.log("Setting isAnimating to false");
        setIsAnimating(false);
      }, 2500);
      setWinningChengyu([...winningChengyu, joinedTiles]);
      setChengyuAnswers(
        chengyuAnswers.filter((chengyu) => chengyu !== joinedTiles)
      );
      resetTiles();
    }
  };
  useEffect(() => {
    checkWinningChengyu();
  }, [selectedTiles, chengyuAnswers]);

  const resetTiles = () => {
    setGameTiles(masterTiles);
    setEmperorCharacter(masterEmperorCharacter);
    setSelectedTiles([]);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const onEmperorClick = (chengyu: string) => {
    setSelectedTiles([...selectedTiles, chengyu]);
    setEmperorCharacter("");
  };
  const onEunuchClick = (eunuchCharacter: string) => {
    setSelectedTiles([...selectedTiles, eunuchCharacter]);
    setGameTiles(gameTiles.filter((char) => char !== eunuchCharacter));
  };

  return (
    <StyledHomeContainer>
      {winningChengyu && (
        <StyledWinningChengyuBoard className={isAnimating ? "fade-in" : ""}>
          {winningChengyu.map((chengyu, index) => (
            <WinningChengyu key={index} winningChengYu={chengyu} />
          ))}
        </StyledWinningChengyuBoard>
      )}
      {data && (
        <StyledPlayingArea>
          <ChosenTilesArea
            chosenCharacters={selectedTiles}
            className={isAnimating ? "fade-out" : ""}
          />
          {data && emperorCharacter && (
            <StyledEmperorTile>
              <EmperorTile
                emperorCharacter={emperorCharacter}
                onEmperorClick={onEmperorClick}
                onAnimationEnd={handleEmperorAnimationEnd}
              />
            </StyledEmperorTile>
          )}
          <StyledEunuchTiles
            $isEmperorAnimationComplete={isEmperorAnimationComplete}
          >
            {gameTiles.map((tile, index) => (
              <EunuchTile
                key={index}
                eunuchCharacter={tile}
                onEunuchClick={onEunuchClick}
              />
            ))}
          </StyledEunuchTiles>
        </StyledPlayingArea>
      )}
    </StyledHomeContainer>
  );
};

export default Home;
export { Home };
