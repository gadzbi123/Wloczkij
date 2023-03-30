import { Link } from "react-router-dom";
import { ReactComponent as WloczykijLogo } from "../../assets/spirala.svg";
import { LinksContainer, NavigationContainer } from "./navigation.styles";
const Navigation = () => {
  return (
    <NavigationContainer>
      <Link to="/">
        <WloczykijLogo />
      </Link>
      <LinksContainer>
        <Link to="/shop">Sklep</Link>
        <Link to="/about">O mnie</Link>
      </LinksContainer>
    </NavigationContainer>
  );
};
export default Navigation;
