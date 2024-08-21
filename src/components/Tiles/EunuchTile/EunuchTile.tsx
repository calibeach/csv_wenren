import React, { useEffect, useRef } from "react";
import HanziWriter from "hanzi-writer";
import { StyledEunuch } from "./StyledEunuchTile";

interface EunuchTileProps {
  eunuchCharacter: string;
  onEunuchClick: (eunuchCharacter: string) => void;
}

const EunuchTile: React.FC<EunuchTileProps> = ({
  eunuchCharacter,
  onEunuchClick,
}) => {
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let writer: HanziWriter | null = null;

    if (eunuchCharacter && characterRef.current) {
      // Clear the previous character if any
      characterRef.current.innerHTML = "";

      writer = HanziWriter.create(characterRef.current, eunuchCharacter, {
        width: 120,
        height: 120,
        padding: 5,
      });
    }

    // Cleanup function to remove the writer instance
    return () => {
      if (writer) {
        writer.hideCharacter();
        writer = null;
      }
    };
  }, [eunuchCharacter]);

  const handleClick = () => {
    if (eunuchCharacter) {
      onEunuchClick(eunuchCharacter);
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
