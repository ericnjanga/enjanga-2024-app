import i18n from 'i18next';
import PanelFrame from "../components/PanelFrame/PanelFrame";
import ProjectThumb from "../components/ProjectThumb/ProjectThumb";
import { PanelGridListProps, PortfolioListProps } from "../models";

// Returns the currently active language on the app
export const getCurrentLanguage = (): string => {
  // Get the browser's language (might be in language-region format, e.g., 'en-US')
  let language = i18n.language || 'en'; // Default to 'en' if no language is set

  // Extract just the language code (e.g., 'en', 'fr', etc.)
  language = language.split('-')[0];

  // Update i18n.language to be just the language code
  i18n.language = language;

  return language;
};

// Activates navigation links by assigning a specific css class
export const setLinkActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? "link-active" : "";

// Encapsulate the error feedback message
export const logErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.log(`An unknown error occured `, error);
  }
};




export const PanelGridList: React.FC<PanelGridListProps> = ({ idsList }) => {
  const availableThemes = ["theme-1", "theme-2", "theme-3"];

  return (
    <>
      {idsList.map((id, index) => {
        const themeClass = availableThemes[index] || "default-theme";

        return (
          <PanelFrame
            key={id}
            pageSectionId={id}
            className={`sc-block slide-item ${themeClass}`}
          />
        );
      })}
    </>
  );
};




export const PortfolioList: React.FC<PortfolioListProps> = ({ itemsList }) => { 

  const sortedList = itemsList?.slice().sort((a, b) => b.id.localeCompare(a.id));

  return (
    <>
      {sortedList && sortedList.map((project, index) => { 

        return (
          <ProjectThumb
            key={index}
            {...project}
            className="slider-item"
          />
        );
      })}
    </>
  );
};