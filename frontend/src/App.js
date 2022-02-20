//import logo from './logo.svg';
import "./App.css";
import styled from "styled-components";
//import  ParticleBackground  from './ParticleBackground';
import { Navbar } from "./components/Navbar/Navbar";
import { RoboCardClosed } from "./components/roboCards/closelidcard";
import { RoboCardOpen } from "./components/roboCards/openlidcard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <>
   
      <NavContainer>
        <Navbar />
      </NavContainer>


      <CardContainer>
        <RoboCardClosed />
        <RoboCardOpen />
      </CardContainer>
   
      <Router>
        <Routes>
          <Route path="/closelid" element={RoboCardClosed} />
          <Route path="/openlid" element={RoboCardOpen} />
        </Routes>
      </Router>
  
    </>



  );
}

export default App;
