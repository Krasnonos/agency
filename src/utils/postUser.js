import { toast } from 'react-toastify';

export const postUser = (formData, token) => {
  return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'POST',
    body: formData,
    headers: { Token: token },
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        toast('succses');
      } else {
        toast(data.message);
      }
      return data;
    })
    .catch(err => toast('invalid values'));
};
