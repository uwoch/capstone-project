import styled from "styled-components";
import Image from 'next/image';
import { CldUploadButton } from "next-cloudinary";

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
  border: 1px solid grey;
  margin: 0.5rem;
  height: 4vh;
  width: 60vw;
`;

export const StyledSaveButton = styled.button`
  background-color: #c1ffc1;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 1rem 0.5rem 0.5rem 0.5rem;
  cursor: pointer;
`;

export const StyledCldUploadButton = styled(CldUploadButton)`
  background-color: #f0f0f0;
  font-size: 1rem;
  color: #333;
  border: none;
  border-radius: 10px;
  padding: 8px 16px;
  margin: 20px;
  cursor: pointer;
  background-color: orange;
  &:hover {
    background-color: #f0f0f0;
  }
`;