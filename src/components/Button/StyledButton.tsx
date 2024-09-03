import styled from "styled-components";

const StyledButton = styled.button.attrs({ type: "button" })`
  border: none;
  border-radius: 15px;
  height: 50px;
  width: 100px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
  font-family: "Microsoft YaHei", sans-serif;
  font-size: 16px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
    border-color: #999;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #e5e5e5;
    border-color: #888;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    transform: scale(0.98);
  }
`;

export { StyledButton };
