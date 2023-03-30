import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import Navigation from "../navigation/navigation.route";
import { BackgroundContainer } from "./layout.styles";
const Layout = () => {
  return (
    <>
      <BackgroundContainer>
        <Navigation />
        <Outlet />
        <Footer />
      </BackgroundContainer>
    </>
  );
};

export default Layout;
