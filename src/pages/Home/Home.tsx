import React, { useEffect, useReducer } from "react";

import {
  StyledHomeContainer,
  StyledWinningChengyuBoard,
  StyledPlayingArea,
  StyledBackgroundImage,
} from "./StyledHome";
import { EunuchTile } from "../../components/Tiles/EunuchTile/EunuchTile";
import { EmperorTile } from "../../components/Tiles/EmperorTile/EmperorTile";
import { WinningChengyu } from "../../components/WinningChengyu/WinningChengyu";
import ChosenTilesArea from "../../components/PlayingArea/PlayingArea";
import { reducer, initialState } from "../../reducer/reducer";
import useFetchData from "../../customHooks/useFetchData";
import { CharacterArea } from "../../components/CharacterArea/CharacterArea";

const Home: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    data,
    winningChengyu,
    gameTiles,
    chengyuAnswers,
    selectedTiles,
    emperorCharacter,
    isEmperorAnimationComplete,
    isAnimating,
  } = state;
  useFetchData(dispatch);

  const handleEmperorAnimationEnd = () => {
    dispatch({ type: "SET_IS_EMPEROR_ANIMATION_COMPLETE", payload: true });
  };

  useEffect(() => {
    console.log("Answers", chengyuAnswers);
    console.log("GameTiles", gameTiles);
  }, [chengyuAnswers]);

  const checkWinningChengyu = () => {
    if (selectedTiles.length < 4) {
      return;
    }
    const joinedTiles = selectedTiles.join("");
    if (chengyuAnswers.includes(joinedTiles)) {
      dispatch({ type: "SET_IS_ANIMATING", payload: true });
      setTimeout(() => {
        dispatch({ type: "SET_IS_ANIMATING", payload: false });
      }, 2500);
      dispatch({
        type: "SET_WINNING_CHENGYU",
        payload: [...state.winningChengyu, joinedTiles],
      });
      dispatch({
        type: "SET_CHENGYU_ANSWERS",
        payload: state.chengyuAnswers.filter(
          (chengyu: string) => chengyu !== joinedTiles
        ),
      });
      resetTiles();
    }
  };

  useEffect(() => {
    checkWinningChengyu();
  }, [selectedTiles]);

  const resetTiles = () => {
    dispatch({ type: "SET_GAME_TILES", payload: state.masterTiles });
    dispatch({
      type: "SET_EMPEROR_CHARACTER",
      payload: state.masterEmperorCharacter,
    });
    dispatch({ type: "SET_SELECTED_TILES", payload: [] });
  };

  const onEmperorClick = (chengyu: string) => {
    dispatch({
      type: "SET_SELECTED_TILES",
      payload: [...state.selectedTiles, chengyu],
    });
    dispatch({ type: "SET_EMPEROR_CHARACTER", payload: "" });
  };

  const onEunuchClick = (eunuchCharacter: string) => {
    dispatch({
      type: "SET_SELECTED_TILES",
      payload: [...state.selectedTiles, eunuchCharacter],
    });
    dispatch({
      type: "SET_GAME_TILES",
      payload: state.gameTiles.filter(
        (char: string) => char !== eunuchCharacter
      ),
    });
  };

  return (
    <StyledHomeContainer>
      <StyledBackgroundImage
        src="/src/assets/Chinese Tree.jpg"
        alt="Chinese Tree"
      />
      {data && (
        <StyledPlayingArea>
          <CharacterArea
            emperorCharacter={emperorCharacter}
            onEmperorClick={onEmperorClick}
            handleEmperorAnimationEnd={handleEmperorAnimationEnd}
            isEmperorAnimationComplete={isEmperorAnimationComplete}
            gameTiles={gameTiles}
            onEunuchClick={onEunuchClick}
          />
          <ChosenTilesArea
            chosenCharacters={selectedTiles}
            className={isAnimating ? "fade-out" : ""}
          />
          {winningChengyu && (
            <StyledWinningChengyuBoard className={isAnimating ? "fade-in" : ""}>
              {winningChengyu.map((chengyu: string, index: number) => (
                <WinningChengyu key={index} winningChengYu={chengyu} />
              ))}
            </StyledWinningChengyuBoard>
          )}
        </StyledPlayingArea>
      )}
    </StyledHomeContainer>
  );
};

export default Home;
export { Home };
