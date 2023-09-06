import styled from "styled-components";
import Link from "next/link.js";

export const StyledHeader = styled.header`
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 8rem;
  border-radius: 0rem 0rem 1rem 1rem;
`;

export const StyledHomeLink = styled(Link)`
  text-decoration: none;
  `;