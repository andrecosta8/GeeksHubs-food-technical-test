export const errorCheck = (value) => {
 
  if (value.length <= 3) {
    return "All field must be filled and should have 3 characters at least";
  } else {
    return "ok";
  }
};
