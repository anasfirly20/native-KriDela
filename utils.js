export const clearObject = (currentState, setState) => {
  const clearedState = Object.fromEntries(
    Object.keys(currentState).map((key) => [key, ""])
  );
  setState(clearedState);
};

// Function for forms validation
export const validationFunction = (fields) => {
  let noEmpty = true;
  Object.entries(fields).forEach(([key, value]) => {
    if (!value) {
      noEmpty = false;
    }
  });
  return noEmpty;
};
