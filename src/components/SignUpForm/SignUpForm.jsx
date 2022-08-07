import { Formik, Form, Field } from 'formik';

export const SignUpForm = ({ onSubmitForm }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        phone: '',
        position: 'frontend developer',
        photo: '',
      }}
      onSubmit={(values, { resetForm }) => {
        onSubmitForm(values, resetForm);
      }}
    >
      <Form>
        <Field
          type="text"
          name="name"
          placeholder="Your Name"
          required
          minLength="2"
          maxLength="60"
        />
        <Field type="email" name="email" placeholder="Email" required />
        <label>
          <Field
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            pattern="^\+380\d{3}\d{2}\d{2}\d{2}$"
          />
          +38 (XXX) XXX - XX - XX
        </label>
        <p>Select your position</p>
        <Field
          type="radio"
          name="position"
          value="frontend developer"
          id="frontend developer"
          checked
        />
        <label htmlFor="frontend developer">Frontend developer</label>
        <Field
          type="radio"
          name="position"
          value="backend developer"
          id="backend developer"
        />
        <label htmlFor="backend developer">Backend developer</label>
        <Field type="radio" name="position" value="designer" id="designer" />
        <label htmlFor="designer">Designer</label>
        <Field type="radio" name="position" value="qa" id="qa" />
        <label htmlFor="qa">QA</label>

        <label>
          <Field
            type="file"
            name="photo"
            required
            accept="image/jpeg,image/jpg"
          />
          Upload your photo
        </label>
        <button type="submit">Sign up</button>
      </Form>
    </Formik>
  );
};
