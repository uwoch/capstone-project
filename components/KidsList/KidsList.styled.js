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

export const StyledSubHead  = styled.h3`
  text-align: center;
  color: #016e82;
  max-width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  `;

export const StyledAddChildLink = styled(Link)`
  text-decoration: none;
  align-items: center;
  text-align: center;
  `;

export const StyledContainer = styled.section`
display: flex;
flex-flow: column wrap;
align-content: center;
align-items: center;
padding: 0.5rem;
box-shadow: 0px 1px 5px -2px #7f8487;
border-radius: 0.5rem;
max-width: 60%;
margin-left: 20%;
margin-right: 20%;
margin-bottom: 10rem;
margin-top: 13rem;
`;