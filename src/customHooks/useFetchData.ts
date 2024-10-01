import { useCallback } from "react";
import { Action } from "../reducer/reducer";

import tiles from "../assets/tiles/tiles.json";
// import { findValidCombination } from "../wordSelection/wordSelection";

// interface FetchDataResult {
//   resultWords: string[];
//   allowedCharacters: string[];
//   selectedCharacter: string;
// }

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

      // Convert index to a number
      const currentIndex = parseInt(index);

      // Get the JSON object at the current index
      const currentTile = tiles[currentIndex % tiles.length]; // Use modulo to avoid out-of-bounds

      console.log("Current tile:", currentTile);

      // Set the appropriate state values
      dispatch({
        type: "SET_CHENGYU_ANSWERS",
        payload: currentTile.answers.split(" "),
      });
      dispatch({
        type: "SET_MASTER_TILES",
        payload: currentTile.xuetu.split(" "),
      });
      dispatch({
        type: "SET_GAME_TILES",
        payload: currentTile.xuetu.split(" "),
      });
      dispatch({
        type: "SET_MASTER_EMPEROR_CHARACTER",
        payload: currentTile.wenren,
      });
      dispatch({
        type: "SET_EMPEROR_CHARACTER",
        payload: currentTile.wenren,
      });
      dispatch({
        type: "SET_DATA",
        payload: currentTile,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [dispatch]);

  return fetchData;
};

export default useFetchData;
