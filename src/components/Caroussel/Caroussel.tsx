import "./Caroussel.scss";
import ExpertisePanel from "../ExpertisePanel/ExpertisePanel";

const Caroussel = () => {
  return (
    <section className="Caroussel">
      <div className="container">
        
        <ExpertisePanel pageSectionId={'2'} />
        <ExpertisePanel pageSectionId={'6'} />
     
      </div>
    </section>
  );
};

export default Caroussel;
