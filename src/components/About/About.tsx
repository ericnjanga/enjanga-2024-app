import "./About.scss";
import { usePageSection } from "../../hooks/useAPI";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

const About = () => {
  const sectionData = usePageSection("4");
  const { t } = useTranslation();

  return (
    <section className="About">
      <div className="container">
        <img
          className="About-img img-fluid img-poster"
          src="images/eric-njanga-2.png"
          alt=""
        />

        <article className="About-article">
          <Heading h="2" className="name About-title pageSection-title">
            {!sectionData ? "..." : sectionData.title}
          </Heading>
          <div
            className="About-description"
            dangerouslySetInnerHTML={{
              __html: sectionData ? sectionData.description : "",
            }}
          ></div>
          <footer>
            <Button
              icon="chat"
              variant="secondary"
              neonVersion={true}
              target="_blank"
              href="https://www.linkedin.com/in/ericnjanga/"
            >
              {t("LinkedInCTA")}
            </Button>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default About;
