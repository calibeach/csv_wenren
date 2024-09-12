import React, { useMemo, useEffect, useRef } from "react";
import { StyledWinningTile } from "./StyledWinningTile";
import HanziWriter from "hanzi-writer";

interface WinningTileProps {
  winningCharacter?: string | null;
}

const WinningCharacterTile: React.FC<WinningTileProps> = ({
  winningCharacter,
}) => {
  const writerRef = useRef<HTMLDivElement>(null);
  const writerConfig = useMemo(
    () => ({
      width: 60,
      height: 60,
      padding: 2,
      showOutline: false,
      showCharacter: true,
    }),
    []
  );
  useEffect(() => {
    const currentRef = writerRef.current;
    let writer: HanziWriter | null = null;
    if (winningCharacter && currentRef) {
      writer = HanziWriter.create(currentRef, winningCharacter, writerConfig);
    }
    return () => {
      if (writer && currentRef) {
        currentRef.innerHTML = ""; // Clear the previous instance
      }
    };
  }, [winningCharacter, writerConfig]);
  return (
    <StyledWinningTile>
      <div ref={writerRef} className="character"></div>
    </StyledWinningTile>
  );
};

export { WinningCharacterTile };
export default WinningCharacterTile;
