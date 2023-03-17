import {
  HeaderContainer,
  WloczkaStyled,
  HeadingTextContainer,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeadingTextContainer>
        <h1>Przeglądanie projektów z włóczki, nigdy nie było prostrze. </h1>
        <p>
          Nowoczesne i innowacyjne projekty idealne na prezent dla każdej
          jesieniary. Możliwość wyboru kolorów.
        </p>
      </HeadingTextContainer>
      <WloczkaStyled />
    </HeaderContainer>
  );
};
export default Header;
