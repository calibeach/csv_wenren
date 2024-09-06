import { saveAs } from "file-saver";

interface Idiom {
  derivation: string;
  example: string;
  explanation: string;
  pinyin: string;
  word: string;
  abbreviation: string;
}

interface Hanzi {
  frequency_rank: number;
  charcter: string; // Assuming it's a typo, should be 'character' but using the given structure
  pinyin: string;
  definition: string;
  radical: string;
  radical_code: number;
  stroke_count: string;
  hsk_level: number;
  general_standard_num: number;
}

async function fetchData(): Promise<{ idioms: Idiom[]; hanziDB: Hanzi[] }> {
  const idiomsResponse = await fetch("/idiom.json");
  const hanziDBResponse = await fetch("/hanziDB.json");

  const idioms: Idiom[] = await idiomsResponse.json();
  const hanziDB: Hanzi[] = await hanziDBResponse.json();

  return { idioms, hanziDB };
}

function areAllCharactersUsed(
  resultWords: string[],
  allowedCharacters: string[]
): boolean {
  const allCharacters = resultWords.join("");
  return (
    allowedCharacters.every((char) => allCharacters.includes(char)) &&
    allowedCharacters.length >= 8
  );
}

function hasRepeatingCharacters(word: string): boolean {
  const charSet = new Set();
  for (const char of word) {
    if (charSet.has(char)) {
      return true;
    }
    charSet.add(char);
  }
  return false;
}

let count = 0;
function selectWordsForCharacter(
  idioms: Idiom[],
  hanzi: Hanzi
): {
  resultWords: string[];
  allowedCharacters: string[];
  selectedCharacter: string;
} | null {
  count = count + 1;
  console.log("Count: ", count);
  const selectedCharacter = hanzi.charcter; // Assuming it's a typo in the original

  // Find all words in idiom.json that contain the selected character
  const wordsContainingCharacter = idioms
    .filter((idiom) => idiom.word.includes(selectedCharacter))
    .map((idiom) => idiom.word);

  // Count the frequency of each character in the found words
  const characterFrequency: { [key: string]: number } = {};
  wordsContainingCharacter.forEach((word) => {
    for (const char of word) {
      if (char !== selectedCharacter) {
        if (characterFrequency[char]) {
          characterFrequency[char]++;
        } else {
          characterFrequency[char] = 1;
        }
      }
    }
  });

  // Find the 8 most common characters excluding the selected character
  const mostCommonCharacters = Object.entries(characterFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map((entry) => entry[0]);

  // Include the selected character in the list of characters
  const allowedCharacters = [selectedCharacter, ...mostCommonCharacters];

  // Find the largest array of words that can be made from the allowed characters
  const resultWords = wordsContainingCharacter.filter((word) => {
    return [...word].every((char) => allowedCharacters.includes(char));
  });

  // Apply the validation checks
  if (
    !areAllCharactersUsed(resultWords, allowedCharacters) ||
    resultWords.length <= 4 || // Ensure there are enough words
    resultWords.some(hasRepeatingCharacters)
  ) {
    return null; // Skip this character if it doesn't meet the conditions
  }

  return {
    resultWords,
    allowedCharacters,
    selectedCharacter,
  };
}

function generateCSV(
  data: {
    resultWords: string[];
    allowedCharacters: string[];
    selectedCharacter: string;
  }[]
): string {
  const header = "SelectedCharacter,AllowedCharacters,ResultWords\n";
  const rows = data.map((entry) => {
    const allowedCharacters = entry.allowedCharacters.join(" ");
    const resultWords = entry.resultWords.join(" ");
    return `${entry.selectedCharacter},${allowedCharacters},${resultWords}`;
  });
  return header + rows.join("\n");
}

async function generateHanziCSV() {
  const { idioms, hanziDB } = await fetchData();

  const results = hanziDB
    .map((hanzi) => selectWordsForCharacter(idioms, hanzi))
    .filter((result) => result !== null) as {
    resultWords: string[];
    allowedCharacters: string[];
    selectedCharacter: string;
  }[];

  const csvData = generateCSV(results);

  // Download the CSV file
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
  saveAs(blob, "hanzi_results.csv");
}

export { generateHanziCSV };
