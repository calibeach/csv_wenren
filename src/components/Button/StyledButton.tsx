import styled from "styled-components";

const StyledButton = styled.button.attrs({ type: "button" })`
  background: linear-gradient(45deg, #e31111, #e67070);
  border: none;
  border-radius: 30px;
  height: 50px;
  width: 35%;
  border: 1px solid #ccc;
  background-color: #fff;
  color: white;
  font-family: "Microsoft YaHei", sans-serif;
  padding: 12px 24px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(1);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export { StyledButton };
