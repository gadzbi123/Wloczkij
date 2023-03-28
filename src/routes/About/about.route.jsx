import { Link } from "react-router-dom";
import { AboutContainer, FaceBookStyledSvg } from "./about.styles";
const About = () => {
  return (
    <AboutContainer>
      <h1>O mnie</h1>
      <p>
        Jestem uczennicą Liceum w Gliwicach. Interesuje się ksiażkami i chetnie
        nawiązuje nowe znajomości. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Libero reiciendis possimus praesentium quaerat modi
        repudiandae dolorum, non vitae nostrum nihil consequuntur eligendi illo
        totam. Maxime numquam eos est ipsam et?
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
