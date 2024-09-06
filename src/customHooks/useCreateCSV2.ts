import * as FileSaver from "file-saver";
import * as Papa from "papaparse";

// Batch size for emperor characters
const EMPEROR_BATCH_SIZE = 100;
const COMBINATION_BATCH_SIZE = 500000; // Batch size for eunuch combinations

// Generate CSV content using fetched data
export const generateHanziCSV = async () => {
  const tempEmperorBatch = ["人"];
  console.log("Generating CSV...");
  try {
    // Fetch idioms and hanzi data
    const idiomsResponse = await fetch("/idiom.json");
    const hanziDBResponse = await fetch("/hanziDB.json");

    if (!idiomsResponse.ok || !hanziDBResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const idioms = await idiomsResponse.json();
    const hanziDB = await hanziDBResponse.json();

    // Filter idioms by containing the emperor character
    const filterIdiomsWithEmperor = (
      emperorChar: string,
      idioms: any[]
    ): any[] => {
      return idioms.filter((idiom) => idiom.word.includes(emperorChar));
    };

    // Generate combinations of eight eunuchs in batches
    const shuffleArray = (array: string[]): string[] => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const getCombinationsBatch = (
      eunuchs: string[],
      combinationLength: number,
      startIndex: number
    ): string[][] => {
      const results: Set<string> = new Set();
      const shuffledEunuchs = shuffleArray([...eunuchs]); // Shuffle the eunuchs array

      const helper = (path: string[], usedIndices: Set<number>) => {
        if (results.size >= COMBINATION_BATCH_SIZE) return; // Stop early to prevent memory overflow
        if (path.length === combinationLength) {
          results.add(path.join(","));
          return;
        }

        for (let i = 0; i < shuffledEunuchs.length; i++) {
          if (!usedIndices.has(i)) {
            usedIndices.add(i);
            path.push(shuffledEunuchs[i]);
            helper(path, usedIndices);
            path.pop();
            usedIndices.delete(i);
          }
        }
      };

      helper([], new Set());

      // Convert the set of strings back to an array of arrays
      return Array.from(results).map((combination) => combination.split(","));
    };
    // Check if an idiom can be formed from a combination of characters
    const canFormIdiom = (
      word: string,
      emperorChar: string,
      eunuchs: string[]
    ): boolean => {
      const allChars = [emperorChar, ...eunuchs];
      return word.split("").every((char) => allChars.includes(char));
    };

    // Main function to process a batch of emperor characters
    const processEmperorBatch = (
      emperorBatch: any[],
      hanziDB: any[],
      idioms: any[]
    ) => {
      const validTileSets: {
        emperorChar: string;
        eunuchs: string[];
        chengyu: string[];
      }[] = [];

      console.log("processEmperorBatch - start");
      console.log("emperorBatch:", emperorBatch);
      emperorBatch.forEach((hanzi, index) => {
        const emperorChar = hanzi;
        console.log(
          `Processing emperorChar ${index + 1}/${
            emperorBatch.length
          }: ${emperorChar}`
        );

        const filteredIdioms = filterIdiomsWithEmperor(emperorChar, idioms);
        console.log(`Filtered idioms for ${emperorChar}:`, filteredIdioms);

        const eunuchCharList = Array.from(
          new Set(
            filteredIdioms
              .flatMap((idiom) => {
                return idiom.word.split("");
              })
              .filter((char) => {
                return char !== emperorChar;
              })
          )
        );

        console.log("eunuchCharList:", eunuchCharList);

        let startIndex = 0;
        let done = false;
        let bestCombination: string[] = [];
        let maxIdioms: string[] = [];
        while (!done) {
          const combinations = getCombinationsBatch(
            eunuchCharList,
            8,
            startIndex
          );
          if (combinations.length === 0) break;

          console.log("Combinations:", combinations);

          combinations.forEach((combination) => {
            const matchingIdioms = filteredIdioms.filter((idiom) =>
              canFormIdiom(idiom.word, emperorChar, combination)
            );

            if (matchingIdioms.length > maxIdioms.length) {
              bestCombination = combination;
              maxIdioms = matchingIdioms.map((idiom) => idiom.word);
            }
          });

          startIndex += COMBINATION_BATCH_SIZE;
          done = combinations.length < COMBINATION_BATCH_SIZE;
        }

        if (bestCombination.length > 0) {
          validTileSets.push({
            emperorChar,
            eunuchs: bestCombination,
            chengyu: maxIdioms,
          });
        }
      });

      return validTileSets;
    };

    // Function to process hanziDB in batches
    const processHanziBatches = (hanziDB: any[], idioms: any[]) => {
      let startIndex = 0;
      const allValidTileSets: {
        emperorChar: string;
        eunuchs: string[];
        chengyu: string[];
      }[] = [];

      let count = 0;

      // while (startIndex < hanziDB.length) {
      while (count < tempEmperorBatch.length) {
        const emperorBatch = hanziDB.slice(
          startIndex,
          startIndex + EMPEROR_BATCH_SIZE
        );
        const batchResults = processEmperorBatch(
          tempEmperorBatch,
          hanziDB,
          idioms
        );
        allValidTileSets.push(...batchResults);
        startIndex += EMPEROR_BATCH_SIZE;
        count++;
      }
      return allValidTileSets;
    };

    // Process all hanzi in batches
    const allValidTileSets = processHanziBatches(hanziDB, idioms);

    // Convert results to CSV format
    const convertToCSV = (
      data: { emperorChar: string; eunuchs: string[]; chengyu: string[] }[]
    ): string => {
      const csvRows: {
        emperorChar: string;
        eunuchChars: string[];
        chengyu: string[];
      }[] = [];

      data.forEach((entry) => {
        csvRows.push({
          emperorChar: entry.emperorChar,
          eunuchChars: entry.eunuchs,
          chengyu: entry.chengyu,
        });
      });

      return Papa.unparse(csvRows, {
        header: true,
        columns: ["emperorChar", "eunuchChars", "chengyu"],
      });
    };

    const csvContent = convertToCSV(allValidTileSets);

    // Save the CSV file using FileSaver
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    FileSaver.saveAs(blob, "valid_tile_sets.csv");
  } catch (error) {
    console.error("Error generating CSV:", error);
  }
};
