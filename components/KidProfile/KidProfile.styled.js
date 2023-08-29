import Link from "next/link";
import styled from "styled-components";

export const StyledKidCard = styled.article`
  align-items: center;
  padding: 1.2rem;
  text-align: center;
  transition: 0.5s;
  overflow-wrap: break-word;
  margin-top: 8rem;
  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
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
export const StyledEditButton = styled.button`
  background-color: #f0f0f0;
  font-size: 1rem;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 8px;
  cursor: pointer;
  &:hover {
    background-color: #6ffffa;
  }
`;

export const StyledBackLink = styled(Link)`
  background-color: #f0f0f0;
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 8px;
  cursor: pointer;
  &:hover {
    background-color: #6ffffa;
  }
`;

export const StyledEventList = styled.ul`
  list-style-type: none;
  justify-items: center;
  padding: 0px;
  align-items: center;
`;