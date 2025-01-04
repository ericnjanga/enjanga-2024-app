import PanelGrid1 from "../components/PanelGrid1/PanelGrid1";

export const setLinkActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? "link-active" : "";

export const logErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.log(`An unknown error occured `, error);
  }
};

interface PanelGridListProps {
  panelList: string[];
}

export const PanelGridList: React.FC<PanelGridListProps> = ({ panelList }) => {
  const availableThemes = ["theme-1", "theme-2", "theme-3"]; // Example themes

  return (
    <>
      {panelList.map((id, index) => {
        const themeClass = availableThemes[index] || "default-theme";

        return (
          <PanelGrid1
            key={id}
            pageSectionId={id}
            className={`sc-block slide-item ${themeClass}`}
          />
        );
      })}
    </>
  );
};
