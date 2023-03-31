import { useEffect, useState } from "react";
import { CONTACT_ADMINISTRATOR } from "../../static/variables";
import { FooterContainer } from "./footer.styles";
const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2023);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <FooterContainer>
      <p>Kacper Nitkiewicz</p>
      <p>© {currentYear}</p>
      <p>Wszystkie prawa zastrzeżone</p>
      <p>Kontakt z adminem: {CONTACT_ADMINISTRATOR}</p>
    </FooterContainer>
  );
};
export default Footer;
