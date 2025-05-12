/**
 * Fetches
 */

import { useExpertises } from "../../hooks/useAPI";
import InformationCard1 from "../InformationCard1/InformationCard1";
import "./PanelFrame.scss";
import PanelHero from "../PanelHero/PanelHero";
import { useEffect, useContext } from "react";
import Preloader from "../Preloader/Preloader";
import { ModalContext } from "../../utils/contexts";

interface PanelFrameProps {
  pageSectionId: string;
  className?: string;
}

const PanelFrame: React.FC<PanelFrameProps> = ({
  pageSectionId,
  className,
}) => {
  const expertiseList = useExpertises(pageSectionId);
  const context = useContext(ModalContext);

  /** 
   * TODO
   * --------------------
   * - NEEDS TO BE OPTIMIZED FOR REUSE IN OTHER COMPONENTS
   */
  // Assigning a click event listerner to all links of a specific class
  useEffect(() => {
    // Adding event listener to handle clicks on ...
    const handleClickLinks = (event: MouseEvent) => {
      const target = event.target as HTMLElement; // Typecast the target to HTMLElement(or more specifictype)
      if (target && target.classList.contains("open-modal")) {
        event.preventDefault(); // Prevent the default behavior (e.g., navigation) 

        // Only trigger the modal if an ID is provided
        if (target.id !== '') {
          openModal({
            dataType: "conceptDefs",
            dataId: target.id, // Pass the id of the clicked element 
          });
        }
      }
    };

    // Attach the event listener to the container
    document.addEventListener('click', handleClickLinks);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('click', handleClickLinks);
    };
  }, []);

  if (!context) {
    // return if the context is empty
    return <Preloader />;
  }

  // Otherwise, destructure the context
  const { openModal } = context;

  return (
    <section className={`PanelFrame ${className}`}>
      <div className="container">
        <PanelHero id={pageSectionId} />

        <div className="content-grid">
          {expertiseList &&
            expertiseList.map((expertise, index) => {
              return (
                <InformationCard1
                  key={index}
                  {...expertise}
                  className="PanelFrame-item"
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default PanelFrame;
