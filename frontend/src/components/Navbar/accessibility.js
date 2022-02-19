import React from "react";
import styled from "styled-components";







const ButtonWrapper = styled.ul`
   margin: 0;
   padding: 0;
   display: flex;
   height: 100%;
`;




const AccessibilityContainer = styled.div`
   display: flex;
`;


const Button = styled.div`
   border: 0;
   outline: 0;
   padding: 8px 1em;
   color: #fff;
   font-size: 14px;
   font-weight: 600;
   border-radius: 20px; 
   background-color: #6adf756;
   background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
   transition: all 240ms ease-in-out;
   cursor: pointer;



   &:hover {
       background-color: #00c9ff;
   }

   
`;

export function Accessibility(props) {
    return (
        <ButtonWrapper>
        <AccessibilityContainer>
        <Button onClick="waypointer">
            WAYPOINTER
            🗺️🦿</Button>

        </AccessibilityContainer>
        </ButtonWrapper>
    )
}

