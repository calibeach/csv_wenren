import { useEffect, useRef, useMemo } from "react";
import { StyledSelectedTile } from "./StyledSelectedTile";
import HanziWriter from "hanzi-writer";

interface SelectedTileProps {
  selectedCharacter: string | null;
}

const SelectedTile: React.FC<SelectedTileProps> = ({ selectedCharacter }) => {
  const characterRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);

  const writerConfig = useMemo(
    () => ({
      width: 150,
      height: 150,
      padding: 5,
      showOutline: false,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 0,
      showCharacter: false,
    }),
    []
  );

  useEffect(() => {

    if (characterRef.current) {
      if (!writerRef.current) {
        // Initialize the writer only once
        writerRef.current = HanziWriter.create(
          characterRef.current,
          selectedCharacter || "",
          writerConfig
        );
      } else {
        // Clear any existing character to prevent flicker
        writerRef.current.hideCharacter();
        // Set the new character
        writerRef.current.setCharacter(selectedCharacter || "");
      }

      // Animate the character only when a valid emperorCharacter is present
      if (selectedCharacter) {
        writerRef.current.animateCharacter();
      }
    }
  }, [selectedCharacter, writerConfig]);

  return (
    <StyledSelectedTile>
      <div ref={characterRef} />
    </StyledSelectedTile>
  );
};

export { SelectedTile };
export default SelectedTile;
