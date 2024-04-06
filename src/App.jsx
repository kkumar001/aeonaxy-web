import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

const App = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignIn = () => {
    setIsSignIn(true);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<SignUp />}/>
        <Route exact path="/profile" element={<Profile setSignIn={handleSignIn}/>}/>
        <Route exact path="/" element={isSignIn ? <Home /> : <Navigate to="/signup" />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;