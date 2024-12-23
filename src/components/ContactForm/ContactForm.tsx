import { useRef, forwardRef, useImperativeHandle } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputField from "./InputField/InputField";
import { ContactFormRef } from "../../models";

/**
 * 1) We use Formik to manage the form's state and handle submission
 * 2) We use Yup to define the validation rules.
 * @returns
 */

const ContactForm = forwardRef<ContactFormRef>((props, ref) => {
  const initialValues ={
    name: "",
    email: "",
    category: "",
    details: "",
  };

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

  const handleFormSubmit = (values: typeof initialValues) => {
    // Construct the mailto URL
    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nCategory: ${values.category}\nDetails: ${values.details}`
    );
    const mailtoUrl = `mailto:eric.njanga@gmail.com?subject=${subject}&body=${body}`;

    // Redirect to the mailto URL
    window.location.href = mailtoUrl;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      innerRef={formikRef}
      onSubmit={(values, { resetForm }) => {
        handleFormSubmit(values);
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
