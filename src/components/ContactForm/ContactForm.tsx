import { useRef, forwardRef, useImperativeHandle } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputField from "./InputField/InputField";
import { ContactFormRef } from "../../models";
import { mockContactForm } from "../../models/mockupData";
import { useThirdPartyFormSubmission } from "../../hooks/useAPI";

/**
 * 1) We use Formik to manage the form's state and handle submission
 * 2) We use Yup to define the validation rules.
 * @returns
 */

const ContactForm = forwardRef<ContactFormRef>((props, ref) => {


  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    category: Yup.string().required("Please select an option"),
    details: Yup.string().required("Details are required"),
  });

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      if (formikRef.current) {
        formikRef.current.submitForm();
      }
    },
  }));

  const formikRef = useRef<any>(null);

  // const handleContactFormSubmit = async(values: typeof mockContactForm.initValues) => {
  //   try {
  //     const response = await fetch('https://formspree.io/f/movvqplj', {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(values),
  //     });

  //     if (response.ok) {
  //       alert("Form submitted successfully!");
  //     } else {
  //       alert("Failed to submit the form.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  return (
    <Formik
      initialValues={mockContactForm.initValues}
      validationSchema={validationSchema}
      innerRef={formikRef}
      onSubmit={(values, { resetForm }) => {
        handleContactFormSubmit(values);
        // console.log("Form submitted with values:", values);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="name" className="form-label">
                Your name
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
                Your email
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
              How can I help?
            </label>
            <Field name="category">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputField
                  {...field}
                  meta={meta}
                  elementType="select"
                  id="category"
                  options={[
                    { value: "", label: "Select an option" },
                    { value: "consulting", label: "Technical consulting" },
                    { value: "design", label: "Application design" },
                    { value: "teaching", label: "Teaching/mentoring" },
                    { value: "other", label: "Other ..." },
                  ]}
                  // description="SelectHelp"
                />
              )}
            </Field> 
          </div>

          <div className="col mb-3">
            <label htmlFor="textarea" className="form-label">
              Care to give more details?
            </label>
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
