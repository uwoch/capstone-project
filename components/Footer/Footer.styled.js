import styled from "styled-components";
import Link from "next/link.js";

export const StyledFooter = styled.footer`
  bottom: 0;
  left: 0;
  right: 0;
  height: 4rem;
  text-align: center;
  background-color: #f0f0f0;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  border-radius: 1em 1em 0em 0em;
`;

export const StyledHomeLink = styled(Link)`
  text-decoration: none;
  `;