import styled from "styled-components";
import Image from "next/image";

export const StyledKidCard = styled.article`
  align-items: center;
  padding: 1.2rem;
  text-align: center;
  overflow-wrap: break-word;
  margin-top: 10rem;
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
    width: 60%;
    height: 60%;
    border-radius: 0.5rem;
    margin-bottom: -0.8rem;
`;