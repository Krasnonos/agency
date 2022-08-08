export const getToken = () => {
  return fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/token'
  ).then(res => res.json());
};
