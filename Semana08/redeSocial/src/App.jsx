import { useContext, useState } from "react";
import Home from "./Pages/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Pages/Login/Login";
import Contato from "./Pages/Contato/Contato";
import Perfil from "./Pages/Perfil/Perfil";
import { AuthContext } from "./Components/Context/AuthContext";

function App() {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/"  element={isLoggedIn ? <Home/> : <Navigate to = "/login"/>} />
          <Route path="login" element={!isLoggedIn ? <Login/> : <Navigate to= "/"/>} />
          <Route path="contato" element={isLoggedIn ? <Contato/> : <Navigate to = "/login"/>} />
          <Route path="perfil" element={isLoggedIn ? <Perfil/> : <Navigate to= "/login" />} />
          {/* //login perfil e contato */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
