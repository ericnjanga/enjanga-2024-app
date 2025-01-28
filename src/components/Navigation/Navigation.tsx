import "./Navigation.scss";
import { useNavOptions } from "../../hooks/useAPI";
import { ModalContext, LanguageContext } from "../../utils/contexts";
import { useContext } from "react";
import Preloader from "../Preloader/Preloader";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../LanguageModule/LanguageToggle/LanguageToggle";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { NavRoutes } from "../../models";

const Navigation = () => {
  const navItemsList = useNavOptions();
  const context = useContext(ModalContext);
  const { t } = useTranslation();
  const activeLang = useContext(LanguageContext);

  const navigate = useNavigate();

  const handleNavClick = (id: string, route: NavRoutes) => {
    navigate(route); // Change the route
    const section = document.getElementById(id); // Get the target section
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the section
    }
  };

  if (!context) {
    // return if the context is empty
    return <Preloader />;
  }

  // Otherwise, destructure the context
  const { openModal } = context;

  return (
    <nav
      id="main-nav"
      className="Navigation navbar navbar-expand-lg w-100 fixed-top dark"
    >
      <div className="container">
        <span className="navbar-brand" onClick={() => handleNavClick('welcome', '/welcome')}>
          <img
            src="/images/logo-light.png"
            className="img-fluid"
            alt="Eric Njanga"
          />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            {navItemsList.length &&
              navItemsList.map((navItem, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <span className="nav-link" onClick={() => handleNavClick(navItem.route, `${navItem.route}`)}>
                      {navItem.name[activeLang]}
                    </span>
                  </li>
                );
              })}
          </ul>

          <LanguageToggle className="mx-auto" />

          <ul className="navbar-nav">
            <li className="nav-item">
              <Button
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
