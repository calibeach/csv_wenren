import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Select from "./pages/Select/Select.tsx";
import LoginPage from "./pages/Login/LoginPage.tsx";
import AuthProvider from "./context/AuthContext.tsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />
        <Route
          path="/select"
          element={
            <ProtectedRoute>
              <Select />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  </AuthProvider>
);
