import AboutBody from "../components/AboutBody";
import AboutNav from "../components/AboutNav";
import CocktailFooter from "../components/cocktailFooter";

function About() {
    return (
        <div className="about">
            <AboutNav />
            <AboutBody />
            <CocktailFooter />
        </div>
      );
}

export default About;