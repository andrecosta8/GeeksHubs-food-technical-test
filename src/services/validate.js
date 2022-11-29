export const errorCheck = (value) => {
  let errorMessage = "";

  if (value.length <= 3) {
    errorMessage = "All field must be filled and should have 3 characters";
  } else {
    errorMessage = "no error";
  }
  return errorMessage;
};
