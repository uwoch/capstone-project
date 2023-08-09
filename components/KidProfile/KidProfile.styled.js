import styled from "styled-components";

export const StyledKidProfile = styled.article`
  align-items: center;
  padding: 1.2rem;
  text-align: center;
  transition: 0.5s;

  img {
    width: 200px;
   height: 200px;
  }
`;

export const StyledGoBackButton = styled.button`
  background-color: #f0f0f0;
  font-size: 1rem;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #6ffffa;
  }
`;
