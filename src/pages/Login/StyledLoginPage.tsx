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
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  height: 32px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #f0d49a;
  }
`;

const StyledButton = styled.button`
  background-color: transparent; /* Transparent background */
  border: 2px solid #f0d49a;
  color: #fff; /* Gold text */
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 16px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 16px; /* 20px from the bottom of the form */
  right: 20px; /* 20px from the right edge of the form */

  &:hover {
    background-color: #b08d3d; /* Soft gold */
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
    color: black;
  }
`;

const StyledForm = styled.form`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  margin-top: 12%; /* Adjust this value as needed */
  position: relative;
  height: 12%;
  /* Embossed effect using box-shadow */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2),
    /* Soft shadow to create depth */ 0px 6px 20px rgba(0, 0, 0, 0.1); /* Larger shadow for the raised look */

  /* Optionally, add a subtle border to enhance the effect */
  border: 1px solid rgba(0, 0, 0, 0.1); /* Light border */
`;

export { StyledLoginPageContainer, StyledInput, StyledForm, StyledButton };
export default StyledLoginPageContainer;
