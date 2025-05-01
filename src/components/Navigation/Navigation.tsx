import "./Navigation.scss";
import { useCallback } from "react";
import { useContentful } from "../../hooks/useContentful";
import { ModalContext, LanguageContext } from "../../utils/contexts";
import { useContext } from "react";
import Preloader from "../Preloader/Preloader";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../LanguageModule/LanguageToggle/LanguageToggle";
import { useNavigate } from "react-router-dom";
import { 
  LogoAndBrand,
  ContactButton,
  queryData,
  queryKeyData,
  NavigationListOfItems,
} from "./Navigation.shared";


/**
 *
 * @returns
 */
const Navigation = () => {
  // For extracting localised content from "i18n.ts" file based on the currently active locale
  const { t } = useTranslation();

  // Getting the currently active locale...
  const activeLang = useContext(LanguageContext);

  // For getting modal-based fucnctionality
  const modalContext = useContext(ModalContext);

  // Processing route nativation
  const navigate = useNavigate();
  const handleNavClick = useCallback(
    (route: string) => {
      navigate(`${route}`); // Change the route
      const section = document.getElementById(route); // Get the target section
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the section
      }
    },
    [navigate]
  );

  /** 
   * Fetching ContentFul data in all languages, and handling errors and loading time 
   * ----------------------
  */
  const { data, isLoading, error } = useContentful({
    query: queryData,
    variables: { locale1: "en-CA", locale2: "fr" },
    queryKey: queryKeyData,
  });

  // Display a placeholder is there is no modal context or the data fetching is not yet completed
  if (!modalContext || isLoading) {
    return <Preloader />;
  }
  // Display an error messaye if there was problem fetching data
  if (error) return <p>{t("ErrorLoadingPosts")}</p>;
  /** 
   * Fetching ContentFul data in all languages, and handling errors and loading time 
   * ----------------------
  */

  // Otherwise, destructure the context
  const { openModal } = modalContext;

  return (
    <nav
      id="main-nav"
      className="Navigation navbar navbar-expand-lg w-100 fixed-top dark"
    >
      <div className="container">
        <LogoAndBrand onClick={() => handleNavClick("welcome")} />
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
          {/** Conditionally renders the navigation based on the active language */}
          {data && activeLang && data[activeLang]?.items?.length > 0 && (
            <NavigationListOfItems
              items={data[activeLang].items}
              handleClick={handleNavClick}
            />
          )}

          <LanguageToggle className="mx-auto" />

          <ContactButton
            onClick={() => {
              openModal({
                dataType: "pageSections",
                dataId: "7",
              });
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
