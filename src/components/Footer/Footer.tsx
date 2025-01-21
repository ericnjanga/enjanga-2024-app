import "./Footer.scss";
import { usePageSection } from "../../hooks/useAPI";
import { ModalContext } from "../../utils/contexts";
import { useContext } from "react";
import Heading from "../Heading/Heading";
import Preloader from "../Preloader/Preloader";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { getCurrentLanguage } from "../../utils/functions";

const Footer = () => {
  const sectionData = usePageSection("5");
  const context = useContext(ModalContext);
  const { t } = useTranslation();
  const currentLang = getCurrentLanguage();

  if (!context) {
    // return if the context is empty
    return <Preloader />;
  }

  // Otherwise, destructure the context
  const { openModal } = context;

  // Otherwise, destructure the context
  return (
    <footer className="Footer sc-block">
      <div className="container text-center">
        <Heading h="4" className="name mb-0">
          {!sectionData ? <Preloader /> : sectionData.title[currentLang]}
        </Heading>

        <div
          className="title mb-0"
          dangerouslySetInnerHTML={{
            __html: sectionData ? sectionData.description[currentLang] : "",
          }}
        ></div>

        <Button
          variant="transparent"
          icon="chat"
          ariaLabel="Open contact form to get in touch with Eric Njanga"
          onClickHandler={() => {
            openModal({
              dataType: "pageSections",
              dataId: "7",
            });
          }}
        >
          {t("contactCTA")}
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
