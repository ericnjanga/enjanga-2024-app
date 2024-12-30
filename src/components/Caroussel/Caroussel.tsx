import "./Caroussel.scss"; 
import PanelGrid1 from "../PanelGrid1/PanelGrid1";

const Caroussel = () => {
  return (
    <section className="Caroussel sc-block">
      <div className="container">
        
      <PanelGrid1 pageSectionId={'2'} />
      <PanelGrid1 pageSectionId={'2'} />
      <PanelGrid1 pageSectionId={'2'} />
        {/* <PanelGrid1 pageSectionId={'6'} /> */}
     
      </div>
    </section>
  );
};

export default Caroussel;
