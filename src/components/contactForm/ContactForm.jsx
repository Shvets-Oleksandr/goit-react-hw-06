import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import css from './ContactForm.module.css';

import { nanoid } from 'nanoid';

const ContactFormSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(
      /^[(]?[0-9]{3}[)]?[-]?[0-9]{2}[-]?[0-9]{2}$/,
      'Phone must be XXX-XX-XX'
    ),
});

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name</span>
            <Field type="text" name="name" />
            <ErrorMessage
              className={css.message}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <Field type="text" name="number" />
            <ErrorMessage
              className={css.message}
              name="number"
              component="span"
            />
          </label>
          <button className={css.btnSubmit} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
