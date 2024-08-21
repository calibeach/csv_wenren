import { useEffect } from "react";
import { Action } from "../reducer/reducer"
import { findValidCombination } from "../wordSelection/wordSelection";

interface FetchDataResult {
  resultWords: string[];
  allowedCharacters: string[];
  selectedCharacter: string;
}

const useFetchData = (dispatch: React.Dispatch<Action>): void => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const idiomsResponse = await fetch("/idiom.json");
        const hanziDBResponse = await fetch("/hanziDB_top6000.json");

        const idioms = await idiomsResponse.json();
        const hanziDB = await hanziDBResponse.json();

        const result: FetchDataResult = findValidCombination(idioms, hanziDB);
        dispatch({ type: "SET_CHENGYU_ANSWERS", payload: result.resultWords });
        const filteredAllowedCharacters = result.allowedCharacters.filter(
          (char) => char !== result.selectedCharacter
        );
        dispatch({
          type: "SET_MASTER_TILES",
          payload: filteredAllowedCharacters,
        });
        dispatch({
          type: "SET_GAME_TILES",
          payload: filteredAllowedCharacters,
        });
        dispatch({
          type: "SET_MASTER_EMPEROR_CHARACTER",
          payload: result.selectedCharacter,
        });
        dispatch({
          type: "SET_EMPEROR_CHARACTER",
          payload: result.selectedCharacter,
        });
        dispatch({
          type: "SET_DATA",
          payload: result,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch({ type: "SET_FETCH_ERROR", payload: error.message });
      }
    };

    fetchData();
  }, [dispatch]);
};

export default useFetchData;
