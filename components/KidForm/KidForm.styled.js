import styled from "styled-components";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image.js";

export const StyledForm = styled.form`
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
  margin-bottom: 10rem;
  margin-top: 10rem;
`;
export const StyledHeading = styled.h3`
  text-align: center;
`;
export const StyledLabel = styled.label`
  margin: 0.1rem;
`;
export const StyledInput = styled.input`
  border-radius: 0.5rem;
  border: 1px solid #808080;
  margin: 0.5rem;
  height: 4vh;
  width: 60vw;
  color: #016e82;
`;
export const StyledSaveButton = styled.button`
  background-color: #ffffff;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem ;
  margin: 0.5rem 0.5rem 1rem 0.5rem;
  cursor: pointer;
`;
export const StyledCldUploadButton = styled(CldUploadButton)`
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0.8rem 0.5rem 1.5rem 0.5rem;
  cursor: pointer;
  background-color: #02aece;
  color: #ffffff;
`;
export const StyledImage = styled(Image)`
    border-radius: 0.5rem;
    width: 40%;
    height: auto;

    @media (min-width: 600px){
        width: 40%;
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
