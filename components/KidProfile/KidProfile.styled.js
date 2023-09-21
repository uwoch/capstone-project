import styled from "styled-components";
import Image from "next/image";

export const StyledArticle = styled.article`
  align-items: center;
  padding: 1.2rem;
  text-align: center;
  overflow-wrap: break-word;
  margin-top: 8rem;
  margin-bottom: 4rem;
`;

export const StyledEventList = styled.ul`
  list-style-type: none;
  justify-items: center;
  padding: 0rem;
  align-items: center;
`;

export const StyledName = styled.h2`    
  text-align: center;
`;

export const StyledBirthDate = styled.h3`    
  text-align: center;
  margin-top: -1rem;
`;

export const StyledImage = styled(Image)`
    width: 80%;
    height: auto;
    border-radius: 0.5rem;
    margin-bottom: -0.8rem;

    @media (min-width: 600px){
        width: 60%;
        height: auto;
    }

    @media (min-width: 900px){
        width: 40%;
        height: auto;
    }

    @media (min-width: 1200px){
        width: 40%;
        height: auto;
    }
    @media (min-width: 1536px){
        width: 20%;
        height: auto;
    }

`;
export const StyledKidDetails = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeading = styled.h3`
`;
export const StyledKidCard = styled.section`
box-shadow: 0px 1px 5px -2px #7f8487;
  border-radius: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 3rem;
`;
