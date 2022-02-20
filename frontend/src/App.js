//import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
//import  ParticleBackground  from './ParticleBackground';
import { Navbar }from './components/Navbar/Navbar';
import { RoboCardClosed } from './components/roboCards/closelidcard';
import { RoboCardOpen } from './components/roboCards/openlidcard';


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
   <div>
     <NavContainer>
     
     <Navbar/>
    </NavContainer>
    
    <CardContainer>
    <RoboCardClosed/>
    <RoboCardOpen/>
     </CardContainer>

   </div>

  
       
  

  );
}

export default App;
