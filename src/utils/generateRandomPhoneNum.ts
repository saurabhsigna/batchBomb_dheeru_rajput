export const generateRandomPhoneNum = () => {
  const firstDigit = Math.floor(Math.random() * 3) + 7; // Randomly choose 7, 8, or 9
  let mobile = firstDigit.toString();

  for (let i = 1; i < 10; i++) {
    mobile += Math.floor(Math.random() * 10);
  }

  return +mobile;
};
