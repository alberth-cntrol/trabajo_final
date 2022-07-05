import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Mostrar } from "./pages/Mostrar";
import { Perfil } from "./pages/Perfil";

import { Home } from "./pages/Home";
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
          <Route
            path="/mostrar"
            element={
              <ProtectedRoute>
                <Mostrar />
               

              </ProtectedRoute> 
            }
          />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute> 
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
