import { useEffect, useRef } from "react";
import HanziWriter from "hanzi-writer";

import { StyledNonAnimatedTile } from "./StyledNonAnimatedTile";

interface NonAnimatedTileProps {
  nonAnimatedTile: string | null;
  height: number;
  width: number;
}

const NonAnimatedTile: React.FC<NonAnimatedTileProps> = ({
  nonAnimatedTile,
  height,
  width,
}) => {
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let writer: HanziWriter | null = null;

    if (nonAnimatedTile && characterRef.current) {
      // Clear the previous character if any
      characterRef.current.innerHTML = "";

      writer = HanziWriter.create(characterRef.current, nonAnimatedTile, {
        width: width,
        height: height,
        padding: 1,
      });
    }

    // Cleanup function to remove the writer instance
    return () => {
      if (writer) {
        writer.hideCharacter();
        writer = null;
      }
    };
  }, [nonAnimatedTile]);
  return (
    <StyledNonAnimatedTile>
      <div ref={characterRef} />
    </StyledNonAnimatedTile>
  );
};

export { NonAnimatedTile };
export default NonAnimatedTile;
