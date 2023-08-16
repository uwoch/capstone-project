import { CldUploadButton } from "next-cloudinary";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  align-items: center;
  padding: 20px;
`;

export const StyledLabel = styled.label`
  margin: 4px;
  font-size: 1rem;
`;

export const StyledInput = styled.input`
  border-radius: 2px;
  border: 1px solid #000;
  width: 230px;
  height: 30px;
  margin: 8px;
`;

export const StyledSaveButton = styled.button`
  background-color: #f0f0f0;
  font-size: 1rem;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 20px;
  cursor: pointer;
  &:hover {
    background-color: #6ffffa;
  }
`;
export const StyledGoBackButton = styled.button`
  background-color: #f0f0f0;
  font-size: 1rem;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 20px;
  cursor: pointer;
  &:hover {
    background-color: #6ffffa;
  }
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
export const StyledHeading = styled.h2`
  text-align: center;
  color: black;
`;

