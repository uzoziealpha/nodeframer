import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RoboImg from "../../../src/assets/images/robo2.gif";



const CardWrapper = styled.div`
  width: 100%;
  perspective: 1500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
width: 230px;
height: 350px;
top: 120px;
display: flex;
flex-direction: column;
border-radius: 25px;
box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
background-color: #fff;
box-shadow: 10px 10px 5px #aaaaaa;

color: #ffff;
position: relative;
cursor: grab;

`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  postion: relative;
  width: 5px;
  height: 300px;
  top: -4.2em;
  right: -9em;
  z-index: 5;
  background-color: red;
  border-radius: 50%;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const RoboWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Robo = styled(motion.div)`
  width: auto;
  height: 295px;
  z-index: 99;
  user-select: none;
  margin-right: 3em;
  margin-top: 2em;
  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;

const Button = styled.button`
  padding: 5px 5px;
  background-color: #;
  padding: 5px 15px;
  font-size: 16px;
  font-weight: 700;
  outline: 0;
  box-shadow: 0px 2px 2px red;
  cursor: pointer;
  box
  transition: all 290ms ease-in-out;
  text-decoration: none;


  &:hover {
    background-color: green;
    color: #fff;
    border: 3px solid #fbbe01;
  }
`;





export function RoboCardClosed(props) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-20, 30]);

   useEffect( () => {
      fetchItems();
   }, []);

   const [items, setItems] = useState([]);

   const fetchItems = async() => {
      const data = await fetch('/closelid');
      const items = await data.json();
      setItems(items);
   }

   



  return (

     




    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
      
      <div>
       <form>
       <Button class="button is-success" onclick={RoboCardClosed}>
          <a href="/closelid" class="href"> 
        Close Lid
           </a>
       </Button>
       </form>
      </div>
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <RoboWrapper>
            <Robo
              style={{ x, y, rotateX, rotateY, rotate: "-20deg", z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src={RoboImg} alt="error" />
            </Robo>
          </RoboWrapper>
        </TopContainer>
      </CardContainer>
    </CardWrapper>
       
  
  );
}

//<Button Link to='///closelid'
//className="closelid//">
//Close Lid
//</Button>