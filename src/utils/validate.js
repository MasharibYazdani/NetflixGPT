export const validateForm = (email, password) => {
  //   const isNameValid = /^[a-zA-ZàâäéèêëïîôöùûüÿçÀÂÄÉÈÊËÏÎÔÖÙÛÜŸÇ' -]+$/.test(
  //     name
  //   );
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //   if (isNameValid) return "Please enter a valid name";

  if (!isEmailValid) return "Please enter a valid email";

  if (!isPasswordValid)
    return "Length of password must contain 8 characters including uppercase, lowercase, special character, number.";

  return null;
};
