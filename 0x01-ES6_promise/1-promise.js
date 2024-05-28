export default function getFullResponseFromAPI(success) {
  const successMessage = {
    status: 200,
    body: 'Success',
  };
  const err = 'The fake API is not working currently';

  return new Promise((resolve, reject) => {
    if (success) {
      resolve(successMessage);
    } else {
      reject(new Error(err));
    }
  });
}
