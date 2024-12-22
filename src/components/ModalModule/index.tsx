/**
 * MODAL FUNCTIONALITIES:
 * -------------------
 * 1) Modal Context: Expose the state and logic
 * 2) Modal Provider: Global provider of the Modal functionality, it defines the state and logic, and encapsulates "Modal Context"
 * 3) Modal Component: Renders the component according to the state and logic
 */
import { useContext, useState, ReactNode } from "react";
import "./modal.scss";
import { fetchAPIData } from "../../hooks/useAPI";
import { ModalContext } from "../../utils/contexts";
import ContactForm from "../ContactForm/ContactForm";
import Preloader from "../Preloader/Preloader";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

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
  const [modalData, setModalContent] = useState(null);
  const [childComponent, setChildComponent] = useState('');
  // const { fetchDefinition } = useDefinition();

  // Function to close the modal
  function closeModal() {
    setIsOpen(false);
    setModalContent(null);
    setChildComponent('');
  }

  // Function to open the modal
  function openModal({
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
    fetchAPIData(dataType, dataId).then((result) => {
      setModalContent(result);
    });

    setIsOpen(true);
  }

  return (
    <ModalContext.Provider
      value={{ isOpen, childComponent, openModal, closeModal, modalData }}
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

  if (!context) {
    // return if the context is empty
    return <Preloader />;
  }

  // Otherwise, destructure the context
  const { isOpen, childComponent, closeModal, modalData } = context;

  return (
    <>
      {isOpen && (
        <section className="appname-modal modal-wrapper" tabIndex={-1}>
          <div className="modal-content"> 
            <header className="modal-header"> 
              <Heading h='3' className={!modalData ? 'placeholder heading' : 'modal-header-heading'}>{modalData && modalData.title}</Heading>
            </header>

            <main className="modal-body">
              {!modalData ? 
                (<Preloader />) :
                (
                  <div
                    dangerouslySetInnerHTML={{ __html: modalData.description }}
                  ></div>
                ) 
              }  

              {childComponent === "contact" && <ContactForm />  }
            </main>
            
            <footer className="modal-footer">
              <Button  
                variant='secondary'
                onClickHandler={closeModal} 
              >
                Close
              </Button>
              <Button  
                variant='primary'
                onClickHandler={closeModal} 
              >
                Submit
              </Button>
            </footer>
          </div>

        </section>
      )}
    </>
  );
};

export default Modal;
