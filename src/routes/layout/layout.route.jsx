import { Outlet } from "react-router-dom";
import { BackgroundContainer } from "./layout.styles";
import Navigation from "../navigation/navigation.route";
const Layout = () => {
  return (
    <div>
      <BackgroundContainer>
        <Navigation />
        <Outlet />
      </BackgroundContainer>
    </div>
  );
};

export default Layout;
