import styled from "styled-components";
import Link from "next/link.js";

export const StyledFooter = styled.footer`
  bottom: 0;
  left: 0;
  right: 0;
  height: 4rem;
  text-align: center;
  border-top: 1px #f0f0f0 solid;
  background-color: #ffffff;
  z-index: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
`;

export const StyledLink = styled(Link)`
 textdecoration: none;
 color: ${(props) => (props.$active ? "#f39f18" : "#016e82")};
`;
 