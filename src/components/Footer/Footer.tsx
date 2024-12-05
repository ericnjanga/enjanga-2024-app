import "./Footer.scss";
import { usePageSection } from "../../hooks/useAPI";
import { ModalContext } from "../../utils/contexts";
import { useContext } from "react";

const Footer = () => {
  const sectionData = usePageSection("5");
  const context = useContext(ModalContext);

  if (!context) {
    // return if the context is empty
    return <div className="placeholder">... placeholder ...</div>;
  }

  // Otherwise, destructure the context
  const { openModal } = context; 

  // Otherwise, destructure the context 
  return (
    <footer className="Footer">
      <div className="container text-center">
        <h4 className="name mb-0">
          {!sectionData ? (
            <div className="placeholder">... placeholder ...</div>
          ) : (
            sectionData.title
          )}
        </h4>

        <div
          className="title mb-0"
          dangerouslySetInnerHTML={{
            __html: sectionData ? sectionData.description : "",
          }}
        ></div>

        <button
          className="btn btn-link btn-sm item-icon-material item-icon-material-after chat-bubble js-chat-button"
          aria-label="Open contact form to get in touch with Eric Njanga"
                onClick={() => { 
                  openModal({ renderingType: 'contact', dataType: '', dataId: '' });
                }}
        >
          Get in touch with me
        </button>
      </div>
    </footer>
  );
};

export default Footer;
