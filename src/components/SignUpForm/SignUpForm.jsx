import { toast } from 'react-toastify';
import { Button } from '../Button/Button';
import { getToken } from '../../utils/getToken';
import { postUser } from '../../utils/postUser';
import { getPosition } from '../../utils/getPosinions';
import { useState, useEffect, useRef } from 'react';
import {
  From,
  Input,
  PhoneBox,
  PhoneLabel,
  PositionText,
  RadiosWrap,
  Label,
  RadioInput,
  CheckMark,
  UploadInput,
  UploadLabel,
  UploadSpan,
  BtnWrap,
} from './SignUpForm.styled';

export const SignUpForm = ({ setIsNewUser }) => {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    getPosition().then(setPositions);
  }, []);

  const form = useRef(null);

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

    try {
      const { token } = await getToken();
      const { success } = await postUser(formData, token);

      if (success) {
        setIsNewUser(true);

        const submitBtn = document.querySelector('button[type="submit"]');
        submitBtn.disabled = true;

        e.target.reset();
      }
    } catch (error) {
      toast(error.message);
    }
  };

  const makeSubmitBtnActive = e => {
    const { email, name, phone, photo, position } = form.current.elements;
    const values = [
      email.value,
      name.value,
      phone.value,
      photo.value,
      position.value,
    ];

    const isEmpty = values.includes('');
    const submitBtn = document.querySelector('button[type="submit"]');

    if (isEmpty) {
      submitBtn.disabled = true;
    }

    if (!isEmpty) {
      submitBtn.disabled = false;
    }
  };

  return (
    <From onSubmit={createPostBody} ref={form}>
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        minLength="2"
        maxLength="60"
        onChange={makeSubmitBtnActive}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={makeSubmitBtnActive}
      />
      <PhoneBox>
        <Input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          required
          pattern="^\+380\d{3}\d{2}\d{2}\d{2}$"
          onChange={makeSubmitBtnActive}
        />
        <PhoneLabel htmlFor="phone">+38 (XXX) XXX-XX-XX</PhoneLabel>
      </PhoneBox>
      <PositionText>Select your position</PositionText>
      <RadiosWrap>
        {positions.map(({ id, name }) => (
          <Label key={id}>
            <RadioInput
              type="radio"
              name="position"
              value={id}
              onChange={makeSubmitBtnActive}
            />
            <CheckMark></CheckMark>
            {name}
          </Label>
        ))}
      </RadiosWrap>
      <UploadInput
        type="file"
        name="photo"
        id="fileElem"
        required
        accept="image/jpeg,image/jpg"
        onChange={makeSubmitBtnActive}
      />
      <UploadLabel htmlFor="fileElem">
        <UploadSpan>Upload</UploadSpan>Upload your photo
      </UploadLabel>
      <BtnWrap>
        <Button disabled={true} type="submit">
          Sign up
        </Button>
      </BtnWrap>
    </From>
  );
};
