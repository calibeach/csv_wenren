import { useEffect, useRef, useCallback, useMemo, useState } from "react";
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
  const characterRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);
  const [outlineColor, setOutlineColor] = useState("#f4de63");

  const writerConfig = useMemo(
    () => ({
      width: 200,
      height: 200,
      padding: 5,
      showOutline: false,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 0,
      showCharacter: false,
      outlineColor: outlineColor,
    }),
    [outlineColor]
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
        // Set the new character before hiding the existing one to prevent flicker
        if (emperorCharacter) {
          writerRef.current.setCharacter(emperorCharacter);
        } else {
          writerRef.current.setCharacter("");
        }
      }

      // Animate the character only when a valid emperorCharacter is present
      if (emperorCharacter) {
        writerRef.current.animateCharacter({
          onComplete: function () {
            onAnimationEnd();
          },
        });
      } else {
        // Ensure the animation end callback is called if no character is present
        onAnimationEnd();
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
