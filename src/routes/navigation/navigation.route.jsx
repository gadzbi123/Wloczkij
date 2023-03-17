import { Link } from "react-router-dom";
import { ReactComponent as WloczykijLogo } from "../../assets/spirala.svg";
import { NavigationContainer, LinksContainer } from "./navigation.styles";
import { BackgroundContainer } from "../header/header.styles";
const Navigation = () => {
  return (
    <NavigationContainer>
      <Link to="/">
        <WloczykijLogo />
      </Link>
      <LinksContainer>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </LinksContainer>
    </NavigationContainer>
  );
};
export default Navigation;
