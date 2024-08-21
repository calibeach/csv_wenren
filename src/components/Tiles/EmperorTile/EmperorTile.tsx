import { useEffect, useRef, useCallback, useMemo } from "react";
import { StyledEmperor } from "./StyledEmperor";
import HanziWriter from "hanzi-writer";

interface EmperorTileProps {
  emperorCharacter?: string | null;
  onEmperorClick: (chengyu: string) => void;
  onAnimationEnd: () => void;
}

const EmperorTile: React.FC<EmperorTileProps> = ({
  emperorCharacter,
  onEmperorClick,
  onAnimationEnd,
}) => {
  console.log("EmperorTile", emperorCharacter);
  const characterRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);
  const writerConfig = useMemo(
    () => ({
      width: 200,
      height: 200,
      padding: 5,
      showOutline: false,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 0,
      showCharacter: false, // Ensure no character is shown initially
    }),
    []
  );

  const handleClick = useCallback(() => {
    if (emperorCharacter) {
      onEmperorClick(emperorCharacter);
    }
  }, [emperorCharacter, onEmperorClick]);

  useEffect(() => {
    if (characterRef.current) {
      if (!writerRef.current) {
        // Initialize the writer only once
        writerRef.current = HanziWriter.create(
          characterRef.current,
          emperorCharacter || "",
          writerConfig
        );
      } else {
        // Clear any existing character to prevent flicker
        writerRef.current.hideCharacter();
        // Set the new character
        writerRef.current.setCharacter(emperorCharacter || "");
      }

      // Animate the character only when a valid emperorCharacter is present
      if (emperorCharacter) {
        writerRef.current.animateCharacter({
          onComplete: function () {
            onAnimationEnd();
          },
        });
      }
    }
  }, [emperorCharacter, writerConfig]);

  return (
    <StyledEmperor onClick={handleClick}>
      <div className="text" ref={characterRef} />
    </StyledEmperor>
  );
};

export { EmperorTile };
export default EmperorTile;
