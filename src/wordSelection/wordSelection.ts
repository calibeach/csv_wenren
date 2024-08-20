function selectWordsAndCharacters(idioms: any[], hanziDB: any[]) {
  const shuffledHanziDB = shuffleArray([...hanziDB]);
  const shuffledIdioms = shuffleArray([...idioms]);
  // Randomly select a JSON object from hanziDB_top2000.json
  const randomIndex = Math.floor(Math.random() * hanziDB.length);
  const selectedHanzi = shuffledHanziDB[randomIndex];
  const selectedCharacter = selectedHanzi.charcter;

  // Find all words in idiom.json that contain the selected character
  const wordsContainingCharacter = shuffledIdioms
    .filter((idiom: any) => idiom.word.includes(selectedCharacter))
    .map((idiom: any) => idiom.word);

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

  // Find the 7 most common characters excluding the selected character
  const mostCommonCharacters = Object.entries(characterFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 7)
    .map((entry) => entry[0]);

  // Include the selected character in the list of characters
  const allowedCharacters = [selectedCharacter, ...mostCommonCharacters];

  // Find the largest array of words that can be made from the allowed characters
  const resultWords = wordsContainingCharacter.filter((word) => {
    return [...word].every((char) => allowedCharacters.includes(char));
  });

  return {
    resultWords,
    allowedCharacters,
    selectedCharacter,
  };
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

function findValidCombination(
  idioms: string[],
  hanziDB: string[]
): {
  resultWords: string[];
  allowedCharacters: string[];
  selectedCharacter: string;
} {
  let result;
  do {
    result = selectWordsAndCharacters(idioms, hanziDB);
  } while (
    !areAllCharactersUsed(result.resultWords, result.allowedCharacters) ||
    result.resultWords.length <= 5 ||
    result.resultWords.some(hasRepeatingCharacters)
  );
  return result;
}

function shuffleArray(array: any[]): any[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export { findValidCombination };
