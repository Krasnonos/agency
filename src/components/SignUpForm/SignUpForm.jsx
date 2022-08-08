import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';
import { getToken } from '../../utils/getToken';
import { postUser } from '../../utils/postUser';
// import { getPosition } from '../../utils/getPosinions';
// import { useState, useEffect } from 'react';

export const SignUpForm = ({ setIsNewUser }) => {
  // const [positions, setPositions] = useState([]);
  // useEffect(() => {
  //   getPosition().then(setPositions);
  // }, []);

  const createPostBody = async (
    { email, name, phone, position },
    resetForm
  ) => {
    const inputFile = document.querySelector('input[type="file"]');
    const file = inputFile.files[0];

    if (file.size > 5000000) {
      toast('to large image');
      return;
    }

    let formData = new FormData();
    formData.append('position_id', position);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', file);

    const { token } = await getToken();
    const { success } = await postUser(formData, token);
    if (success) {
      setIsNewUser(true);
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        phone: '',
        position: '1',
        photo: '',
      }}
      onSubmit={(values, { resetForm }) => {
        createPostBody(values, resetForm);
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
        <Field type="radio" name="position" value="1" id="frontend developer" />
        <label htmlFor="frontend developer">Frontend developer</label>
        <Field type="radio" name="position" value="2" id="backend developer" />
        <label htmlFor="backend developer">Backend developer</label>
        <Field type="radio" name="position" value="3" id="designer" />
        <label htmlFor="designer">Designer</label>
        <Field type="radio" name="position" value="4" id="qa" />
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
