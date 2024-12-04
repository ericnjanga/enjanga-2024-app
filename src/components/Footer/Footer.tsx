import "./Footer.scss";
import { usePageSection } from "../../hooks/useAPI";

const Footer = () => {
  const sectionData = usePageSection("5");

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
        >
          Get in touch with me
        </button>
      </div>
    </footer>
  );
};

export default Footer;
