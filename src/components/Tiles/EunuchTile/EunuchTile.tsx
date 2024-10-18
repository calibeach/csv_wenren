import React, { useEffect, useRef, useState } from "react";
import HanziWriter from "hanzi-writer";
import { StyledEunuch } from "./StyledEunuchTile";

interface EunuchTileProps {
  eunuchCharacter: string;
  onEunuchClick: (eunuchCharacter: string) => void;
  resetSignal: boolean;
}

const EunuchTile: React.FC<EunuchTileProps> = ({
  eunuchCharacter,
  onEunuchClick,
  resetSignal,
}) => {
  const characterRef = useRef<HTMLDivElement>(null);
  const [writer, setWriter] = useState<HanziWriter | null>(null);
  const [isClicked, setIsClicked] = useState(false); // Local state for clicked status

  useEffect(() => {
    if (eunuchCharacter && characterRef.current) {
      // Clear the previous character if any
      characterRef.current.innerHTML = "";

      const newWriter = HanziWriter.create(
        characterRef.current,
        eunuchCharacter,
        {
          width: 88,
          height: 100,
          padding: 0,
        }
      );

      setWriter(newWriter);
    }

    // Cleanup function to remove the writer instance
    return () => {
      // Clean up writer on unmount
      if (writer) {
        writer.hideCharacter();
        writer.hideOutline();
        setWriter(null);
      }
    };
  }, [eunuchCharacter]);

  useEffect(() => {
    if (writer) {
      if (isClicked) {
        // When clicked, show the outline and hide the character
        writer.hideCharacter();
        writer.showOutline();
      } else {
        // Reset to showing the full character when not clicked
        writer.showCharacter();
        writer.hideOutline();
      }
    }
  }, [isClicked, writer]);

  useEffect(() => {
    if (writer) {
      setIsClicked(false); // Reset local state
      writer.showCharacter(); // Ensure character is shown
      writer.hideOutline(); // Hide the outline if any
    }
  }, [resetSignal, writer]);

  const handleClick = () => {
    if (eunuchCharacter) {
      // Toggle the clicked state
      setIsClicked(true);
      onEunuchClick(eunuchCharacter); // Call the parent's click handler
    }
  };

  return (
    <StyledEunuch onClick={handleClick}>
      <div className="text" ref={characterRef}></div>
    </StyledEunuch>
  );
};

export { EunuchTile };
export default EunuchTile;
