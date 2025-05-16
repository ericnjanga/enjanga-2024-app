
import PanelFrame from "../components/PanelFrame/PanelFrame";
import ProjectThumb from "../components/ProjectThumb/ProjectThumb";
import { PanelGridListProps, PortfolioListProps } from "../models";
import { LanguageContext } from "./contexts";
import { useContext } from "react";
import { ProjectProps, ExpertiseSpecificationProps } from "../models";


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



/**
 * Returns an array where each entry contains an EN and FR version, this is more conveniant for rendering.
 * 
 * Reshaping @data 
 * from: {en: { items:[{...},{...}, ..., {...}] }, fr: { items:[{...},{...}, ..., {...}] }}     
 * to: [{en:{...}, fr:{...}}, {en:{...}, fr:{...}}, ...] 
 */
interface reshapedDataProps {
  en: {
    items: ProjectProps[] | ExpertiseSpecificationProps[]
  },
  fr: {
    items: ProjectProps[] | ExpertiseSpecificationProps[]
  }
}
export const dataReshaper = (data: reshapedDataProps) => {
  const newShape = data?.en?.items.map((enItem, index: number) => ({
    en: enItem,
    fr: data?.fr?.items[index]
  }));

  return newShape;
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




export const PortfolioList: React.FC<PortfolioListProps> = ({ itemsList }: PortfolioListProps) => { 

  // Getting the currently active locale...
  const activeLang = useContext(LanguageContext);

  console.log('******** itemsList = ', itemsList);

  // const sortedList = itemsList?.slice().sort((a, b) => b.id.localeCompare(a.id));

  return (
    <>
      {itemsList && activeLang && itemsList.map((project, index) => { 
        return (
          <ProjectThumb
            key={index}
            {...project[activeLang]}
            className="slider-item"
          />
        );
      })}
    </>
  );
};