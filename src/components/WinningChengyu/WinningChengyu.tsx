import { StyledWinningChengyu } from "./StyledWinningChengyu";
import { WinningCharacterTile } from "../Tiles/WinningTile/WinningTile";

interface WinningChengyuProps {
  winningChengYu: string;
}

const WinningChengyu: React.FC<WinningChengyuProps> = ({ winningChengYu }) => {

  return (
    <StyledWinningChengyu>
      {winningChengYu.split("").map((char, index) => (
        <WinningCharacterTile key={index} winningCharacter={char} />
      ))}
    </StyledWinningChengyu>
  );
};

export { WinningChengyu };
export default WinningChengyu;
