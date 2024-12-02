import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container text-center">
        <h4 className="name mb-0">Eric Njanga</h4>

        <p className="title mb-0">Software Engineer &amp; Designer</p>
        <address className="location mb-0">Toronto, Canada</address>

        <button
          className="btn-link"
          aria-label="Open contact form to get in touch with Eric Njanga"
        >
          Get in touch with me
        </button>
      </div>
    </footer>
  );
};

export default Footer;
