import axios from 'axios';

export const getUsers = async page => {
  const res = await axios(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
  );
  return res.data;
};
