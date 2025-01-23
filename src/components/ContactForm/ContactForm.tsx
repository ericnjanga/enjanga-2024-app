import { useContext, useRef, forwardRef, useImperativeHandle } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputField from "./InputField/InputField";
import { ContactFormRef } from "../../models";
import { mockContactForm } from "../../models/mockupData";
import { ModalContext } from "../../utils/contexts";
import Preloader from "../Preloader/Preloader";
import { useTranslation } from 'react-i18next';
import CharacterCounter from "../CharacterCounter/CharacterCounter";
import './ContactForm.scss';

/**
 * 1) We use Formik to manage the form's state and handle submission
 * 2) We use Yup to define the validation rules.
 * @returns
 */

const ContactForm = forwardRef<ContactFormRef>((props, ref) => {
  const context = useContext(ModalContext);
    const { t } = useTranslation();

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      if (formikRef.current) {
        formikRef.current.submitForm();
      }
    },
  }));

  const formikRef = useRef<any>(null);

  if (!context) {
    // return if the context is empty
    return <Preloader />;
  }

  // Otherwise, destructure the context
  const { submitModalForm } = context;

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required(t('Namerequired')),
    email: Yup.string()
      .email(t('Invalidemail'))
      .required(t('Emailquired')),
    category: Yup.string().required(t('PleaseSelectoption')),
    details: Yup.string()
    .min(100, t('Details100Minchars')) // Require a minimum of characters
    .max(280, t('Details280Maxchars')) // Maximum characters
    .required(t('Detailsrequired')), // Ensure it's not empty
  });

  return (
    <Formik
      initialValues={mockContactForm.initValues}
      validationSchema={validationSchema}
      innerRef={formikRef}
      onSubmit={(values, { resetForm }) => {
        submitModalForm(values);
        // handleContactFormSubmit(values);
        // console.log("Form submitted with values:", values);
        resetForm();
      }}
    >
      {({ values, handleChange, handleBlur, errors, touched }) => (
        <Form className="ContactForm">
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="name" className="form-label">
              { t('Yourname') }
              </label>
              <Field name="name">
                {({ field, meta }: { field: any; meta: any }) => (
                  <InputField
                    {...field}
                    meta={meta}
                    type="text"
                    id="name"
                    // description="NameHelp"
                  />
                )}
              </Field> 
            </div>

            <div className="col mb-3">
              <label htmlFor="email" className="form-label">
              { t('Youremail') }
              </label>
              <Field name="email">
                {({ field, meta }: { field: any; meta: any }) => (
                  <InputField
                    {...field}
                    meta={meta}
                    type="emailt"
                    id="email"
                    // description="NameHelp"
                  />
                )}
              </Field>  
            </div>
          </div>

          <div className="col mb-3">
            <label htmlFor="select" className="form-label">
            { t('HowcanIhelp') } 
            </label>
            <Field name="category">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputField
                  {...field}
                  meta={meta}
                  elementType="select"
                  id="category"
                  options={[
                    { value: "", label: t('Selectoption') },
                    { value: "consulting", label: t('Techconsulting') },
                    { value: "design", label: t('Appdesign') },
                    { value: "teaching", label: t('Teachmentor') },
                    { value: "other", label: t('Other') }, 
                  ]}
                  // description="SelectHelp"
                />
              )}
            </Field> 
          </div>

          <div className="col mb-3 position-relative">
            <label htmlFor="textarea" className="form-label">
            { t('Caregivedetails') } 
            </label>
            
            {values.details.length > 0 &&
              <CharacterCounter
                value={values.details}
                minLength={100}
                maxLength={280}
              />
            } 

            <Field name="details">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputField
                  {...field}
                  meta={meta}
                  elementType="textarea"
                  id="details"
                  // description="TextareaHelp"
                />
              )}
            </Field> 
          </div> 
        </Form>
      )}
    </Formik>
  );
});

export default ContactForm;
