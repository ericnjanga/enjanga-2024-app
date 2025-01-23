import "./Footer.scss";
import { usePageSection } from "../../hooks/useAPI";
import { ModalContext } from "../../utils/contexts";
import { useContext } from "react";
import Heading from "../Heading/Heading";
import Preloader from "../Preloader/Preloader";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../utils/contexts";

const Footer = () => {
  const sectionData = usePageSection("5");
  const context = useContext(ModalContext);
  const activeLang = useContext(LanguageContext);
  const { t } = useTranslation();

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
        <Heading h="4" className="name">
          {!sectionData ? <Preloader /> : sectionData.title[activeLang]}
        </Heading>

        <div
          className="title"
          dangerouslySetInnerHTML={{
            __html: sectionData ? sectionData.description[activeLang] : "",
          }}
        ></div>

        <Button
          variant="transparent"
          icon="chat"
          ariaLabel={t("contactCTAalt")}
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
