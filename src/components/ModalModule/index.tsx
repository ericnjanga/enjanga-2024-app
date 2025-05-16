/**
 * MODAL FUNCTIONALITIES:
 * -------------------
 * 1) Modal Context: Expose the state and logic
 * 2) Modal Provider: Global provider of the Modal functionality, it defines the state and logic, and encapsulates "Modal Context"
 * 3) Modal Component: Renders the component according to the state and logic
 */
import { useRef } from "react";
import { useContext, useState, ReactNode } from "react";
import "./modal.scss";
import { fetchData } from "../../hooks/useAPI";
import { ModalContext } from "../../utils/contexts";
import ContactForm from "../ContactForm/ContactForm";
import Preloader from "../Preloader/Preloader";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { ContactFormRef } from "../../models";
import Icon from "../Icons/icons";
import { mockContactForm } from "../../models/mockupData";
import { useThirdPartyFormSubmission } from "../../hooks/useAPI";
import { PageSectionProps, ExpertiseSpecificationProps, ProjectProps } from "../../models";
import { getCurrentLanguage } from "../LanguageModule/utils";

/**
 * 2) Modal Provider:
 * -------------------
 * - Defines the state and logic ("opening", "closing", and "state")
 * - Encapsulates "Modal Context", and uses it to expose the state and logic to its children
 * - NOTE: Is being used at the app's global level
 * @param {*} param0
 * @returns
 */
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalContent] = useState<ExpertiseSpecificationProps | ProjectProps | PageSectionProps | null>(null);
  const [childComponent, setChildComponent] = useState('');
  const { formSubmit } = useThirdPartyFormSubmission();

  // [Core LOGIC] ...
  function openModal({ // Function to open the modal
    dataType,
    dataId,
  }: {
    dataType: string;
    dataId: string;
  }) {
    // Determining which child component should be rendered
    if (dataType === 'pageSections' && dataId === '7') {
      setChildComponent('contact');
    }

    /**
     * TODO:
     * NEEDS TO MAKE SURE THS IS PERFOMANCE OPTIMIZED
     * -- NOTE: The modal is always fetching something
     * */
    fetchData(dataType, dataId).then((response) => {
      setModalContent(response);
    });

    setIsOpen(true);
  }

  function closeModal() { // Function to close the modal
    setIsOpen(false);
    setModalContent(null);
    setChildComponent('');
  }

  // [CUSTOM LOGIC] ...
  function submitModalForm(submittedData: typeof mockContactForm.initValues) {
    formSubmit(submittedData).then((response) => {
      setModalContent(response); // Display the form submission results
      setChildComponent(''); // Hide the form anyway
    });
  }

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, childComponent, submitModalForm, modalData }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// 3) Modal Component:
// -------------------
/**
 * - Renders 2 types of content:
 * - 1) Data content
 * - 2) Other components
 * - It gets its logic from "ModalContext" and renders the UI accordingly
 * - tabindex="-1": Helps force keyboard navigation inside the modal
 * @returns
 */
const Modal = () => {
  const context = useContext(ModalContext);
  const formRef = useRef<ContactFormRef>(null);
  const currentLang = getCurrentLanguage();

  if (!context) {
    // return if the context is empty
    return <Preloader />;
  }

  function submitForm () {
    if (formRef.current) {
      formRef.current.submitForm();
    }
  }

  // Otherwise, destructure the context
  const { isOpen, childComponent, closeModal, modalData } = context;

  return (
    <>
      {isOpen && (
        <section className="appname-modal modal-wrapper" tabIndex={-1}>
          <div className="modal-content"> 
            <button className="modal-btn-close" onClick={closeModal}>
              <Icon
                name='close'
                className="icon" 
              />
            </button>
            <header className="modal-header"> 
              <Heading h='3' className={!modalData ? 'placeholder heading' : 'modal-header-heading'}>{modalData && modalData.title && modalData.title[currentLang]}</Heading>
            </header>

            <main className="modal-body">
              {!modalData ? 
                (<Preloader />) :
                (
                  <div
                    dangerouslySetInnerHTML={{ __html: modalData.description[currentLang] }}
                  ></div>
                ) 
              }  

              {childComponent === "contact" && (
                <ContactForm
                  ref={formRef}
                />
              )}
            </main>
            
            <footer className="modal-footer">
              <Button  
                variant='secondary'
                onClickHandler={closeModal} 
              >
                Close
              </Button>
              {childComponent === "contact" && ( 
                <Button  
                  variant='primary'
                  onClickHandler={submitForm} 
                >
                  Submit
                </Button>
              )}
            </footer>
          </div>

        </section>
      )}
    </>
  );
};

export default Modal;
