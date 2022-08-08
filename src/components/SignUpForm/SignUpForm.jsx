import { toast } from 'react-toastify';
import { getToken } from '../../utils/getToken';
import { postUser } from '../../utils/postUser';
import { getPosition } from '../../utils/getPosinions';
import { useState, useEffect } from 'react';

export const SignUpForm = ({ setIsNewUser }) => {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    getPosition().then(setPositions);
  }, []);

  const createPostBody = async e => {
    e.preventDefault();
    const { position, name, email, phone } = e.target.elements;

    const inputFile = document.querySelector('input[type="file"]');
    const file = inputFile.files[0];

    if (file.size > 5000000) {
      toast('to large image');
      return;
    }

    let formData = new FormData();
    formData.append('position_id', position.value);
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('phone', phone.value);
    formData.append('photo', file);

    const { token } = await getToken();
    const { success } = await postUser(formData, token);
    if (success) {
      setIsNewUser(true);
      e.target.reset();
    }
  };

  return (
    <form onSubmit={createPostBody}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        minLength="2"
        maxLength="60"
      />
      <input type="email" name="email" placeholder="Email" required />
      <label>
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          required
          pattern="^\+380\d{3}\d{2}\d{2}\d{2}$"
        />
        +38 (XXX) XXX - XX - XX
      </label>
      <p>Select your position</p>
      {positions.map(({ id, name }) => (
        <div key={id}>
          <input type="radio" name="position" value={id} id={name} />
          <label htmlFor={name}>{name}</label>
        </div>
      ))}

      <label>
        <input
          type="file"
          name="photo"
          required
          accept="image/jpeg,image/jpg"
        />
        Upload your photo
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
};
