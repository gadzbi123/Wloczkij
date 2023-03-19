import { useState } from "react";
import {
  HeaderContainer,
  WloczkaStyled,
  HeadingTextContainer,
} from "./header.styles";

const Header = () => {
  const [headingAnimationEnded, setHeadingAnimationEnded] = useState(false);
  return (
    <HeaderContainer>
      <HeadingTextContainer>
        <h1
          onAnimationEnd={() => {
            setHeadingAnimationEnded(true);
          }}>
          Przeglądanie projektów z włóczki, nigdy nie było prostrze.
        </h1>
        <p className={headingAnimationEnded ? "animate" : ""}>
          Nowoczesne i innowacyjne projekty idealne na prezent dla każdej
          jesieniary. Możliwość wyboru kolorów.
        </p>
      </HeadingTextContainer>
      <WloczkaStyled />
    </HeaderContainer>
  );
};
export default Header;
