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
  border-radius: 0em 0em 1em 1em;
  padding: 15px;
`;

export const StyledHomeLink = styled(Link)`
  text-decoration: none;
  `;