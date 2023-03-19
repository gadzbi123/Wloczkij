import { Outlet } from "react-router-dom";
import { BackgroundContainer } from "./layout.styles";
import Navigation from "../navigation/navigation.route";
const Layout = () => {
  return (
    <>
      <BackgroundContainer>
        <Navigation />
        <Outlet />
      </BackgroundContainer>
    </>
  );
};

export default Layout;
