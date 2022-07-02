import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Mostrar } from "./components/Mostrar";

import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          
          <Route path="/register" element={<Register />} />
          <Route path="/mostrar" element={<Mostrar />} />
          
          
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
