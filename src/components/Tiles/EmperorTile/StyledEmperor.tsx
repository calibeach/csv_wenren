import styled from "styled-components";

const StyledEmperor = styled.div`
  width: 100px;
  height: 150px;
  background-color: transparent;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;

  .text {
    font-size: 40px;
    font-family: "KaiTi", serif;
    color: #1c1c1c;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3),
      -1px -1px 2px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    opacity: 0; /* Hide the character initially */
    transition: opacity 0.5s ease-in-out, transform 0.2s ease-in-out; /* Transition opacity and smooth scaling */
  }

  .text.visible {
    opacity: 1; /* Show the character when it becomes visible */
  }

  .text.hidden {
    opacity: 0; /* Keep the character hidden */
  }

  &:hover .text {
    transform: scale(1.05); /* Slight scaling on hover for the text */
  }
`;

export { StyledEmperor };
