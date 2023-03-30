import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SHOP_URL } from "../../static/variables";
import { AboutContainer, FaceBookStyledSvg } from "./about.styles";
const About = () => {
  const [age, setAge] = useState(0);
  const [crochetString, setCrochetString] = useState("");
  useEffect(() => {
    const currentTime = new Date();
    const birthDay = new Date(2007, 6, 6);
    const crochetStart = new Date(2020, 2, 20);
    const MILISEC_TO_YEARS = 31_556_952_000;

    const crochetTime = Math.floor(
      (currentTime - crochetStart) / MILISEC_TO_YEARS
    );
    if (crochetTime < 2) setCrochetString("roku");
    else setCrochetString(`${crochetTime} lat`);
    setAge(Math.floor((currentTime - birthDay) / MILISEC_TO_YEARS));
  }, []);

  return (
    <AboutContainer>
      <h1>O mnie</h1>
      <p>
        Jestem Ania. Mam {age} lat uczennicą Liceum w Gliwicach. Interesuje się
        ksiażkami i chetnie nawiązuje nowe znajomości. Szydełkowaniem zajmuję
        się od {crochetString}. Wystawiam swoje produkty na stronie{" "}
        <Link to={SHOP_URL} target="_blank">
          {SHOP_URL}
        </Link>
        .
      </p>
      <p>Uważaj, bo zaskocze cię swoimi szydełkowymi umiejetnościami!</p>
      <h2>Kontakt</h2>
      <div className="contact">
        <p>Anna Nitkiewicz</p>
        <Link to={"https://www.facebook.com/ania.nitkiewicz.5"} target="_blank">
          <FaceBookStyledSvg />
        </Link>
      </div>
    </AboutContainer>
  );
};
export default About;
