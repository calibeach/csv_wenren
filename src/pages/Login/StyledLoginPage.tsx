import styled from "styled-components";

const StyledLoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url("src/assets/misc/LoginImage4.jpg");
  background-size: cover; /* Add this line to stretch the image */
  background-position: center; /* Center the image */
  color: #1c1c1c;
`;
const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  height: 32px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const StyledButton = styled.button`
`;

const StyledForm = styled.form`
  margin-top: 10%; /* Adjust this value as needed */
`;
export { StyledLoginPageContainer, StyledInput, StyledForm };
export default StyledLoginPageContainer;
