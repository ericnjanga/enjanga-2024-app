import "./Footer.scss";
import { usePageSection } from "../../hooks/useAPI";
import { ModalContext } from "../../utils/contexts";
import { useContext } from "react";
import Heading from "../Heading/Heading";
import Preloader from "../Preloader/Preloader";
import Button from "../Button/Button";

const Footer = () => {
  const sectionData = usePageSection("5");
  const context = useContext(ModalContext);

  if (!context) {
    // return if the context is empty
    return <Preloader />;
  }

  // Otherwise, destructure the context
  const { openModal } = context;

  // Otherwise, destructure the context
  return (
    <footer className="Footer">
      <div className="container text-center">
        <Heading h="4" className="name mb-0">
          {!sectionData ? <Preloader /> : sectionData.title}
        </Heading>

        <div
          className="title mb-0"
          dangerouslySetInnerHTML={{
            __html: sectionData ? sectionData.description : "",
          }}
        ></div>

        <Button
          icon='chat'
          ariaLabel="Open contact form to get in touch with Eric Njanga"
          onClickHandler={() => {
            openModal({
              renderingType: "contact",
              dataType: "",
              dataId: "",
            });
          }}
        >
          Get in touch with me
        </Button>
        {/* <button
          className="btn btn-link btn-sm item-icon-material item-icon-material-after chat-bubble js-chat-button"
          aria-label="Open contact form to get in touch with Eric Njanga"
                onClick={() => { 
                  openModal({ renderingType: 'contact', dataType: '', dataId: '' });
                }}
        >
          Get in touch with me
        </button> */}
      </div>
    </footer>
  );
};

export default Footer;
