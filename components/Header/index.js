import { StyledHeader, StyledHomeLink } from "./Header.styled";
import Image from "next/image";
import logokidslog from "../../resources/logokidslog.png";

export default function Header() {
    return (
        <StyledHeader>
        <StyledHomeLink href={"/"}>
        <Image
          src={logokidslog}
          alt="Logo Kids-Log"
        />
        </StyledHomeLink>
        </StyledHeader>
    );
}