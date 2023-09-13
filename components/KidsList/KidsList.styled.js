import styled from "styled-components";
import Image from "next/image.js";
import Link from "next/link.js";

export const StyledListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

`;
export const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  padding: 0rem;

`;
export const StyledListItem = styled.li`
  text-align: center;
`;

export const StyledImage = styled(Image)`
    width: 80%;
    height: auto;
    border-radius: 0.5rem;
    margin-bottom: -0.8rem;
    
    @media (min-width: 600px){
        width: 90%;
        height: auto;
    }

    @media (min-width: 900px){
        width: 100%;
        height: auto;
    }
`;

export const StyledParagraph = styled.p`
  text-align: center;
  font-weight: bold;
  `;

export const StyledLink = styled(Link)`
  color: #016e82;
  text-decoration: none;
  `;

export const StyledHeadline = styled.h2`
  text-align: center;
  margin-top: 10rem;
  font-weight: bold;
  `;

export const StyledSubHead  = styled.p`
  text-align: center;
  color: #016e82;
  max-width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  font-weight: bold;
  `;

export const StyledAddChildLink = styled(Link)`
  text-decoration: none;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  `;

export const StyledContainer = styled.section`
display: flex;
flex-flow: column wrap;
align-content: center;
align-items: center;
padding: 0.5rem;
box-shadow: 0px 1px 5px -2px #7f8487;
border-radius: 0.5rem;
max-width: 80%;
margin-left: 10%;
margin-right: 10%;
margin-bottom: 5rem;
margin-top: 10rem;
`;

export const StyledStartImage = styled(Image)`
    width: 90%;
    height: auto;
    border-radius: 0.5rem;
    padding-top: 1rem;

    @media (min-width: 1200px){
        width: 80%;
        height: auto;
    }
    @media (min-width: 1536px){
        width: 80%;
        height: auto;
    }
  
`;