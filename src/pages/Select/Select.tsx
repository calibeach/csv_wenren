import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { StyledSelectContainer } from "./StyledSelect";

const Select: React.FC = React.memo(() => {
  const navigate = useNavigate();

  const handleClick = useCallback(
    (scriptType: string) => {
      localStorage.setItem("script", scriptType);
      navigate("/");
    },
    [navigate]
  );

  return (
    <StyledSelectContainer>
      <button onClick={() => handleClick("simplified")}>Simplified</button>
      <button onClick={() => handleClick("traditional")}>Traditional</button>
    </StyledSelectContainer>
  );
});

export default Select;
