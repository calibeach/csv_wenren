import React, { useEffect, useReducer, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  StyledHomeContainer,
  StyledWinningChengyuBoard,
  StyledPlayingArea,
  StyledBackgroundImage,
  StyledImperialSeal,
  StyledScoringArea,
  StyledScoringAreaContainer,
} from "./StyledHome";
import useFetchData from "../../customHooks/useFetchData";
import { reducer, initialState } from "../../reducer/reducer";
import ChosenTilesArea from "../../components/PlayingArea/PlayingArea";
import { GameControls } from "../../components/GameControls/GameControls";
import { CharacterArea } from "../../components/CharacterArea/CharacterArea";
import { WinningChengyu } from "../../components/WinningChengyu/WinningChengyu";
import { AchievementLevels } from "../../components/AchievementLevels/AchievementLevels";

const Home: React.FC = React.memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const {
    data,
    winningChengyu,
    gameTiles,
    chengyuAnswers,
    selectedTiles,
    emperorCharacter,
    isEmperorAnimationComplete,
    isAnimating,
    isGuessCorrect,
    pointsForCorrectGuess,
    score,
  } = state;

  const fetchData = useFetchData(dispatch);

  useEffect(() => {
    // Check if the 'script' key is in localStorage
    const script = localStorage.getItem("script");
    if (!script) {
      navigate("/select"); // Redirect to the "Select" page if 'script' is not found
    } else {
      fetchData(); // Fetch data if the script exists
    }
  }, [fetchData, navigate]);

  const handleEmperorAnimationEnd = useCallback(() => {
    dispatch({ type: "SET_IS_EMPEROR_ANIMATION_COMPLETE", payload: true });
  }, [dispatch]);

  useEffect(() => {
    console.log("Answers", chengyuAnswers);
  }, [chengyuAnswers]);
  useEffect(() => {
    console.log("Points", score);
  }, [score]);

  const checkWinningChengyu = useCallback(() => {
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
        type: "SET_SCORE",
        payload: score + pointsForCorrectGuess,
      });
      dispatch({
        type: "SET_CHENGYU_ANSWERS",
        payload: state.chengyuAnswers.filter(
          (chengyu: string) => chengyu !== joinedTiles
        ),
      });
      setTimeout(() => {
        dispatch({
          type: "SET_IS_GUESS_CORRECT",
          payload: true,
        });
      }, 1000);
      setTimeout(() => {
        resetTiles();
        dispatch({
          type: "SET_WINNING_CHENGYU",
          payload: [...state.winningChengyu, joinedTiles],
        });
      }, 5000);
    } else {
      setTimeout(() => {
        resetTiles();
      }, 5000);
    }
  }, [selectedTiles, chengyuAnswers, dispatch, state.winningChengyu]);

  useEffect(() => {
    checkWinningChengyu();
  }, [selectedTiles]);

  const resetTiles = () => {
    console.log("Resetting tiles");
    dispatch({ type: "SET_GAME_TILES", payload: state.masterTiles });
    dispatch({
      type: "SET_EMPEROR_CHARACTER",
      payload: state.masterEmperorCharacter,
    });
    dispatch({ type: "SET_SELECTED_TILES", payload: [] });
    dispatch({ type: "SET_IS_GUESS_CORRECT", payload: false });
    dispatch({ type: "SET_IS_EMPEROR_ANIMATION_COMPLETE", payload: false });
  };

  const onEmperorClick = (chengyu: string) => {
    dispatch({
      type: "SET_SELECTED_TILES",
      payload: [...state.selectedTiles, chengyu],
    });
    dispatch({ type: "SET_EMPEROR_CHARACTER", payload: " " });
  };

  const onEunuchClick = (eunuchCharacter: string) => {
    dispatch({
      type: "SET_SELECTED_TILES",
      payload: [...state.selectedTiles, eunuchCharacter],
    });
    dispatch({
      type: "SET_GAME_TILES",
      payload: state.gameTiles.map((char: string) =>
        char === eunuchCharacter ? "" : char
      ),
    });
  };

    const mixTiles = () => {
      const mixedTiles = gameTiles.sort(() => Math.random() - 0.5);
      dispatch({ type: "SET_GAME_TILES", payload: mixedTiles });
      dispatch({ type: "SET_IS_EMPEROR_ANIMATION_COMPLETE", payload: false });
      setTimeout(() => {
        dispatch({
          type: "SET_IS_EMPEROR_ANIMATION_COMPLETE",
          payload: true,
        });
      }, 100);
    };

  return (
    <StyledHomeContainer>
      <StyledBackgroundImage
        src="/src/assets/misc/Chinese Tree.jpg"
        alt="Chinese Tree"
      />
      {isGuessCorrect && (
        <StyledImperialSeal
          src="/src/assets/misc/Imperial_Seal_transparent.png"
          alt="Imperial Seal"
        />
      )}
      {data && emperorCharacter && (
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
          <StyledScoringAreaContainer>
            <StyledScoringArea>
              <AchievementLevels score={score} />
              {winningChengyu && (
                <StyledWinningChengyuBoard
                  className={isAnimating ? "fade-in" : ""}
                >
                  {winningChengyu.map((chengyu: string, index: number) => (
                    <WinningChengyu key={index} winningChengYu={chengyu} />
                  ))}
                </StyledWinningChengyuBoard>
              )}
            </StyledScoringArea>
            <GameControls
              fetchData={fetchData}
              mixTiles={mixTiles}
              dispatch={dispatch}
              score={score}
            />
          </StyledScoringAreaContainer>
        </StyledPlayingArea>
      )}
    </StyledHomeContainer>
  );
});

export default Home;
export { Home };
