// src/components/Login.tsx
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import {
  StyledLoginPageContainer,
  StyledInput,
  StyledForm,
} from "./StyledLoginPage";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await authContext?.login(username, password);
      navigate("/");
    } catch (err) {
      console.log("Error", err);
      setError("Invalid credentials");
    }
  };

  return (
    <StyledLoginPageContainer>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <StyledInput
            title="Username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <StyledInput
            title="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </StyledForm>
    </StyledLoginPageContainer>
  );
};

export default LoginPage;
