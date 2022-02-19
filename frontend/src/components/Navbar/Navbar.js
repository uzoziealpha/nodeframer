import React from "react";
//import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import  { Logo } from "../../components/Navbar/Logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./NavLink";




const NavbarContainer = styled.div`
   width: 100%;
   height: 60px;
   box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
   display: flex;
   align-items: center;
   padding: 0 1.5em;
   background: black;
   
`;

const LeftSection = styled.div`
   display flex;
`;

const MiddleSection = styled.div`
   display: flex;
   flex: 2;
   height: 100;
  justify-content: center;
`;

const RightSection = styled.div`
    display: flex;
`;

export function Navbar(props) {
 //  const isMobile = useMediaQuery({ maxwidth: DeviceSize.mobile})



    return (
    <NavbarContainer>
      <LeftSection>
        <Logo/>
      </LeftSection>
    <MiddleSection>
       <NavLinks/>
    </MiddleSection>
    <RightSection>
       <Accessibility/> 
    </RightSection>
    </NavbarContainer>
    )
}