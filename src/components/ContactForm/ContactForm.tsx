import InputField from "./InputField/InputField";

const ContactForm = () => {

  return (
    <form>
      <div className="row">
        <div className="col mb-3">
          <label htmlFor="name" className="form-label">Your name</label>
          <InputField type="text" id="name" description="NameHelp" />
        </div>

        <div className="col mb-3">
          <label htmlFor="email" className="form-label">Your email</label>
          <InputField type="email" id="email" description="EmailHelp" />
        </div>
      </div>
      <div className="col mb-3">
        <label htmlFor="select" className="form-label">How can I help?</label> 
        <select id="select" className="form-select">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Other ...</option>
        </select>
      </div>
      <div className="col mb-3">
        <label htmlFor="textarea" className="form-label">Care to give more details?</label> 
        <InputField type="textarea" id="textarea" description="TextareaHelp" />
      </div>
    </form>
  );
};


export default ContactForm;