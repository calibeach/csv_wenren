import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { StyledSelectContainer, StyledSelectButton } from "./StyledSelect";

const Select: React.FC = React.memo(() => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();

  const handleClick = useCallback(
    (scriptType: string) => {
      setIsSelected(true);
      localStorage.setItem("script", scriptType);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
    [navigate]
  );

  return (
    <StyledSelectContainer>
      <StyledSelectButton
        isSelected={isSelected}
        onClick={() => handleClick("simplified")}
      >
        简
      </StyledSelectButton>
      <StyledSelectButton
        isSelected={isSelected}
        onClick={() => handleClick("traditional")}
      >
        繁
      </StyledSelectButton>
    </StyledSelectContainer>
  );
});

export default Select;
