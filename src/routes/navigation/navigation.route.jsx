import { Link } from "react-router-dom";
import { ReactComponent as WloczykijLogo } from "../../assets/spirala.svg";
import { BackgroundContainer } from "../header/header.styles";
import { LinksContainer, NavigationContainer } from "./navigation.styles";
const Navigation = () => {
  return (
    <NavigationContainer>
      <Link to="/">
        <WloczykijLogo />
      </Link>
      <LinksContainer>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </LinksContainer>
    </NavigationContainer>
  );
};
export default Navigation;
