import { useEffect, useRef, useState } from "react";
import HanziWriter from "hanzi-writer";

import { StyledEmperor } from "./StyledEmperor";

interface EmperorTileProps {
  emperorCharacter?: string | null;
  onEmperorClick: (chengyu: string) => void;
  onAnimationEnd: () => void;
  resetSignal: boolean; // Reset signal passed from parent
}

const EmperorTile: React.FC<EmperorTileProps> = ({
  emperorCharacter,
  onEmperorClick,
  onAnimationEnd,
  resetSignal, // Receiving reset signal as a prop
}) => {
  const characterRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);
  const [isClicked, setIsClicked] = useState(false); // Local state for clicked status
  const [isCharacterVisible, setIsCharacterVisible] = useState(false); // To control visibility

  // Initialize the HanziWriter once and re-animate on character or resetSignal change
  useEffect(() => {
    if (characterRef.current) {
      if (!writerRef.current) {
        // Create the HanziWriter instance only once
        writerRef.current = HanziWriter.create(
          characterRef.current,
          emperorCharacter || "",
          {
            width: 200,
            height: 200,
            padding: 5,
            strokeAnimationSpeed: 1,
            delayBetweenStrokes: 0,
            showOutline: false,
            showCharacter: false, // Hide the character initially
          }
        );
      } else {
        // Update the character if it changes
        writerRef.current.setCharacter(emperorCharacter || "");
      }

      // Hide the character initially with CSS
      setIsCharacterVisible(false);

      // Trigger the animation after a delay
      if (emperorCharacter) {
        setTimeout(() => {
          // Show the character just before animation starts
          setIsCharacterVisible(true);
          writerRef.current?.animateCharacter({
            onComplete: onAnimationEnd,
          });
        }, 500);
      }
    }
  }, [emperorCharacter, onAnimationEnd]);

  // Re-trigger the animation when the resetSignal is received
  useEffect(() => {
    if (writerRef.current) {
      setIsClicked(false); // Reset clicked state
      setIsCharacterVisible(false); // Hide character before animation starts

      // Re-trigger the animation after the reset
      if (emperorCharacter) {
        setTimeout(() => {
          // Show the character before animation starts
          setIsCharacterVisible(true);
          writerRef.current?.animateCharacter({
            onComplete: onAnimationEnd, // Ensure animation end callback is called
          });
        }, 500); // Delay animation by 500ms after reset
      }
    }
  }, [resetSignal, emperorCharacter, onAnimationEnd]);

  // Handle click event to toggle the clicked state and show the outline
  const handleClick = () => {
    if (emperorCharacter) {
      onEmperorClick(emperorCharacter);
    }
    setIsClicked(true); // Set clicked state to true
  };

  // Show or hide character and outline based on isClicked state
  useEffect(() => {
    if (writerRef.current) {
      if (isClicked) {
        writerRef.current.hideCharacter();
        writerRef.current.showOutline();
      } else {
        writerRef.current.hideOutline();
      }
    }
  }, [isClicked]);

  return (
    <StyledEmperor onClick={handleClick}>
      <div
        className={`text ${isCharacterVisible ? "visible" : "hidden"}`}
        ref={characterRef}
      />
    </StyledEmperor>
  );
};

export { EmperorTile };
export default EmperorTile;
