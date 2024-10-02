import { useCallback } from "react";
import { Action } from "../reducer/reducer";

import tiles from "../assets/tiles/tiles.json";
import { convertSimplifiedToTraditional } from "./useConvertScript";
const useFetchData = (
  dispatch: React.Dispatch<Action>
): (() => Promise<void>) => {
  const fetchData = useCallback(async (): Promise<void> => {
    try {
      // Check for the index key in localStorage
      let index = localStorage.getItem("index");
      if (index === null) {
        // If index does not exist, set it to 0
        index = "0";
        localStorage.setItem("index", index);
      } else {
        // If index exists, increment it and update localStorage
        index = (parseInt(index) + 1).toString();
        localStorage.setItem("index", index);
      }

      const script = localStorage.getItem("script");

      const currentIndex = parseInt(index);

      // Get the JSON object at the current index
      const currentTile = tiles[currentIndex % tiles.length]; // Use modulo to avoid out-of-bounds

      let splitAnswers = currentTile.answers.split(" ");
      let splitMasterTiles = currentTile.xuetu.split(" ");
      let emperorCharacter = currentTile.wenren;

      if (script === "traditional") {
        const convertAnswers = Promise.all(
          splitAnswers.map((answer) => convertSimplifiedToTraditional(answer))
        );
        const convertTiles = Promise.all(
          splitMasterTiles.map((tile) => convertSimplifiedToTraditional(tile))
        );
        const convertEmperor = convertSimplifiedToTraditional(emperorCharacter);

        Promise.all([convertAnswers, convertTiles, convertEmperor])
          .then(([convertedAnswers, convertedTiles, convertedEmperor]) => {
            splitAnswers = convertedAnswers;
            splitMasterTiles = convertedTiles;
            emperorCharacter = convertedEmperor;

            const pointsForCorrectGuess = 100 / splitAnswers.length;
            dispatch({
              type: "SET_CHENGYU_ANSWERS",
              payload: splitAnswers,
            });
            dispatch({
              type: "SET_MASTER_TILES",
              payload: splitMasterTiles,
            });
            dispatch({
              type: "SET_GAME_TILES",
              payload: splitMasterTiles,
            });
            dispatch({
              type: "SET_MASTER_EMPEROR_CHARACTER",
              payload: emperorCharacter,
            });
            dispatch({
              type: "SET_EMPEROR_CHARACTER",
              payload: emperorCharacter,
            });
            dispatch({
              type: "SET_DATA",
              payload: currentTile,
            });
            dispatch({
              type: "SET_POINTS_FOR_CORRECT_GUESS",
              payload: pointsForCorrectGuess,
            });
          })
          .catch((error) => {
            console.error("Error converting text:", error);
          });
      } else {
        // If no conversion is needed, dispatch the simplified characters directly
        const pointsForCorrectGuess = 100 / splitAnswers.length;

        dispatch({
          type: "SET_CHENGYU_ANSWERS",
          payload: splitAnswers,
        });
        dispatch({
          type: "SET_MASTER_TILES",
          payload: splitMasterTiles,
        });
        dispatch({
          type: "SET_GAME_TILES",
          payload: splitMasterTiles,
        });
        dispatch({
          type: "SET_MASTER_EMPEROR_CHARACTER",
          payload: emperorCharacter,
        });
        dispatch({
          type: "SET_EMPEROR_CHARACTER",
          payload: emperorCharacter,
        });
        dispatch({
          type: "SET_DATA",
          payload: currentTile,
        });
        dispatch({
          type: "SET_POINTS_FOR_CORRECT_GUESS",
          payload: pointsForCorrectGuess,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [dispatch]);

  return fetchData;
};

export default useFetchData;
