import './Navigation.scss';

const Navigation = () => {

  return (
    <nav id="main-nav" className="Navigation navbar navbar-expand-lg w-100 fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#eric-njanga">
          <img src="./images/logo-light.png" className="img-fluid" alt="Eric Njanga" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#scope-of-expertise">Scope of Expertise</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#fields-of-excellence">Fields of Excellence</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#best-work">Best Work</a>
            </li> 
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" target="_blank"
                className="btn btn-primary item-icon-material item-icon-material-after chat-bubble js-chat-button">Ask me a
                question</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;