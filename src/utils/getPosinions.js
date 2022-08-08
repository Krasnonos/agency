import axios from 'axios';

export const getPosition = async () => {
  const res = await axios(
    'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
  );
  return res.data.positions;
};
