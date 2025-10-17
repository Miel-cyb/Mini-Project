import React from "react";
import {  BrowserRouter as Router, Routes,Route } from "react-router-dom";
import About from "./components/About";
import Login from "./pages/Authentication/Login";
import Home from "./pages/Home";
import Register from "./pages/Authentication/Register";
import PrivateRoute from "./pages/Authentication/Private";
import Dashboard from "./pages/Dashboard";





function App(){
  return(
    <>

       <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
        </Routes>
       </Router>

    </>
  )

}
export default App;